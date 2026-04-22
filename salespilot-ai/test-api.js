// Simple test to verify API service works
import { LeadService } from './src/services/apiService.ts';

async function testAPI() {
  try {
    console.log('Testing API service...');
    
    // Test getAllLeads
    const leads = await LeadService.getAllLeads();
    console.log('Leads fetched:', leads.length);
    console.log('First lead:', leads[0]);
    
    console.log('API test successful!');
  } catch (error) {
    console.error('API test failed:', error);
  }
}

testAPI();
