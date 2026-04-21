import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, ArrowRight, Bot, Command, Layers, X, Lock, FileText, Globe, MessageCircle, Check, Star, Users, Database, TrendingUp, Crown, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

type ModalType = 'privacy' | 'terms' | 'security' | 'connect' | 'freetrial' | null;

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [trialForm, setTrialForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    agreeTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPricing = () => scrollToSection('pricing-section');
  const scrollToFeatures = () => scrollToSection('features-section');
  const scrollToSecurity = () => scrollToSection('security-section');

  const modalContent = {
    privacy: {
      title: 'Privacy Policy',
      icon: Lock,
      content: 'At SalesPilot AI, your data integrity is our highest priority. We employ a "Zero-Retention" policy for lead data analyzed during active sessions. All PII (Personally Identifiable Information) is processed in isolated, volatile memory and is never persisted to long-term storage or used to train base models without your explicit, authenticated consent.'
    },
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      content: 'By accessing the SalesPilot AI Terminal, you agree to use our multi-agent orchestration responsibly. While our agents are highly sophisticated, you maintain final accountability for all communications sent to leads. Commercial use requires an active subscription and adherence to our ethical AI deployment guidelines.'
    },
    security: {
      title: 'Security Infrastructure',
      icon: Shield,
      content: 'Our system is built on a "Fortress" architecture. Every agent interaction is protected by AES-256 encryption at the transport layer. We leverage SOC2-compliant orchestration gateways and perform regular automated penetration testing on our tool-calling APIs to ensure your CRM data remain strictly sandboxed.'
    },
    connect: {
      title: 'Connect with Us',
      icon: MessageCircle,
      content: 'The SalesPilot AI team is based in the cloud. For enterprise integration support or feedback, reach out to our core systems at pilot@salespilot.ai. Join our community on X/Twitter @SalesPilotAI for the latest updates on multi-agent breakthroughs.'
    },
    freetrial: {
      title: 'Start Your Free Trial',
      icon: Zap,
      content: 'Get instant access to SalesPilot AI with our 14-day free trial. No credit card required, full feature access, and unlimited potential to transform your sales process.'
    }
  };

  const handleTrialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would normally send the data to your backend
    console.log('Trial started:', trialForm);
    
    setIsSubmitting(false);
    setActiveModal(null);
    
    // Redirect to app or show success message
    onEnter();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setTrialForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#1A1A1A]/40 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[32px] p-10 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
              
              {activeModal === 'freetrial' ? (
                <>
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
                    Start Your Free Trial
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">
                    Get instant access to SalesPilot AI with our 14-day free trial. No credit card required.
                  </p>
                  
                  <form onSubmit={handleTrialSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={trialForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={trialForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <input
                        type="text"
                        value={trialForm.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={trialForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        checked={trialForm.agreeTerms}
                        onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                        className="mt-1 w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500"
                      />
                      <label htmlFor="terms" className="text-sm text-slate-600">
                        I agree to the <button type="button" onClick={() => setActiveModal('terms')} className="text-green-600 hover:underline">Terms of Service</button> and <button type="button" onClick={() => setActiveModal('privacy')} className="text-green-600 hover:underline">Privacy Policy</button>
                      </label>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveModal(null)}
                        className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="flex-1 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Starting Trial...
                          </span>
                        ) : (
                          'Start Free Trial'
                        )}
                      </motion.button>
                    </div>
                  </form>
                </>
              ) : activeModal && modalContent[activeModal] && (
                <>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    {React.createElement(modalContent[activeModal].icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
                    {modalContent[activeModal].title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {modalContent[activeModal].content}
                  </p>
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="mt-8 w-full btn-primary"
                  >
                    Close
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white shadow-xl">
            <Shield className="w-6 h-6" />
          </div>
          <span className="font-black text-xl tracking-tight uppercase">SalesPilot<span className="text-blue-600">AI</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest opacity-60">
          <button 
            onClick={scrollToFeatures}
            className="hover:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Agents
          </button>
          <button 
            onClick={scrollToSecurity}
            className="hover:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Security
          </button>
          <button 
            onClick={scrollToPricing}
            className="hover:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Pricing
          </button>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full font-bold text-sm tracking-tight hover:shadow-2xl hover:shadow-black/20 transition-all"
        >
          Launch Terminal
        </motion.button>
      </nav>

      {/* Hero */}
      <main className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E9ECEF] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-blue-600"
          >
            <Zap className="w-3 h-3 fill-current" />
            Next-Gen Multi-Agent Orchestration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-12 uppercase italic"
          >
            Automate <br />
            <span className="text-blue-600">Your Sales</span> <br />
            Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium mb-12 leading-relaxed"
          >
            Deploy a specialized chain of AI agents that analyze leads, decide strategies, and execute CRM workflows—all in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onEnter}
              className="group bg-[#1A1A1A] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-black transition-all shadow-2xl shadow-black/20"
            >
              Start Analyzing Leads
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-[#E9ECEF] text-[#1A1A1A] px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div id="features-section" className="max-w-7xl mx-auto mt-40 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Bot, title: "Multi-Agent Logic", desc: "Specialized agents collaborating in a sequential chain for perfect task execution." },
            { icon: Command, title: "CRM Orchestration", desc: "Automatic database updates and task creation based on intelligent decisions." },
            { icon: Layers, title: "Real-time Transparency", desc: "View the 'thoughts' of every agent as they work through complex logic." }
          ].map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-[#E9ECEF] rounded-[40px] text-left hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <div id="pricing-section" className="max-w-7xl mx-auto mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-blue-600">
              <Crown className="w-3 h-3 fill-current" />
              Pricing Plans
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-[0.85] tracking-tighter mb-8 uppercase italic">
              Choose Your <br />
              <span className="text-blue-600">Intelligence</span> Level
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              Scale your sales automation with flexible pricing designed for teams of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Free Trial Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-[40px] p-10 hover:shadow-2xl transition-all relative"
            >
              <div className="absolute top-0 right-8 bg-green-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                FREE TRIAL
              </div>
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Free Trial</h3>
                <p className="text-green-700 font-medium">Try SalesPilot AI completely free</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">₹0</span>
                  <span className="text-green-600 font-medium">/14 days</span>
                </div>
                <p className="text-sm text-green-600">No credit card required</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Up to 100 leads processed',
                  '2 AI agents included',
                  'Basic CRM integration',
                  'Email support',
                  'Standard analytics',
                  'Full feature access',
                  'No setup fees'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveModal('freetrial')}
                className="w-full bg-green-500 text-white py-4 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
              >
                Start Free Trial
              </motion.button>
            </motion.div>

            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#E9ECEF] rounded-[40px] p-10 hover:shadow-2xl transition-all relative"
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Starter</h3>
                <p className="text-slate-500 font-medium">Perfect for small teams getting started</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">₹2,399</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-sm text-slate-500">Billed annually or ₹3,199 month-to-month</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Up to 500 leads per month',
                  '3 AI agents included',
                  'Basic CRM integration',
                  'Email support',
                  'Standard analytics'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-b from-blue-600 to-blue-700 text-white border-2 border-blue-800 rounded-[40px] p-12 hover:shadow-2xl transition-all relative transform scale-105"
            >
              <div className="absolute top-0 right-8 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                MOST POPULAR
              </div>
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Professional</h3>
                <p className="text-blue-100 font-medium">Ideal for growing sales teams</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">₹8,199</span>
                  <span className="text-blue-100 font-medium">/month</span>
                </div>
                <p className="text-sm text-blue-100">Billed annually or ₹10,599 month-to-month</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Up to 5,000 leads per month',
                  'Unlimited AI agents',
                  'Advanced CRM integrations',
                  'Priority support',
                  'Advanced analytics & reporting',
                  'Custom workflows',
                  'API access'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all"
              >
                Start Free Trial
              </motion.button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900 text-white border border-slate-800 rounded-[40px] p-10 hover:shadow-2xl transition-all"
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Enterprise</h3>
                <p className="text-slate-400 font-medium">Custom solutions for large teams</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">Custom</span>
                </div>
                <p className="text-sm text-slate-400">Tailored pricing for your needs</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Unlimited leads & agents',
                  'All integrations included',
                  'Dedicated account manager',
                  '24/7 phone support',
                  'Custom AI model training',
                  'White-label options',
                  'SLA guarantees',
                  'On-premise deployment option'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-slate-800 text-slate-400 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
              <h3 className="text-2xl font-black mb-4">30-Day Money-Back Guarantee</h3>
              <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-6">
                Try SalesPilot AI risk-free. If you're not completely satisfied with your results within the first 30 days, we'll refund your entire purchase.
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Free migration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

        {/* Security Section */}
        <div id="security-section" className="max-w-7xl mx-auto mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-blue-600">
              <Shield className="w-3 h-3 fill-current" />
              Security First
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-[0.85] tracking-tighter mb-8 uppercase italic">
              Enterprise-Grade <br />
              <span className="text-blue-600">Security</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              Your data is protected with military-grade encryption and industry-leading security protocols
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Data Encryption",
                desc: "AES-256 encryption for all data传输 and storage with zero-knowledge architecture"
              },
              {
                icon: Lock,
                title: "Access Control",
                desc: "Multi-factor authentication and role-based access management for complete control"
              },
              {
                icon: Database,
                title: "Data Privacy",
                desc: "GDPR and SOC2 compliant with zero data retention and complete audit trails"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E9ECEF] rounded-[40px] p-10 text-left hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Footer */}
      <footer className="relative z-10 px-10 py-20 border-t border-[#E9ECEF] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-slate-400" />
          </div>
          <span className="font-bold text-sm tracking-tight uppercase opacity-40 italic">SalesPilot AI — Beta 1.0</span>
        </div>
        <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <button onClick={() => setActiveModal('privacy')} className="hover:text-blue-600 transition-colors cursor-pointer">Privacy</button>
          <button onClick={() => setActiveModal('terms')} className="hover:text-blue-600 transition-colors cursor-pointer">Terms</button>
          <button onClick={() => setActiveModal('security')} className="hover:text-blue-600 transition-colors cursor-pointer">Security</button>
          <button onClick={() => setActiveModal('connect')} className="hover:text-blue-600 transition-colors cursor-pointer">Connect</button>
        </div>
      </footer>
    </div>
  );
};
