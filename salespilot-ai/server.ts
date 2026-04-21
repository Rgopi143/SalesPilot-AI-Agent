import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { connectDB } from "./src/database/connection";
import { initializeDatabase } from "./src/services/databaseService";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  // Connect to MongoDB
  await connectDB();
  await initializeDatabase();
  
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/leads", async (req, res) => {
    try {
      const { LeadService } = await import("./src/services/databaseService");
      const leads = await LeadService.getAllLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  app.get("/api/leads/:id", async (req, res) => {
    try {
      const { LeadService } = await import("./src/services/databaseService");
      const lead = await LeadService.getLeadById(req.params.id);
      if (!lead) {
        return res.status(404).json({ error: "Lead not found" });
      }
      res.json(lead);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch lead" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const { LeadService } = await import("./src/services/databaseService");
      const lead = await LeadService.createLead(req.body);
      res.status(201).json(lead);
    } catch (error) {
      res.status(500).json({ error: "Failed to create lead" });
    }
  });

  app.put("/api/leads/:id", async (req, res) => {
    try {
      const { LeadService } = await import("./src/services/databaseService");
      const lead = await LeadService.updateLead(req.params.id, req.body);
      if (!lead) {
        return res.status(404).json({ error: "Lead not found" });
      }
      res.json(lead);
    } catch (error) {
      res.status(500).json({ error: "Failed to update lead" });
    }
  });

  app.delete("/api/leads/:id", async (req, res) => {
    try {
      const { LeadService } = await import("./src/services/databaseService");
      await LeadService.deleteLead(req.params.id);
      res.json({ message: "Lead deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete lead" });
    }
  });

  app.get("/api/logs", async (req, res) => {
    try {
      const { AgentLogService } = await import("./src/services/databaseService");
      const logs = await AgentLogService.getAllLogs();
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch logs" });
    }
  });

  app.post("/api/logs", async (req, res) => {
    try {
      const { AgentLogService } = await import("./src/services/databaseService");
      const log = await AgentLogService.createLog(req.body);
      res.status(201).json(log);
    } catch (error) {
      res.status(500).json({ error: "Failed to create log" });
    }
  });

  app.delete("/api/logs", async (req, res) => {
    try {
      const { AgentLogService } = await import("./src/services/databaseService");
      await AgentLogService.clearLogs();
      res.json({ message: "Logs cleared successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to clear logs" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static files from dist in production, use Vite middleware in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`MongoDB Compass Connection: mongodb://localhost:27017/salespilot-ai`);
    console.log(`Use this connection string in MongoDB Compass to connect to the database`);
  });
}

startServer();
