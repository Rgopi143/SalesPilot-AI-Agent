import React from 'react';
import { AgentLog } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, CircleDashed, AlertTriangle, Clock, X, Trash2, RefreshCw } from 'lucide-react';

interface AgentLogsProps {
  logs: AgentLog[];
  onClose?: () => void;
  onClear?: () => void;
  showCloseButton?: boolean;
  title?: string;
}

export const AgentLogs: React.FC<AgentLogsProps> = ({ 
  logs, 
  onClose, 
  onClear, 
  showCloseButton = false, 
  title = "Execution Logs" 
}) => {
  return (
    <div className="flex flex-col h-full bg-bg-main overflow-hidden">
      <div className="flex-shrink-0 p-6 border-b border-zinc-800">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight mb-1 italic">{title}</h2>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Step-by-step execution of AI agents</p>
          </div>
          <div className="flex items-center gap-2">
            {logs.length > 0 && onClear && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClear}
                className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-all group"
                title="Clear all logs"
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            )}
            {showCloseButton && onClose && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all group"
                title="Close logs"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 space-y-8 overflow-y-auto custom-scrollbar">

        <div className="space-y-6 relative pb-10">
          <div className="absolute top-2 bottom-2 left-3 w-px bg-zinc-800" />
          
          <AnimatePresence initial={false}>
            {logs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-zinc-700 space-y-4">
                 <CircleDashed className="w-12 h-12 animate-spin opacity-20" />
                 <p className="text-[10px] font-black uppercase tracking-[0.2em]">Awaiting system trigger</p>
              </div>
            ) : (
              logs.map((log, i) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative pl-10 group"
                >
                  {/* Status Node */}
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-lg flex items-center justify-center border-2 border-zinc-900 z-10 transition-colors ${
                    log.status === 'complete' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' :
                    log.status === 'working' ? 'bg-brand shadow-[0_0_15px_rgba(124,58,237,0.3)]' :
                    log.status === 'error' ? 'bg-red-500' : 'bg-zinc-800'
                  }`}>
                    {log.status === 'complete' ? (
                      <CheckCircle2 size={12} className="text-white" />
                    ) : log.status === 'error' ? (
                      <AlertTriangle size={12} className="text-white" />
                    ) : log.status === 'working' ? (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    )}
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                         <p className="text-xs font-black uppercase tracking-tight text-white">{log.agent}</p>
                         {log.status === 'complete' && (
                           <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest border border-green-500/20">
                              Success
                           </span>
                         )}
                      </div>
                      <p className="text-[10px] text-zinc-500 font-medium leading-relaxed max-w-sm">
                        {log.detail}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-zinc-600">
                       <Clock size={10} />
                       <span className="text-[9px] font-black uppercase tracking-widest leading-none font-mono">
                         {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                       </span>
                    </div>
                  </div>

                  {log.data && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-3 p-3 bg-zinc-900 rounded-xl border border-zinc-800 font-mono text-[9px] text-zinc-400 overflow-hidden"
                    >
                      <pre className="whitespace-pre-wrap">{JSON.stringify(log.data, null, 2)}</pre>
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
