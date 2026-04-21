import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, Phone, MapPin, Calendar, Briefcase, Award, 
  Edit, Save, X, Camera, Shield, Zap, Clock, TrendingUp,
  Star, Target, Activity, Users, Globe, Code, FileText,
  CheckCircle, AlertCircle, Settings, LogOut, ChevronRight,
  Download, Upload, Eye, EyeOff, Key, Smartphone, Monitor, Brain
} from 'lucide-react';

interface ProfileViewProps {
  onClose: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity' | 'achievements' | 'security'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const profileData = {
    name: 'Reddy Vari Gopinath',
    email: 'gopinath@salespilot.ai',
    phone: '+91 98765 43210',
    location: 'San Francisco, CA',
    role: 'Founder & CEO',
    company: 'SalesPilot AI',
    joined: 'January 2024',
    avatar: 'https://picsum.photos/seed/ceo/200/200'
  };

  const stats = [
    { label: 'Leads Processed', value: '1,247', icon: Users, trend: '+12%' },
    { label: 'Success Rate', value: '94.2%', icon: Target, trend: '+3%' },
    { label: 'Active Days', value: '89', icon: Calendar, trend: '+5' },
    { label: 'AI Score', value: '8.7', icon: Brain, trend: '+0.5' },
  ];

  const achievements = [
    { id: 1, title: 'Early Adopter', description: 'Joined in the first month', icon: Star, unlocked: true, date: '2024-01-15' },
    { id: 2, title: 'Lead Master', description: 'Processed 1000+ leads', icon: Award, unlocked: true, date: '2024-03-22' },
    { id: 3, title: 'AI Expert', description: 'Achieved 95%+ success rate', icon: Brain, unlocked: true, date: '2024-04-10' },
    { id: 4, title: 'Team Leader', description: 'Built a 10+ member team', icon: Users, unlocked: false, date: null },
    { id: 5, title: 'Innovation Award', description: 'Pioneered new AI features', icon: Zap, unlocked: false, date: null },
  ];

  const activities = [
    { id: 1, type: 'lead_processed', title: 'Processed 25 leads', time: '2 hours ago', icon: Users },
    { id: 2, type: 'achievement', title: 'Earned "AI Expert" badge', time: '1 day ago', icon: Award },
    { id: 3, type: 'login', title: 'Logged in from new device', time: '3 days ago', icon: Monitor },
    { id: 4, type: 'settings', title: 'Updated notification preferences', time: '1 week ago', icon: Settings },
    { id: 5, type: 'export', title: 'Exported monthly report', time: '2 weeks ago', icon: Download },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'activity', label: 'Activity', icon: Clock },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="flex items-start gap-6">
        <div className="relative group">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-brand/30 shadow-xl shadow-brand/20">
            <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-0 right-0 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <Camera className="w-4 h-4" />
          </motion.button>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-black text-white mb-1">{profileData.name}</h2>
              <p className="text-zinc-400 font-medium">{profileData.role} at {profileData.company}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-zinc-500">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-sm font-bold hover:bg-brand-light transition-all"
            >
              <Edit className="w-4 h-4" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-4 text-center"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-lg bg-brand/20 text-brand">
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bio Section */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-black text-white mb-4">About</h3>
        <p className="text-zinc-300 leading-relaxed">
          Passionate about AI and sales automation, leading the development of cutting-edge solutions 
          that help businesses optimize their sales processes. With over 10 years of experience in 
          technology and business development, I'm committed to revolutionizing how companies approach 
          lead generation and customer relationship management.
        </p>
        <div className="flex items-center gap-4 mt-4 text-sm text-zinc-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Joined {profileData.joined}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span>salespilot.ai</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActivity = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-black text-white">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 glass-card rounded-xl"
          >
            <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700">
              <activity.icon className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">{activity.title}</p>
              <p className="text-zinc-500 text-sm">{activity.time}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-600" />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-black text-white">Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`glass-card p-6 rounded-xl border ${
              achievement.unlocked ? 'border-brand/30' : 'border-zinc-800 opacity-60'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${
                achievement.unlocked ? 'bg-brand/20 text-brand' : 'bg-zinc-800 text-zinc-600'
              }`}>
                <achievement.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className={`font-bold text-sm mb-1 ${
                  achievement.unlocked ? 'text-white' : 'text-zinc-500'
                }`}>
                  {achievement.title}
                </h4>
                <p className="text-xs text-zinc-500 mb-2">{achievement.description}</p>
                {achievement.unlocked ? (
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <CheckCircle className="w-3 h-3" />
                    <span>Unlocked {achievement.date}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-xs text-zinc-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>Locked</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-black text-white">Security Settings</h3>
      
      <div className="space-y-4">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-white">Two-Factor Authentication</h4>
              <p className="text-sm text-zinc-500">Add an extra layer of security to your account</p>
            </div>
            <div className="w-12 h-6 bg-brand rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-white">Password</h4>
              <p className="text-sm text-zinc-500">Last changed 30 days ago</p>
            </div>
            <button className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-400 hover:text-white transition-all">
              Change
            </button>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-white">Active Sessions</h4>
              <p className="text-sm text-zinc-500">3 devices currently logged in</p>
            </div>
            <button className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-400 hover:text-white transition-all">
              Manage
            </button>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-white">API Keys</h4>
              <p className="text-sm text-zinc-500">Manage your API access tokens</p>
            </div>
            <button className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-400 hover:text-white transition-all">
              View Keys
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-zinc-800">
        <h2 className="text-xl font-black text-white">Profile</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5 text-zinc-400" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all ${
              activeTab === tab.id
                ? 'border-brand text-brand'
                : 'border-transparent text-zinc-500 hover:text-white'
            }`}
          >
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {renderOverview()}
            </motion.div>
          )}
          {activeTab === 'activity' && (
            <motion.div
              key="activity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {renderActivity()}
            </motion.div>
          )}
          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {renderAchievements()}
            </motion.div>
          )}
          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {renderSecurity()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between p-6 border-t border-zinc-800">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-400 hover:text-white transition-all">
            <Download className="w-4 h-4" />
            Export Data
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-500 hover:bg-red-500/20 transition-all">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-sm font-bold hover:bg-brand-light transition-all">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
};
