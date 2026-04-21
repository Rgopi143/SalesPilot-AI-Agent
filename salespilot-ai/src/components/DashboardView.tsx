import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Area, AreaChart } from 'recharts';
import { 
  Users, Zap, Mail, Database, ArrowUpRight, 
  Activity, Command, History, Search, TrendingUp,
  Clock, Target, Brain, Sparkles, AlertCircle,
  ChevronUp, ChevronDown, RefreshCw
} from 'lucide-react';

const PRIORITY_DATA = [
  { name: 'High', value: 24, color: '#7C3AED' },
  { name: 'Medium', value: 58, color: '#A78BFA' },
  { name: 'Low', value: 46, color: '#3F3F46' },
];

const PERFORMANCE_DATA = [
  { time: '00:00', leads: 12, conversions: 3 },
  { time: '04:00', leads: 19, conversions: 5 },
  { time: '08:00', leads: 35, conversions: 12 },
  { time: '12:00', leads: 42, conversions: 18 },
  { time: '16:00', leads: 38, conversions: 15 },
  { time: '20:00', leads: 28, conversions: 8 },
  { time: '23:59', leads: 15, conversions: 4 },
];

const AGENT_PERFORMANCE = [
  { agent: 'Analyzer', efficiency: 92, tasks: 145 },
  { agent: 'Decision', efficiency: 88, tasks: 132 },
  { agent: 'Email', efficiency: 95, tasks: 98 },
  { agent: 'CRM Sync', efficiency: 99, tasks: 187 },
];

