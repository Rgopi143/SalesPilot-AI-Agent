import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Mail, MessageSquare, Database, ExternalLink, Globe, User, CheckCircle, AlertCircle, Plus, Zap, Shield, Clock } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'OpenAI', icon: Globe, status: 'Connected', color: 'text-green-500' },
  { name: 'Gmail', icon: Mail, status: 'Connected', color: 'text-blue-500' },
  { name: 'Slack', icon: MessageSquare, status: 'Connected', color: 'text-purple-500' },
  { name: 'HubSpot', icon: User, status: 'Connected', color: 'text-orange-500' },
  { name: 'n8n', icon: Settings, status: 'Connected', color: 'text-red-500' },
  { name: 'FAISS Vector DB', icon: Database, status: 'Connected', color: 'text-blue-400' },
];

export const IntegrationsView: React.FC = () => {
  const [connectingService, setConnectingService] = useState<string | null>(null);

  const handleConnect = (serviceName: string) => {
    setConnectingService(serviceName);
    setTimeout(() => setConnectingService(null), 2000);
  };

  return (
    <div className="p-8 space-y-8 animate-slide-up max-w-6xl mx-auto">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2 uppercase italic gradient-text">Integrations</h1>
          <p className="text-zinc-400 text-sm font-medium">Connect your favorite tools and services</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-sm font-bold hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
        >
          <Plus className="w-4 h-4" />
          Add Integration
        </motion.button>
      </header>

      {/* Connected Services */}
      <div className="space-y-6">
        <h2 className="text-xl font-black uppercase tracking-tight text-zinc-400">Connected Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEGRATIONS.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-zinc-800 border border-zinc-700 ${app.color} group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-[8px] font-bold text-green-500 uppercase tracking-widest">Connected</span>
                </div>
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight mb-2">{app.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Clock className="w-3 h-3" />
                  <span>Last sync: 2 min ago</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Database className="w-3 h-3" />
                  <span>245 records synced</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
                  <Settings className="w-3 h-3" />
                  Configure
                </button>
                <button className="flex items-center justify-center px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-all">
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Integrations */}
      <div className="space-y-6">
        <h2 className="text-xl font-black uppercase tracking-tight text-zinc-400">Available Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Salesforce', icon: User, description: 'CRM integration for lead management', category: 'CRM' },
            { name: 'Slack', icon: MessageSquare, description: 'Team communication and notifications', category: 'Communication' },
            { name: 'HubSpot', icon: Database, description: 'Marketing automation platform', category: 'Marketing' },
            { name: 'Mailchimp', icon: Mail, description: 'Email marketing campaigns', category: 'Email' },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700">
                  <service.icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm">{service.name}</h4>
                  <span className="text-[8px] text-zinc-500 uppercase tracking-widest">{service.category}</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mb-3">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleConnect(service.name)}
                disabled={connectingService === service.name}
                className="w-full py-2 rounded-lg bg-brand/10 border border-brand/30 text-brand text-[10px] font-bold uppercase tracking-widest hover:bg-brand/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {connectingService === service.name ? (
                    <motion.div
                      key="connecting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <div className="w-3 h-3 border-2 border-brand border-t-transparent rounded-full animate-spin" />
                      Connecting...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="connect"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Plus className="w-3 h-3" />
                      Connect
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* API Status */}
      <div className="glass-card border-brand/20 bg-brand/5">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-brand/20 text-brand pulse-glow">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black uppercase tracking-tight">API Configuration</h3>
            <p className="text-xs text-zinc-500">Manage your global AI settings and API keys</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-xs font-bold text-green-500">API Key Valid</span>
            </div>
            <p className="text-xs text-zinc-400">Gemini API configured</p>
          </div>
          <div className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-blue-500">Rate Limit OK</span>
            </div>
            <p className="text-xs text-zinc-400">1000 requests/day remaining</p>
          </div>
          <div className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-brand" />
              <span className="text-xs font-bold text-brand">Last Sync</span>
            </div>
            <p className="text-xs text-zinc-400">2 minutes ago</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-brand text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-light transition-all shadow-lg shadow-brand/20">
            Configure API
          </button>
          <button className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 hover:text-white transition-all">
            View Logs
          </button>
        </div>
      </div>
    </div>
  );
};
