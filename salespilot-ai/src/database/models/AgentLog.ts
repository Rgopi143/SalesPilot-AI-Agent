import mongoose, { Document, Schema } from 'mongoose';

export interface IAgentLog extends Document {
  agent: string;
  status: 'working' | 'complete' | 'error' | 'skipped';
  detail: string;
  timestamp: Date;
  data?: any;
  leadId?: string;
  executionTime?: number;
}

const AgentLogSchema: Schema = new Schema({
  agent: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['working', 'complete', 'error', 'skipped'],
    default: 'working',
  },
  detail: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  data: {
    type: Schema.Types.Mixed,
  },
  leadId: {
    type: Schema.Types.ObjectId,
    ref: 'Lead',
  },
  executionTime: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Indexes for better performance
AgentLogSchema.index({ agent: 1 });
AgentLogSchema.index({ status: 1 });
AgentLogSchema.index({ timestamp: -1 });
AgentLogSchema.index({ leadId: 1 });

export const AgentLog = mongoose.model<IAgentLog>('AgentLog', AgentLogSchema);
