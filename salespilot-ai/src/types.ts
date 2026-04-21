export type Priority = 'High' | 'Medium' | 'Low';
export type Action = 'Send Email' | 'Call' | 'Wait' | 'Discard';

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  lastContact: string; // ISO Date
  status: 'New' | 'Contacted' | 'Qualified' | 'Closed';
  demographics?: string;
  history?: string[];
}

export interface AgentLog {
  id: string;
  agent: string;
  status: 'working' | 'complete' | 'error' | 'skipped';
  detail: string;
  timestamp: string;
  data?: any;
}

export interface AgentResponse {
  priority: Priority;
  reason: string;
  action: Action;
  email?: {
    subject: string;
    body: string;
  };
}
