import React, { useState, useEffect } from 'react';
import { Lead, AgentLog, AgentResponse } from './types';
import { MOCK_LEADS } from './constants';
import { LeadList } from './components/LeadList';
import { LeadDetails } from './components/LeadDetails';
import { AgentLogs } from './components/AgentLogs';
import { LandingPage } from './components/LandingPage';
import { DashboardView } from './components/DashboardView';
import { ConversationsView } from './components/ConversationsView';
import { IntegrationsView } from './components/IntegrationsView';
import { SettingsView } from './components/SettingsView';
import { ProfileView } from './components/ProfileView';
import { processLeadOrchestration } from './services/aiService';
import { 
  Shield, Zap, Search, Bell, LayoutDashboard, Users, 
  MessageSquare, Bot, History, Settings, Power, Compass, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'dashboard' | 'leads' | 'conversations' | 'agents' | 'logs' | 'integrations' | 'settings';

export default function App() {
  const [leads] = useState<Lead[]>(MOCK_LEADS);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(MOCK_LEADS[0]);
  const [logs, setLogs] = useState<AgentLog[]>([]);
  const [results, setResults] = useState<Record<string, AgentResponse>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [showSideLogs, setShowSideLogs] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  // Scroll position persistence
  useEffect(() => {
    // Restore scroll positions on mount
    const savedScrollPositions = sessionStorage.getItem('scrollPositions');
    if (savedScrollPositions) {
      const positions = JSON.parse(savedScrollPositions);
      setTimeout(() => {
        Object.entries(positions).forEach(([elementId, scrollPosition]) => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollTop = scrollPosition as number;
          }
        });
      }, 100);
    }

    // Save scroll positions on scroll
    const handleScroll = () => {
      const scrollableElements = document.querySelectorAll('[data-scrollable]');
      const positions: Record<string, number> = {};
      
      scrollableElements.forEach((element) => {
        if (element.id) {
          positions[element.id] = (element as HTMLElement).scrollTop;
        }
      });
      
      sessionStorage.setItem('scrollPositions', JSON.stringify(positions));
    };

    // Add scroll listeners
    const scrollableElements = document.querySelectorAll('[data-scrollable]');
    scrollableElements.forEach((element) => {
      element.addEventListener('scroll', handleScroll);
    });

    // Cleanup
    return () => {
      scrollableElements.forEach((element) => {
        element.removeEventListener('scroll', handleScroll);
      });
    };
  }, [activeView]);

  const processLead = async (lead: Lead) => {
    // ... same processing logic ...
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs([]);
    setShowSideLogs(true); // Show logs when processing starts
    try {
      const result = await processLeadOrchestration(
        lead,
        { currentDate: new Date().toISOString(), systemVersion: '1.0.0-stable' },
        (logPart) => {
          const newLog: AgentLog = {
            id: Math.random().toString(36).substr(2, 9),
            ...logPart,
            timestamp: new Date().toISOString()
          };
          setLogs(prev => [...prev, newLog]);
        }
      );
      if (result) {
        setResults(prev => ({ ...prev, [lead.id]: result as AgentResponse }));
      }
    } catch (e) {
      console.error("Processing failed:", e);
    } finally {
      setIsProcessing(false);
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const closeSideLogs = () => {
    setShowSideLogs(false);
  };

  if (showLanding) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onEnter={() => setShowLanding(false)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'conversations':
        return <ConversationsView />;
      case 'integrations':
        return <IntegrationsView />;
      case 'settings':
        return <SettingsView />;
      case 'logs':
      case 'agents':
        return <AgentLogs logs={logs} onClear={clearLogs} showCloseButton={false} />;
      case 'leads':
        return (
          <div className="flex-1 flex overflow-hidden lg:flex-row flex-col relative">
            <div className="w-80 flex-shrink-0 border-r border-zinc-900">
              <LeadList 
                leads={leads} 
                onSelect={setSelectedLead} 
                selectedLeadId={selectedLead?.id}
                isProcessing={isProcessing}
              />
            </div>
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {selectedLead ? (
                  <motion.div
                    key={selectedLead.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <LeadDetails 
                      lead={selectedLead}
                      onProcess={processLead}
                      isProcessing={isProcessing}
                      result={results[selectedLead.id]}
                    />
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full text-zinc-600 font-black uppercase tracking-widest text-[10px]">
                    Select a lead to begin analysis
                  </div>
                )}
              </AnimatePresence>
            </div>
            {/* Floating Agent Memory Panel */}
            <AnimatePresence>
              {showSideLogs && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed bottom-6 right-6 w-96 h-96 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl shadow-black/40 z-50 xl:hidden lg:block"
                  style={{ backdropFilter: 'blur(12px)' }}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-4 bg-zinc-800/50 border-b border-zinc-800 flex items-center justify-between">
                      <h3 className="font-black text-[10px] uppercase tracking-widest text-zinc-500 italic">Agent Memory State</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                        <span className="text-[8px] font-black uppercase text-brand tracking-widest">Live Sync</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={closeSideLogs}
                        className="p-1 rounded-lg bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </motion.button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4" id="agent-logs">
                      <AgentLogs 
                        logs={logs} 
                        onClose={closeSideLogs}
                        onClear={clearLogs}
                        showCloseButton={false}
                        title="Agent Memory State"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {!showSideLogs && logs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-6 right-6 z-20"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSideLogs(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-xl shadow-lg shadow-brand/20 border border-brand/50 font-black text-xs uppercase tracking-widest"
                >
                  <History className="w-4 h-4" />
                  Show Logs ({logs.length})
                </motion.button>
              </motion.div>
            )}
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-screen w-full bg-bg-main overflow-hidden font-sans text-white"
    >
      {/* Enhanced Sidebar Navigation */}
      <aside className="w-64 flex flex-col py-8 bg-zinc-950 border-r border-zinc-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 cyber-grid opacity-10" />
        
        <div className="px-6 mb-12 flex items-center gap-3 relative z-10">
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-brand to-brand-light rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand/20 neon-border"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Shield className="w-6 h-6" />
          </motion.div>
          <div>
            <span className="font-black text-lg tracking-tighter uppercase leading-none block gradient-text">SalesPilot <span className="text-brand-light">AI</span></span>
            <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mt-0.5 block">V2.0 Neural Interface</span>
          </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1 relative z-10">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
            { id: 'leads', icon: Users, label: 'Leads', badge: '128' },
            { id: 'conversations', icon: MessageSquare, label: 'Conversations', badge: '24' },
            { id: 'agents', icon: Bot, label: 'Agents', badge: '4' },
            { id: 'logs', icon: History, label: 'Logs', badge: null },
            { id: 'integrations', icon: Compass, label: 'Integrations', badge: null },
            { id: 'settings', icon: Settings, label: 'Settings', badge: null },
          ].map((item, index) => (
            <motion.button 
              key={item.id} 
              onClick={() => setActiveView(item.id as View)}
              className={`sidebar-item w-full ${activeView === item.id ? 'sidebar-item-active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  <span className="uppercase tracking-tight text-[11px] font-black italic">{item.label}</span>
                </div>
                {item.badge && (
                  <motion.div 
                    className="badge bg-brand/20 text-brand border-brand/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  >
                    {item.badge}
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </nav>

        <div className="mt-auto px-6 pt-8 border-t border-zinc-900 space-y-6 relative z-10">
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-xl glass-card-hover cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowProfile(true)}
          >
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand/20 to-brand/10 border border-brand/30 overflow-hidden relative">
                <img src="https://picsum.photos/seed/ceo/100/100" referrerPolicy="no-referrer" alt="Avatar" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950" />
             </div>
             <div className="overflow-hidden">
                <p className="text-[10px] font-black uppercase text-white truncate">Reddy Vari Gopinath</p>
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Founder & CEO</p>
             </div>
          </motion.div>
          <motion.button 
            className="sidebar-item w-full text-red-500/60 hover:text-red-500 hover:bg-red-500/5 border border-red-500/20 hover:border-red-500/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Power className="w-4 h-4" />
            <span className="uppercase tracking-tight text-[11px] font-black italic">Shutdown System</span>
          </motion.button>
        </div>
      </aside>

      {/* Profile Modal */}
      <AnimatePresence>
        {showProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowProfile(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[90vh] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <ProfileView onClose={() => setShowProfile(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden" data-scrollable="main-content">
        <header className="h-16 border-b border-zinc-900 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-md z-10">
           <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                 <Search size={14} />
                 <input type="text" placeholder="Quick Search Leads..." className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest w-48 placeholder:text-zinc-700" />
              </div>
           </div>
           <div className="flex items-center gap-4">
              <button className="p-2.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-white transition-colors">
                <Bell size={18} />
              </button>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex items-center gap-3">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i}/50/50`} alt="" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                 </div>
                 <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Multi-Agent Sync</span>
              </div>
           </div>
        </header>

        <div className="flex-1 overflow-hidden relative">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeView}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
               className="h-full"
             >
                {renderView()}
             </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
}

