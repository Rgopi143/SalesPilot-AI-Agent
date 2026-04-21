import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, User, CheckCircle2, MessageSquare, Zap, Mail, ShieldAlert } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'agent';
  agentName?: string;
  content: string;
  timestamp: string;
  status?: 'complete' | 'working' | 'error';
  data?: any;
}

export const ConversationsView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'user',
      content: 'Analyze the lead John Doe from Acme Corp',
      timestamp: '10:30 AM'
    },
    {
      id: '2',
      role: 'agent',
      agentName: 'Lead Analyzer Agent',
      status: 'complete',
      content: 'Analysis Complete ✅\n\nLead: John Doe (Acme Corp)\nPriority: High\nReason: High engagement, requested demo\nRecommended Action: Send follow-up email and schedule demo',
      timestamp: '10:30 AM'
    },
    {
      id: '3',
      role: 'user',
      content: 'Generate a follow-up email',
      timestamp: '10:31 AM'
    },
    {
      id: '4',
      role: 'agent',
      agentName: 'Email Agent',
      status: 'complete',
      content: 'Email Generated ✉️\n\nTo: John Doe (Acme Corp)\nSubject: Follow-up on your interest in SalesPilot AI',
      timestamp: '10:31 AM',
      data: {
        subject: 'Follow-up on your interest in SalesPilot AI',
        body: 'Hi John,\n\nThanks for reaching out about SalesPilot AI. I saw you recently downloaded our whitepaper and visited the pricing page several times...'
      }
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-bg-main animate-in fade-in duration-500">
      <header className="p-6 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black tracking-tight uppercase italic">AI Sales Assistant</h2>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Chat with your specialized AI agents</p>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
            <ShieldAlert size={14} />
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center border ${
                  msg.role === 'user' 
                    ? 'bg-brand/20 border-brand/30 text-brand' 
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                }`}>
                  {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                </div>

                <div className="space-y-1">
                  {msg.agentName && (
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider font-mono">{msg.agentName}</span>
                      {msg.status === 'complete' && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                    </div>
                  )}
                  
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap font-sans ${
                    msg.role === 'user' 
                      ? 'bg-brand text-white shadow-lg shadow-brand/20 rounded-tr-none' 
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-tl-none'
                  }`}>
                    {msg.content}
                    
                    {msg.data && (
                      <div className="mt-4 pt-4 border-t border-zinc-800 space-y-3">
                         <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-300 hover:bg-zinc-700 transition-colors">
                            <Mail size={12} />
                            View Email
                         </button>
                      </div>
                    )}
                  </div>
                  <p className={`text-[9px] font-bold text-zinc-600 mt-1 uppercase ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <footer className="p-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex gap-4 bg-zinc-900 border border-zinc-700 rounded-2xl p-2 pl-4 items-center focus-within:border-brand/50 transition-colors">
          <input 
            type="text" 
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-zinc-600"
          />
          <button 
            onClick={handleSend}
            className="w-10 h-10 bg-brand text-white rounded-xl flex items-center justify-center hover:bg-brand-light transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
};
