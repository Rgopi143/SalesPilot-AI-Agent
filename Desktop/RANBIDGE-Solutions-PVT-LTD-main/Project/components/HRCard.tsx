import React from 'react';
import { Users, Shield, Award, TrendingUp } from 'lucide-react';

const HRCard: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            HR Solutions
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive human resource management solutions for modern businesses
          </p>
        </div>

        {/* HR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recruitment Card */}
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
              <Users size={32} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Talent Recruitment</h3>
            <p className="text-slate-300 leading-relaxed">
              Find and hire the best talent with our advanced recruitment strategies and screening processes.
            </p>
          </div>

          {/* Performance Management Card */}
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-colors">
              <TrendingUp size={32} className="text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Performance Management</h3>
            <p className="text-slate-300 leading-relaxed">
              Track employee performance with comprehensive analytics and feedback systems.
            </p>
          </div>

          {/* Compliance Card */}
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors">
              <Shield size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Compliance & Safety</h3>
            <p className="text-slate-300 leading-relaxed">
              Ensure workplace compliance and safety with our automated monitoring systems.
            </p>
          </div>

          {/* Payroll Card */}
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600/30 transition-colors">
              <Award size={32} className="text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Payroll Management</h3>
            <p className="text-slate-300 leading-relaxed">
              Streamline payroll processing with automated calculations and timely payments.
            </p>
          </div>

          {/* Training Card */}
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600/30 transition-colors">
              <Users size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Training & Development</h3>
            <p className="text-slate-300 leading-relaxed">
              Enhance employee skills with personalized training programs and development plans.
            </p>
          </div>

          {/* Analytics Card */}
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-rose-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600/30 transition-colors">
              <TrendingUp size={32} className="text-rose-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">HR Analytics</h3>
            <p className="text-slate-300 leading-relaxed">
              Make data-driven decisions with comprehensive HR analytics and reporting.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 backdrop-blur-md p-12 rounded-3xl border border-slate-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your HR?
            </h3>
            <p className="text-slate-300 mb-8">
              Let us help you build a more efficient and productive workplace with our comprehensive HR solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Users size={20} />
              Get HR Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRCard;
