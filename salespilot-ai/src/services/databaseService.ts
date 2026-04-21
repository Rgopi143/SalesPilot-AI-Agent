import { Lead, ILead } from '../database/models/Lead';
import { AgentLog, IAgentLog } from '../database/models/AgentLog';
import { connectDB, disconnectDB } from '../database/connection';

// Lead Services
export class LeadService {
  static async getAllLeads(): Promise<ILead[]> {
    await connectDB();
    try {
      const leads = await Lead.find().sort({ lastContact: -1 });
      return leads;
    } catch (error) {
      console.error('Error fetching leads:', error);
      throw error;
    }
  }

  static async getLeadById(id: string): Promise<ILead | null> {
    await connectDB();
    try {
      const lead = await Lead.findById(id);
      return lead;
    } catch (error) {
      console.error('Error fetching lead:', error);
      throw error;
    }
  }

  static async createLead(leadData: Partial<ILead>): Promise<ILead> {
    await connectDB();
    try {
      const lead = new Lead(leadData);
      const savedLead = await lead.save();
      return savedLead;
    } catch (error) {
      console.error('Error creating lead:', error);
      throw error;
    }
  }

  static async updateLead(id: string, leadData: Partial<ILead>): Promise<ILead | null> {
    await connectDB();
    try {
      const updatedLead = await Lead.findByIdAndUpdate(
        id, 
        leadData, 
        { new: true, runValidators: true }
      );
      return updatedLead;
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  }

  static async deleteLead(id: string): Promise<boolean> {
    await connectDB();
    try {
      await Lead.findByIdAndDelete(id);
      return true;
    } catch (error) {
      console.error('Error deleting lead:', error);
      throw error;
    }
  }

  static async searchLeads(query: string): Promise<ILead[]> {
    await connectDB();
    try {
      const leads = await Lead.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { company: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } }
        ]
      }).sort({ lastContact: -1 });
      return leads;
    } catch (error) {
      console.error('Error searching leads:', error);
      throw error;
    }
  }

  static async getLeadsByStatus(status: string): Promise<ILead[]> {
    await connectDB();
    try {
      const leads = await Lead.find({ status }).sort({ lastContact: -1 });
      return leads;
    } catch (error) {
      console.error('Error fetching leads by status:', error);
      throw error;
    }
  }
}

// AgentLog Services
export class AgentLogService {
  static async createLog(logData: Partial<IAgentLog>): Promise<IAgentLog> {
    await connectDB();
    try {
      const log = new AgentLog(logData);
      const savedLog = await log.save();
      return savedLog;
    } catch (error) {
      console.error('Error creating agent log:', error);
      throw error;
    }
  }

  static async getLogsByLeadId(leadId: string): Promise<IAgentLog[]> {
    await connectDB();
    try {
      const logs = await AgentLog.find({ leadId }).sort({ timestamp: -1 });
      return logs;
    } catch (error) {
      console.error('Error fetching logs for lead:', error);
      throw error;
    }
  }

  static async getAllLogs(): Promise<IAgentLog[]> {
    await connectDB();
    try {
      const logs = await AgentLog.find().sort({ timestamp: -1 });
      return logs;
    } catch (error) {
      console.error('Error fetching all logs:', error);
      throw error;
    }
  }

  static async clearLogs(): Promise<boolean> {
    await connectDB();
    try {
      await AgentLog.deleteMany({});
      return true;
    } catch (error) {
      console.error('Error clearing logs:', error);
      throw error;
    }
  }
}

// Database initialization
export const initializeDatabase = async () => {
  try {
    await connectDB();
    console.log('Database initialized successfully');
    
    // Create sample data if database is empty
    const leadCount = await Lead.countDocuments();
    if (leadCount === 0) {
      console.log('Creating sample data...');
      // Sample leads will be created here if needed
    }
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
};
