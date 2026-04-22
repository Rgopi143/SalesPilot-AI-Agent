import { MongoClient } from 'mongodb';

async function startMongoDB() {
  const uri = 'mongodb://localhost:27017/salespilot-ai';
  const client = new MongoClient(uri);

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB successfully!');

    const database = client.db('salespilot-ai');
    
    // Check if leads collection exists and has data
    const leadsCollection = database.collection('leads');
    const leadCount = await leadsCollection.countDocuments();
    
    if (leadCount === 0) {
      console.log('No leads found. Creating sample data...');
      
      // Sample leads data
      const sampleLeads = [
        {
          name: 'Sarah Chen',
          email: 'sarah@techflow.io',
          company: 'TechFlow',
          phone: '+91 98765 43210',
          status: 'New',
          demographics: 'VP Engineering, 200+ employees, Series B',
          history: ['Visited pricing page 3 times', 'Downloaded whitepaper'],
          lastContact: new Date(),
          score: 85,
          priority: 'High',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marcus Miller',
          email: 'm.miller@globalretail.com',
          company: 'Global Retail Corp',
          phone: '+91 98765 43211',
          status: 'Contacted',
          demographics: 'IT Director, 5000+ employees',
          history: ['Email sent 14 days ago', 'No response'],
          lastContact: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
          score: 72,
          priority: 'Medium',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Elena Rodriguez',
          email: 'elena@startup.ai',
          company: 'StartupAI',
          phone: '+91 98765 43212',
          status: 'New',
          demographics: 'Founder, 10 employees',
          history: ['Signed up for free trial yesterday'],
          lastContact: new Date(),
          score: 90,
          priority: 'High',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      await leadsCollection.insertMany(sampleLeads);
      console.log(`Created ${sampleLeads.length} sample leads`);
    } else {
      console.log(`Found ${leadCount} existing leads in database`);
    }

    // Check if agentlogs collection exists
    const logsCollection = database.collection('agentlogs');
    const logCount = await logsCollection.countDocuments();
    console.log(`Found ${logCount} existing logs in database`);

    console.log('MongoDB is ready! You can now connect with MongoDB Compass using:');
    console.log('mongodb://localhost:27017/salespilot-ai');
    
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

startMongoDB();
