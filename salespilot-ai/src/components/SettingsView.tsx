import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, User, Bell, Shield, Database, Globe, Zap, Brain, 
  Mail, Phone, MapPin, Clock, Calendar, CheckCircle, AlertCircle,
  ChevronRight, Save, RefreshCw, Download, Upload, Eye, EyeOff,
  Key, Lock, Smartphone, Monitor, Volume2, Wifi, Battery, Cpu,
  HardDrive, Cloud, Server, Terminal, Code, FileText, HelpCircle,
  Info, Trash2, Edit, Plus, X, ChevronDown, ChevronUp
} from 'lucide-react';

interface SettingSection {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  items: SettingItem[];
}

interface SettingItem {
  id: string;
  label: string;
  type: 'toggle' | 'input' | 'select' | 'slider' | 'text' | 'action';
  value?: any;
  options?: string[];
  description?: string;
  icon?: React.ElementType;
}

export const SettingsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['profile']));
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // Profile Settings
    firstName: 'Reddy Vari',
    lastName: 'Gopinath',
    email: 'gopinath@salespilot.ai',
    phone: '+91 98765 43210',
    location: 'San Francisco, CA',
    timezone: 'UTC-8 (PST)',
    language: 'English',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    desktopNotifications: true,
    weeklyReports: true,
    criticalAlerts: true,
    
    // AI Settings
    aiModel: 'gemini-3-flash-preview',
    temperature: 0.7,
    maxTokens: 2048,
    autoProcessing: true,
    smartSuggestions: true,
    learningMode: 'adaptive',
    
    // Security Settings
    twoFactorAuth: true,
    sessionTimeout: 30,
    apiAccess: false,
    dataEncryption: true,
    auditLogs: true,
    
    // System Settings
    darkMode: true,
    animations: true,
    compactView: false,
    autoSave: true,
    cacheEnabled: true,
    logLevel: 'info',
  });

  const settingSections: SettingSection[] = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your personal information and preferences',
      items: [
        { id: 'firstName', label: 'First Name', type: 'input', value: settings.firstName, icon: User },
        { id: 'lastName', label: 'Last Name', type: 'input', value: settings.lastName, icon: User },
        { id: 'email', label: 'Email Address', type: 'input', value: settings.email, icon: Mail },
        { id: 'phone', label: 'Phone Number', type: 'input', value: settings.phone, icon: Phone },
        { id: 'location', label: 'Location', type: 'input', value: settings.location, icon: MapPin },
        { id: 'timezone', label: 'Timezone', type: 'select', value: settings.timezone, options: ['UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+1 (CET)'], icon: Clock },
        { id: 'language', label: 'Language', type: 'select', value: settings.language, options: ['English', 'Spanish', 'French', 'German', 'Japanese'], icon: Globe },
      ]
    },
    {
      id: 'notifications',
      title: 'Notification Preferences',
      icon: Bell,
      description: 'Control how and when you receive notifications',
      items: [
        { id: 'emailNotifications', label: 'Email Notifications', type: 'toggle', value: settings.emailNotifications, description: 'Receive updates via email' },
        { id: 'pushNotifications', label: 'Push Notifications', type: 'toggle', value: settings.pushNotifications, description: 'Browser push notifications' },
        { id: 'smsNotifications', label: 'SMS Notifications', type: 'toggle', value: settings.smsNotifications, description: 'Text message alerts' },
        { id: 'desktopNotifications', label: 'Desktop Notifications', type: 'toggle', value: settings.desktopNotifications, description: 'System tray notifications' },
        { id: 'weeklyReports', label: 'Weekly Reports', type: 'toggle', value: settings.weeklyReports, description: 'Weekly performance summaries' },
        { id: 'criticalAlerts', label: 'Critical Alerts', type: 'toggle', value: settings.criticalAlerts, description: 'Urgent system notifications' },
      ]
    },
    {
      id: 'ai',
      title: 'AI Configuration',
      icon: Brain,
      description: 'Configure AI model settings and behavior',
      items: [
        { id: 'aiModel', label: 'AI Model', type: 'select', value: settings.aiModel, options: ['gemini-3-flash-preview', 'gemini-3-pro', 'gpt-4', 'claude-3'], icon: Brain },
        { id: 'temperature', label: 'Creativity Level', type: 'slider', value: settings.temperature, description: 'Balance between creativity and accuracy' },
        { id: 'maxTokens', label: 'Max Tokens', type: 'slider', value: settings.maxTokens, description: 'Maximum response length' },
        { id: 'autoProcessing', label: 'Auto Processing', type: 'toggle', value: settings.autoProcessing, description: 'Automatically process new leads' },
        { id: 'smartSuggestions', label: 'Smart Suggestions', type: 'toggle', value: settings.smartSuggestions, description: 'AI-powered recommendations' },
        { id: 'learningMode', label: 'Learning Mode', type: 'select', value: settings.learningMode, options: ['adaptive', 'conservative', 'aggressive'], icon: Zap },
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      description: 'Manage your security settings and privacy controls',
      items: [
        { id: 'twoFactorAuth', label: 'Two-Factor Authentication', type: 'toggle', value: settings.twoFactorAuth, description: 'Add an extra layer of security' },
        { id: 'sessionTimeout', label: 'Session Timeout', type: 'slider', value: settings.sessionTimeout, description: 'Auto-logout after inactivity (minutes)' },
        { id: 'apiAccess', label: 'API Access', type: 'toggle', value: settings.apiAccess, description: 'Enable API key generation' },
        { id: 'dataEncryption', label: 'Data Encryption', type: 'toggle', value: settings.dataEncryption, description: 'Encrypt all stored data' },
        { id: 'auditLogs', label: 'Audit Logs', type: 'toggle', value: settings.auditLogs, description: 'Track all system activities' },
      ]
    },
    {
      id: 'system',
      title: 'System Preferences',
      icon: Monitor,
      description: 'Customize your interface and system behavior',
      items: [
        { id: 'darkMode', label: 'Dark Mode', type: 'toggle', value: settings.darkMode, description: 'Use dark theme' },
        { id: 'animations', label: 'Animations', type: 'toggle', value: settings.animations, description: 'Enable UI animations' },
        { id: 'compactView', label: 'Compact View', type: 'toggle', value: settings.compactView, description: 'Reduce spacing between elements' },
        { id: 'autoSave', label: 'Auto Save', type: 'toggle', value: settings.autoSave, description: 'Automatically save changes' },
        { id: 'cacheEnabled', label: 'Cache Enabled', type: 'toggle', value: settings.cacheEnabled, description: 'Improve performance with caching' },
        { id: 'logLevel', label: 'Log Level', type: 'select', value: settings.logLevel, options: ['debug', 'info', 'warn', 'error'], icon: Terminal },
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderSettingItem = (item: SettingItem) => {
    switch (item.type) {
      case 'toggle':
        return (
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label className="text-sm font-medium text-white">{item.label}</label>
              {item.description && (
                <p className="text-xs text-zinc-500 mt-1">{item.description}</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => updateSetting(item.id, !settings[item.id])}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings[item.id] ? 'bg-brand' : 'bg-zinc-700'
              }`}
            >
              <motion.div
                animate={{ x: settings[item.id] ? 24 : 0 }}
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
              />
            </motion.button>
          </div>
        );
      
      case 'input':
        return (
          <div>
            <label className="text-sm font-medium text-white flex items-center gap-2">
              {item.icon && <item.icon className="w-4 h-4 text-zinc-400" />}
              {item.label}
            </label>
            <input
              type="text"
              value={settings[item.id]}
              onChange={(e) => updateSetting(item.id, e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white focus:border-brand focus:outline-none transition-colors"
            />
          </div>
        );
      
      case 'select':
        return (
          <div>
            <label className="text-sm font-medium text-white flex items-center gap-2">
              {item.icon && <item.icon className="w-4 h-4 text-zinc-400" />}
              {item.label}
            </label>
            <select
              value={settings[item.id]}
              onChange={(e) => updateSetting(item.id, e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white focus:border-brand focus:outline-none transition-colors"
            >
              {item.options?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );
      
      case 'slider':
        return (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-white">{item.label}</label>
              <span className="text-sm text-brand font-bold">{settings[item.id]}</span>
            </div>
            {item.description && (
              <p className="text-xs text-zinc-500 mb-2">{item.description}</p>
            )}
            <input
              type="range"
              min={item.id === 'temperature' ? 0 : item.id === 'maxTokens' ? 512 : 5}
              max={item.id === 'temperature' ? 1 : item.id === 'maxTokens' ? 4096 : 120}
              step={item.id === 'temperature' ? 0.1 : item.id === 'maxTokens' ? 256 : 5}
              value={settings[item.id]}
              onChange={(e) => updateSetting(item.id, parseFloat(e.target.value))}
              className="w-full accent-brand"
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-8 space-y-8 animate-slide-up max-w-6xl mx-auto">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2 uppercase italic gradient-text">Settings</h1>
          <p className="text-zinc-400 text-sm font-medium">Manage your account and application preferences</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm font-bold text-zinc-400 hover:text-white transition-all"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-sm font-bold hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </motion.button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {settingSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeSection === section.id
                    ? 'bg-brand/10 text-brand border border-brand/30'
                    : 'hover:bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <section.icon className="w-5 h-5" />
                <div className="flex-1">
                  <p className="text-sm font-bold">{section.title}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{section.description}</p>
                </div>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {settingSections.map((section) => (
              activeSection === section.id && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-brand/20 text-brand">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black tracking-tight">{section.title}</h2>
                      <p className="text-zinc-400 text-sm">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {section.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                      >
                        {renderSettingItem(item)}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-red-500/20 text-red-500">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white">Clear Cache</h3>
              <p className="text-xs text-zinc-500">Remove temporary data</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-500">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white">Reset Settings</h3>
              <p className="text-xs text-zinc-500">Restore defaults</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-green-500/20 text-green-500">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white">Export Data</h3>
              <p className="text-xs text-zinc-500">Download your data</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
