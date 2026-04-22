import { Lead, AgentLog } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

// API Service for frontend
export class ApiService {
  // Lead API calls
  static async getAllLeads(): Promise<Lead[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Transform MongoDB data to frontend format
      return data.map((lead: any) => ({
        id: lead._id,
        name: lead.name,
        email: lead.email,
        company: lead.company,
        lastContact: lead.lastContact ? new Date(lead.lastContact).toISOString() : new Date().toISOString(),
        status: lead.status,
        demographics: lead.demographics,
        history: lead.history || []
      }));
    } catch (error) {
      console.error('Error fetching leads from API:', error);
      throw error;
    }
  }

  static async getLeadById(id: string): Promise<Lead | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const lead = await response.json();
      
      // Transform MongoDB data to frontend format
      return {
        id: lead._id,
        name: lead.name,
        email: lead.email,
        company: lead.company,
        lastContact: lead.lastContact ? new Date(lead.lastContact).toISOString() : new Date().toISOString(),
        status: lead.status,
        demographics: lead.demographics,
        history: lead.history || []
      };
    } catch (error) {
      console.error('Error fetching lead from API:', error);
      throw error;
    }
  }

  static async createLead(leadData: Partial<Lead>): Promise<Lead> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const lead = await response.json();
      
      // Transform MongoDB data to frontend format
      return {
        id: lead._id,
        name: lead.name,
        email: lead.email,
        company: lead.company,
        lastContact: lead.lastContact,
        status: lead.status,
        demographics: lead.demographics,
        history: lead.history || []
      };
    } catch (error) {
      console.error('Error creating lead via API:', error);
      throw error;
    }
  }

  static async updateLead(id: string, leadData: Partial<Lead>): Promise<Lead | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const lead = await response.json();
      
      // Transform MongoDB data to frontend format
      return {
        id: lead._id,
        name: lead.name,
        email: lead.email,
        company: lead.company,
        lastContact: lead.lastContact,
        status: lead.status,
        demographics: lead.demographics,
        history: lead.history || []
      };
    } catch (error) {
      console.error('Error updating lead via API:', error);
      throw error;
    }
  }

  static async deleteLead(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting lead via API:', error);
      throw error;
    }
  }

  // Agent Log API calls
  static async getAllLogs(): Promise<AgentLog[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/logs`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Transform MongoDB data to frontend format
      return data.map((log: any) => ({
        id: log._id,
        agent: log.agent,
        status: log.status,
        detail: log.detail,
        timestamp: log.timestamp ? new Date(log.timestamp).toISOString() : new Date().toISOString(),
        data: log.data
      }));
    } catch (error) {
      console.error('Error fetching logs from API:', error);
      throw error;
    }
  }

  static async createLog(logData: Partial<AgentLog>): Promise<AgentLog> {
    try {
      const response = await fetch(`${API_BASE_URL}/logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const log = await response.json();
      
      // Transform MongoDB data to frontend format
      return {
        id: log._id,
        agent: log.agent,
        status: log.status,
        detail: log.detail,
        timestamp: log.timestamp ? new Date(log.timestamp).toISOString() : new Date().toISOString(),
        data: log.data
      };
    } catch (error) {
      console.error('Error creating log via API:', error);
      throw error;
    }
  }

  static async clearLogs(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/logs`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return true;
    } catch (error) {
      console.error('Error clearing logs via API:', error);
      throw error;
    }
  }
}

// Export as LeadService and AgentLogService for compatibility
export const LeadService = ApiService;
export const AgentLogService = ApiService;
