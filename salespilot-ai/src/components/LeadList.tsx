import React, { useState, useMemo } from 'react';
import { Lead } from '../types';
import { User, Calendar, ArrowRight, Activity, Search, Filter, SortAsc, SortDesc, Clock, Star, TrendingUp, Phone, Mail, Building2, Tag, MoreVertical, Plus, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LeadListProps {
  leads: Lead[];
  onSelect: (lead: Lead) => void;
  selectedLeadId?: string;
  isProcessing?: boolean;
}

type SortBy = 'name' | 'company' | 'status' | 'lastContact';
type SortOrder = 'asc' | 'desc';
type FilterStatus = 'all' | 'New' | 'Contacted' | 'Qualified' | 'Closed';

export const LeadList: React.FC<LeadListProps> = ({ leads, onSelect, selectedLeadId, isProcessing }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('lastContact');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedLeads = useMemo(() => {
    let filtered = leads;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(lead => lead.status === filterStatus);
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      let aValue: any = a[sortBy];
      let bValue: any = b[sortBy];
      
      if (sortBy === 'lastContact') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [leads, searchTerm, sortBy, sortOrder, filterStatus]);

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
      case 'Contacted': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'Qualified': return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'Closed': return 'bg-red-500/20 text-red-500 border-red-500/30';
      default: return 'bg-zinc-500/20 text-zinc-500 border-zinc-500/30';
    }
  };

  const getLeadScore = (lead: Lead) => {
    // Simple scoring based on status and recency
    const statusScore = { 'New': 80, 'Contacted': 60, 'Qualified': 90, 'Closed': 40 }[lead.status] || 50;
    const recencyScore = Math.max(0, 100 - (Date.now() - new Date(lead.lastContact).getTime()) / (1000 * 60 * 60 * 24 * 30));
    return Math.round((statusScore + recencyScore) / 2);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950">
      <div className="p-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-black tracking-tight text-white uppercase italic">Pipeline</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">
                {filteredAndSortedLeads.length} Leads Tracked
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Filter className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand transition-colors"
          />
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3"
            >
              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Status:</span>
                <div className="flex gap-1">
                  {(['all', 'New', 'Contacted', 'Qualified', 'Closed'] as FilterStatus[]).map(status => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilterStatus(status)}
                      className={`px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest transition-all ${
                        filterStatus === status
                          ? 'bg-brand text-white'
                          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                      }`}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortBy)}
                  className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-[8px] text-white focus:outline-none focus:border-brand"
                >
                  <option value="name">Name</option>
                  <option value="company">Company</option>
                  <option value="status">Status</option>
                  <option value="lastContact">Last Contact</option>
                </select>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleSort}
                  className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  {sortOrder === 'asc' ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="overflow-y-auto flex-1 p-4 space-y-2 custom-scrollbar" id="lead-list">
        <AnimatePresence>
          {filteredAndSortedLeads.map((lead, index) => {
            const score = getLeadScore(lead);
            const daysAgo = Math.floor((Date.now() - new Date(lead.lastContact).getTime()) / (1000 * 60 * 60 * 24));
            
            return (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelect(lead)}
                  disabled={isProcessing}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    selectedLeadId === lead.id 
                      ? 'bg-brand/10 text-white border-brand/30 shadow-lg shadow-brand/10' 
                      : 'bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                  } ${isProcessing && selectedLeadId !== lead.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-[8px] font-bold text-zinc-500">{score}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Activity className={`w-3 h-3 ${selectedLeadId === lead.id ? 'text-brand' : 'text-zinc-800'}`} />
                      <MoreVertical className="w-3 h-3 text-zinc-600" />
                    </div>
                  </div>
                  
                  {/* Lead Info */}
                  <h3 className={`font-black text-sm uppercase tracking-tight truncate mb-1 ${selectedLeadId === lead.id ? 'text-white' : 'text-zinc-300'}`}>
                    {lead.name}
                  </h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest truncate mb-2 ${selectedLeadId === lead.id ? 'text-brand-light' : 'text-zinc-600'}`}>
                    {lead.company}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="flex items-center gap-3 text-[8px] text-zinc-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span className="truncate max-w-[100px]">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      <span>{lead.demographics?.split(',')[0] || 'N/A'}</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-zinc-800 pt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1.5">
                      <Clock size={10} className="text-zinc-500" />
                      <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                        {daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo}d ago`}
                      </span>
                    </div>
                    {selectedLeadId === lead.id && (
                      <ArrowRight className="w-3 h-3 text-brand animate-pulse" />
                    )}
                  </div>
                  
                  {/* History Preview */}
                  {lead.history && lead.history.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-zinc-800">
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3 text-zinc-600" />
                        <span className="text-[8px] text-zinc-600 truncate">
                          {lead.history[0]}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {filteredAndSortedLeads.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-600">
            <Search className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-sm font-medium">No leads found</p>
            <p className="text-xs mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};
