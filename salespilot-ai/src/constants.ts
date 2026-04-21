import { Lead } from './types';

export const MOCK_LEADS: Lead[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah@techflow.io',
    company: 'TechFlow',
    lastContact: '2024-03-15',
    status: 'New',
    demographics: 'VP Engineering, 200+ employees, Series B',
    history: ['Visited pricing page 3 times', 'Downloaded whitepaper']
  },
  {
    id: '2',
    name: 'Marcus Miller',
    email: 'm.miller@globalretail.com',
    company: 'Global Retail Corp',
    lastContact: '2024-03-01',
    status: 'Contacted',
    demographics: 'IT Director, 5000+ employees',
    history: ['Email sent 14 days ago', 'No response']
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    email: 'elena@startup.ai',
    company: 'StartupAI',
    lastContact: '2024-03-20',
    status: 'New',
    demographics: 'Founder, 10 employees',
    history: ['Signed up for free trial yesterday']
  }
];
