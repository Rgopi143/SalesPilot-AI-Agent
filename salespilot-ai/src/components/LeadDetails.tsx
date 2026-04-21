import React, { useState, useEffect } from 'react';
import { Lead, AgentResponse } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertCircle, Mail, Phone, Zap, Send, MessageSquareText, 
  Search, Settings, User, History, Building2, Calendar, 
  ExternalLink, BarChart3, Star, MoreVertical, Activity, ArrowRight,
  TrendingUp, Clock, Target, Brain, Sparkles, Eye, Edit, Trash2,
  CheckCircle, XCircle, AlertTriangle, FileText, Globe, MapPin
} from 'lucide-react';

interface LeadDetailsProps {
  lead: Lead;
  onProcess: () => void;
  isProcessing: boolean;
  result?: AgentResponse;
}

export const LeadDetails: React.FC<LeadDetailsProps> = ({ lead, onProcess, isProcessing, result }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactions' | 'notes' | 'activity'>('overview');
  const [isHovered, setIsHovered] = useState(false);
  const [score, setScore] = useState(85);
  const [engagementLevel, setEngagementLevel] = useState<'high' | 'medium' | 'low'>('high');
  const [isEditing, setIsEditing] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => Math.max(70, Math.min(95, prev + (Math.random() - 0.5) * 5)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'interactions', label: 'Interactions', icon: MessageSquareText },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'activity', label: 'Activity', icon: History },
  ];

  const quickActions = [
    { icon: Mail, label: 'Send Email', color: 'text-blue-500' },
    { icon: Phone, label: 'Call', color: 'text-green-500' },
    { icon: Calendar, label: 'Schedule', color: 'text-purple-500' },
    { icon: Edit, label: 'Edit', color: 'text-orange-500' },
  ];

  return (
    <div className="flex flex-col h-full bg-bg-main overflow-y-auto" id="lead-details">
      {/* Enhanced Header Banner */}
      <div className="p-8 border-b border-zinc-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-50" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-brand/20 to-brand/10 border border-brand/30 rounded-[28px] overflow-hidden flex items-center justify-center text-4xl font-black text-brand shadow-xl shadow-brand/20 neon-border relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {lead.name.split(' ').map(n => n[0]).join('')}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute inset-0 bg-brand/20 rounded-[28px] flex items-center justify-center"
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-black tracking-tight gradient-text">{lead.name}</h1>
                  <motion.span 
                    className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[8px] font-black uppercase tracking-widest border border-brand/20 pulse-glow"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    High Priority
                  </motion.span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowActions(!showActions)}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              <p className="text-zinc-500 font-medium flex items-center gap-2 text-sm uppercase tracking-wide">
                <Building2 size={14} className="text-zinc-600" />
                {lead.company}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Mail size={12} className="text-zinc-600" />
                  <span className="text-xs text-zinc-400">{lead.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-zinc-600" />
                  <span className="text-xs text-zinc-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <AnimatePresence>
            {showActions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                className="absolute top-8 right-8 bg-zinc-900 border border-zinc-800 rounded-xl p-2 shadow-xl"
              >
                <div className="flex flex-col gap-1">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors text-sm text-zinc-300 hover:text-white"
                    >
                      <action.icon className={`w-4 h-4 ${action.color}`} />
                      <span>{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Lead Score Card */}
          <motion.div 
            className="glass-card p-4 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl font-black gradient-text mb-1">{score}</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">Lead Score</div>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(score / 20)
                      ? 'text-yellow-500 fill-current'
                      : 'text-zinc-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>
          
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-800 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                <MoreVertical size={14} />
                Actions
             </button>
             <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onProcess}
              disabled={isProcessing}
              className={`flex items-center gap-3 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl transition-all ${
                isProcessing 
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700' 
                  : 'bg-brand text-white hover:bg-brand-light shadow-brand/20 border border-brand/20'
              }`}
            >
              {isProcessing ? (
                <>
                  <Zap className="w-4 h-4 animate-pulse fill-current" />
                  Analyzing...
                </>
              ) : (
                <>
                <Zap className="w-4 h-4 fill-current" />
                Initiate Agent Run
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Core Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex border-b border-zinc-800 gap-8">
              {['Overview', 'Interactions', 'Notes', 'Activity'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase() as any)}
                  className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === tab.toLowerCase() ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="stat-card">
                       <div className="flex justify-between items-center mb-6">
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Lead Score</p>
                          <Star className="w-3 h-3 text-brand" />
                       </div>
                       <div className="flex items-end gap-3">
                          <h3 className="text-5xl font-black text-brand">85<span className="text-xl text-zinc-600">/100</span></h3>
                          <div className="mb-2 h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                             <div className="h-full bg-brand w-[85%]" />
                          </div>
                       </div>
                    </div>

                    <div className="stat-card">
                       <div className="flex justify-between items-center mb-6">
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Engagement Level</p>
                          <Activity className="w-3 h-3 text-green-500" />
                       </div>
                       <h3 className="text-3xl font-black uppercase italic italic text-white flex items-center gap-2">
                          High
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Contact Intelligence</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                          <Mail className="w-3.5 h-3.5 text-zinc-500" />
                          <span className="text-xs font-medium">{lead.email}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                          <Phone className="w-3.5 h-3.5 text-zinc-500" />
                          <span className="text-xs font-medium underline">+91 98765 43210</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Tags & Identity</p>
                      <div className="flex flex-wrap gap-2">
                        {['High Intent', 'Demo Requested', 'Enterprise', 'Decision Maker'].map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                             {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {result && (
                    <div className="p-6 rounded-[24px] bg-brand/5 border border-brand/20 space-y-4">
                       <div className="flex items-center gap-3">
                          <Zap size={16} className="text-brand fill-current" />
                          <h4 className="text-sm font-black uppercase tracking-widest">Recommended Strategic Action</h4>
                       </div>
                       <p className="text-xs font-medium text-zinc-300 leading-relaxed italic border-l-2 border-brand/30 pl-4 py-1">
                          "{result.reason}"
                       </p>
                       <div className="flex gap-3">
                          <button className="flex-1 bg-brand text-white py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-light transition-all">
                             Execute Action: {result.action}
                          </button>
                       </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Mini Logs */}
          <div className="space-y-8">
             <div className="stat-card">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6">Interaction Timeline</h3>
                <div className="space-y-6 relative">
                   <div className="absolute top-2 bottom-2 left-3 w-px bg-zinc-800" />
                   {[
                     { time: '2 hours ago', label: 'Last Interaction', detail: 'Email opened by lead' },
                     { time: 'May 20, 2024', label: 'Created', detail: 'Website Contact Form' },
                   ].map((item, i) => (
                     <div key={i} className="relative pl-10">
                        <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-900 z-10" />
                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-1">{item.time}</p>
                        <p className="text-xs font-bold text-white">{item.label}</p>
                        <p className="text-[10px] text-zinc-500 font-medium">{item.detail}</p>
                     </div>
                   ))}
                </div>
             </div>

             <div className="stat-card bg-brand shadow-2xl shadow-brand/20 text-white">
                <h4 className="font-black uppercase tracking-tighter text-xl mb-2">Automate Follow-up</h4>
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-6">Let SalesPilot AI handle the next 48 hours</p>
                <button className="w-full bg-white text-brand py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-zinc-100 transition-all flex items-center justify-center gap-2">
                   Power Up Session
                   <ArrowRight size={14} />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
