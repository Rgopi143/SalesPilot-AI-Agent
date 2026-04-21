# MongoDB Compass Setup Guide

## 🎯 **Prerequisites**
- MongoDB Compass installed on your machine
- MongoDB Server running locally or MongoDB Atlas account

## 🔗 **Connection Instructions**

### **Option 1: Local MongoDB Connection**
1. **Start MongoDB Server**
   ```bash
   # If using MongoDB Community Edition
   mongod
   ```

2. **Open MongoDB Compass**
   - Launch MongoDB Compass application
   - Click "New Connection"

3. **Configure Connection**
   - **Connection String**: `mongodb://localhost:27017/salespilot-ai`
   - **Authentication**: None (for local development)
   - **Database**: `salespilot-ai`
   - Click "Connect"

### **Option 2: MongoDB Atlas (Cloud)**
1. **Create Atlas Account**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com/)
   - Create free account and cluster

2. **Get Connection String**
   - In Atlas dashboard: "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

3. **Update Environment**
   - Update `.env` file with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/salespilot-ai?retryWrites=true&w=majority
   ```

4. **Connect with Compass**
   - Use the same connection string in MongoDB Compass
   - Add username and password when prompted

## 📊 **Database Schema**

### **Leads Collection**
```javascript
{
  name: String (required),
  email: String (required, unique),
  company: String (required),
  phone: String,
  status: String (enum: ['New', 'Contacted', 'Qualified', 'Closed']),
  lastContact: Date,
  demographics: String,
  history: [String],
  score: Number (0-100),
  priority: String (enum: ['High', 'Medium', 'Low']),
  assignedAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **AgentLogs Collection**
```javascript
{
  agent: String (required),
  status: String (enum: ['working', 'complete', 'error', 'skipped']),
  detail: String (required),
  timestamp: Date,
  data: Mixed,
  leadId: ObjectId (ref: 'Lead'),
  executionTime: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 **API Endpoints**

### **Leads Management**
- `GET /api/leads` - Get all leads
- `GET /api/leads/:id` - Get specific lead
- `POST /api/leads` - Create new lead
- `PUT /api/leads/:id` - Update lead
- `DELETE /api/leads/:id` - Delete lead

### **Agent Logs Management**
- `GET /api/logs` - Get all agent logs
- `POST /api/logs` - Create new log entry
- `DELETE /api/logs` - Clear all logs

## 🔧 **Development Setup**

### **1. Install Dependencies**
```bash
npm install mongodb mongoose @types/mongodb
```

### **2. Environment Configuration**
```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env with your configuration
MONGODB_URI=mongodb://localhost:27017/salespilot-ai
```

### **3. Start Application**
```bash
# Start MongoDB server (if using local)
mongod

# Start the application
npm run dev
```

## 🎨 **Using MongoDB Compass**

### **Viewing Data**
1. **Connect to Database**
   - Use the connection string above
   - Navigate to `salespilot-ai` database

2. **Explore Collections**
   - `leads` - All lead data
   - `agentlogs` - Agent execution logs
   - `users` - User accounts (if implemented)

3. **Query Examples**
   ```javascript
   // Find high-priority leads
   { priority: "High", status: "New" }
   
   // Find recent logs
   { timestamp: { $gte: new Date(Date.now() - 24*60*60*1000) } }
   
   // Find leads by company
   { company: { $regex: "TechFlow", $options: "i" } }
   ```

### **Index Performance**
The following indexes are automatically created for better performance:
- `leads.email` - For email lookups
- `leads.company` - For company searches
- `leads.status` - For status filtering
- `leads.score` - For score-based sorting
- `leads.lastContact` - For chronological sorting
- `agentlogs.agent` - For agent filtering
- `agentlogs.timestamp` - For log sorting
- `agentlogs.leadId` - For lead-specific logs

## 🐛 **Troubleshooting**

### **Connection Issues**
- **Local MongoDB**: Ensure `mongod` is running
- **Firewall**: Check port 27017 is open
- **Authentication**: Verify username/password for Atlas
- **Network**: Check internet connection for Atlas

### **Performance**
- **Indexes**: Automatically created for common queries
- **Pagination**: Use `limit()` and `skip()` for large datasets
- **Aggregation**: Use MongoDB aggregation for complex queries

## 📱 **Application Integration**

The SalesPilot AI application automatically:
- ✅ Connects to MongoDB on startup
- ✅ Creates necessary indexes
- ✅ Handles connection errors gracefully
- ✅ Provides REST API for data operations
- ✅ Logs all database operations

## 🔗 **Useful Links**
- [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)
- [MongoDB Atlas](https://cloud.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

---

**Note**: The application is configured to work seamlessly with both local MongoDB and MongoDB Atlas. Choose the option that best fits your development workflow.
