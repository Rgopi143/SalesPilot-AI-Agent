import mongoose, { Document, Schema } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  company: string;
  phone?: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Closed';
  lastContact: Date;
  demographics?: string;
  history?: string[];
  score?: number;
  priority?: 'High' | 'Medium' | 'Low';
  assignedAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Closed'],
    default: 'New',
  },
  lastContact: {
    type: Date,
    default: Date.now,
  },
  demographics: {
    type: String,
    trim: true,
  },
  history: [{
    type: String,
  }],
  score: {
    type: Number,
    min: 0,
    max: 100,
    default: 50,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  assignedAgent: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Indexes for better performance
LeadSchema.index({ email: 1 });
LeadSchema.index({ company: 1 });
LeadSchema.index({ status: 1 });
LeadSchema.index({ score: -1 });
LeadSchema.index({ lastContact: -1 });

export const Lead = mongoose.model<ILead>('Lead', LeadSchema);