export const DashboardView: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [liveStats, setLiveStats] = useState({
    totalLeads: 128,
    highPriority: 24,
    actionsTaken: 45,
    emailsSent: 32,
    activeAgents: 4,
    systemLoad: 67
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        totalLeads: prev.totalLeads + Math.floor(Math.random() * 3),
        systemLoad: Math.max(20, Math.min(95, prev.systemLoad + (Math.random() - 0.5) * 10))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  return (
    <div className="p-8 space-y-8 animate-slide-up" id="dashboard-view" data-scrollable>
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2 uppercase italic gradient-text">Dashboard Overview</h1>
          <p className="text-zinc-400 text-sm font-medium">Real-time AI Sales Automation Intelligence</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-2">
            {['1h', '24h', '7d', '30d'].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range)}
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                  selectedTimeRange === range
                    ? 'bg-brand text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">System Health</p>
            <div className="flex items-center justify-end gap-2 text-green-500 font-bold text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              100% OPERATIONAL
            </div>
          </div>
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:bg-zinc-700"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </header>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            label: 'Total Leads', 
            val: liveStats.totalLeads.toString(), 
            trend: '+12 this week', 
            icon: Users, 
            color: 'text-purple-500',
            change: +12,
            live: true
          },
          { 
            label: 'High Priority', 
            val: liveStats.highPriority.toString(), 
            trend: '+6 this week', 
            icon: Zap, 
            color: 'text-orange-500',
            change: +6,
            live: true
          },
          { 
            label: 'Actions Taken', 
            val: liveStats.actionsTaken.toString(), 
            trend: '+15 this week', 
            icon: Command, 
            color: 'text-green-500',
            change: +15,
            live: false
          },
          { 
            label: 'Emails Sent', 
            val: liveStats.emailsSent.toString(), 
            trend: '+9 this week', 
            icon: Mail, 
            color: 'text-blue-500',
            change: +9,
            live: false
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="stat-card glass-card-hover group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-zinc-800 border border-zinc-700 ${stat.color} relative`}>
                {stat.live && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                )}
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  {stat.change > 0 ? (
                    <ChevronUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <ChevronDown className="w-3 h-3 text-red-500" />
                  )}
                  <span className={`text-xs font-bold ${
                    stat.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={stat.val}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="inline-block"
                  >
                    {stat.val}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
            {stat.live && (
              <div className="mt-3 pt-3 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[8px] text-green-500 font-bold uppercase">Live Update</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Priority Chart */}
        <div className="stat-card col-span-1">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <Activity className="w-3 h-3" />
            Lead Priority Distribution
          </h3>
          <div className="h-[240px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PRIORITY_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {PRIORITY_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181B', border: '1px solid #27272A', borderRadius: '8px', fontSize: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Legend */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <p className="text-2xl font-black">128</p>
              <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Total</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {PRIORITY_DATA.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{entry.name} ({entry.value})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="stat-card col-span-1 xl:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <History className="w-3 h-3" />
              Recent Activity
            </h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-brand hover:text-brand-light transition-colors">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Lead analyzed', user: 'TechNova Solutions', time: '2 min ago', icon: Search },
              { type: 'Email sent to', user: 'John Doe', time: '10 min ago', icon: Mail },
              { type: 'CRM updated', user: 'Lead ID 1023', time: '15 min ago', icon: Database },
              { type: 'Follow-up scheduled', user: 'Jane Smith', time: '25 min ago', icon: Activity },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-brand transition-colors">
                    <item.icon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-300">{item.type}: <span className="text-white">{item.user}</span></p>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-0.5">{item.time}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-700 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Over Time */}
        <div className="stat-card">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            Performance Analytics
          </h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
                <XAxis dataKey="time" stroke="#71717A" fontSize={10} />
                <YAxis stroke="#71717A" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181B', border: '1px solid #27272A', borderRadius: '8px', fontSize: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="leads" stroke="#7C3AED" fillOpacity={1} fill="url(#colorLeads)" strokeWidth={2} />
                <Area type="monotone" dataKey="conversions" stroke="#10B981" fillOpacity={1} fill="url(#colorConversions)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Agent Efficiency */}
        <div className="stat-card">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <Brain className="w-3 h-3" />
            Agent Efficiency Metrics
          </h3>
          <div className="space-y-4">
            {AGENT_PERFORMANCE.map((agent, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    <span className="text-xs font-bold text-white">{agent.agent}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand">{agent.efficiency}%</span>
                    <span className="text-[8px] text-zinc-500">{agent.tasks} tasks</span>
                  </div>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${agent.efficiency}%` }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status & Load */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Network Status */}
        <div className="stat-card">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Agent Network Status
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Lead Agent', status: 'active', load: 85 },
              { name: 'Decision Agent', status: 'active', load: 72 },
              { name: 'Email Agent', status: 'idle', load: 15 },
              { name: 'Tool Agent', status: 'active', load: 91 },
              { name: 'Memory Agent', status: 'active', load: 67 },
            ].map((agent, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-2 h-2 rounded-full ${
                      agent.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    {agent.status === 'active' && (
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-40" />
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tight text-white">{agent.name}</p>
                    <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                      {agent.status === 'active' ? 'Active' : 'Idle'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-brand">{agent.load}%</p>
                  <p className="text-[8px] text-zinc-600">load</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Load Monitor */}
        <div className="stat-card">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <Activity className="w-3 h-3" />
            System Load Monitor
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#27272A"
                    strokeWidth="12"
                    fill="none"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '351.86', strokeDashoffset: '351.86' }}
                    animate={{ strokeDashoffset: 351.86 - (351.86 * liveStats.systemLoad) / 100 }}
                    transition={{ duration: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">{liveStats.systemLoad}%</span>
                  <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Load</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-green-500">{liveStats.activeAgents}</p>
                <p className="text-[8px] text-zinc-500 uppercase tracking-widest">Active Agents</p>
              </div>
              <div>
                <p className="text-lg font-bold text-brand">12.4ms</p>
                <p className="text-[8px] text-zinc-500 uppercase tracking-widest">Avg Response</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="stat-card">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <Target className="w-3 h-3" />
            Quick Actions
          </h3>
          <div className="space-y-3">
            {[
              { action: 'Run Full Analysis', icon: Search, color: 'bg-brand' },
              { action: 'Export Reports', icon: Database, color: 'bg-green-500' },
              { action: 'Agent Training', icon: Brain, color: 'bg-purple-500' },
              { action: 'System Diagnostics', icon: AlertCircle, color: 'bg-orange-500' },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-brand transition-colors">
                    {item.action}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
