import { GoogleGenAI } from "@google/genai";
import { Lead, AgentLog } from "../types";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn('GEMINI_API_KEY not found. AI features will be disabled.');
}
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function processLeadOrchestration(
  lead: Lead,
  context: any,
  onLog: (log: Omit<AgentLog, 'id' | 'timestamp'>) => void
) {
  const model = "gemini-3-flash-preview";

  const log = (agent: string, status: 'working' | 'complete' | 'error' | 'skipped', detail: string, data?: any) => {
    onLog({ agent, status, detail, data });
  };

  if (!ai) {
    log("System", "error", "AI services unavailable - GEMINI_API_KEY not configured");
    throw new Error("AI services unavailable - Please configure GEMINI_API_KEY");
  }

  try {
    // 1. Lead Analyzer Agent
    log("Lead Analyzer", "working", "Analyzing lead demographics and history...");
    const analysisPrompt = `
      Analyze this lead for priority (High, Medium, Low) and provide a reason.
      Lead Data: ${JSON.stringify(lead)}
      Context: ${JSON.stringify(context)}
      Return ONLY valid JSON: { "priority": "...", "reason": "..." }
    `;
    const analysisResponse = await ai.models.generateContent({
      model,
      contents: [{ role: "user", parts: [{ text: analysisPrompt }] }]
    });
    const analysis = JSON.parse(analysisResponse.text.replace(/```json|```/g, "").trim());
    log("Lead Analyzer", "complete", `Priority determined as ${analysis.priority}`, analysis);

    // 2. Decision Agent
    log("Decision Agent", "working", "Determining next best action based on priority and history...");
    const decisionPrompt = `
      Based on the lead analysis: ${JSON.stringify(analysis)}
      Decide the best action (Send Email, Call, Wait, Discard).
      Return ONLY valid JSON: { "action": "...", "logic": "..." }
    `;
    const decisionResponse = await ai.models.generateContent({
      model,
      contents: [{ role: "user", parts: [{ text: decisionPrompt }] }]
    });
    const decision = JSON.parse(decisionResponse.text.replace(/```json|```/g, "").trim());
    log("Decision Agent", "complete", `Action decided: ${decision.action}`, decision);

    let emailData = null;

    // 3. Email Agent (If action is Send Email)
    if (decision.action === "Send Email") {
      log("Email Agent", "working", "Generating personalized follow-up email...");
      const emailPrompt = `
        Generate a professional and personalized follow-up email for: ${lead.name}
        Reason: ${analysis.reason}
        Context: ${JSON.stringify(context)}
        Return ONLY valid JSON: { "subject": "...", "body": "..." }
      `;
      const emailResponse = await ai.models.generateContent({
        model,
        contents: [{ role: "user", parts: [{ text: emailPrompt }] }]
      });
      emailData = JSON.parse(emailResponse.text.replace(/```json|```/g, "").trim());
      log("Email Agent", "complete", "Generated follow-up email", emailData);
    } else {
      log("Email Agent", "skipped", "Action is not email-based");
    }

    // 4. Tool/CRM Agent
    log("Tool Agent", "working", "Syncing decisions with simulated CRM...");
    // Simulate API call to CRM
    await new Promise(resolve => setTimeout(resolve, 1000));
    log("Tool Agent", "complete", "CRM updated successfully with new status and follow-up task.");

    return {
      priority: analysis.priority,
      reason: analysis.reason,
      action: decision.action,
      email: emailData
    };
  } catch (error: any) {
    console.error("Agent Error:", error);
    log("System", "error", `Operational Failure: ${error.message}`);
    throw error;
  }
}
