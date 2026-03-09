import React, { useState } from "react";
import { PRICING_PLANS } from "../constants.tsx";
import { Check, X } from "lucide-react";
import { PricingPlan } from "../types";

const Pricing: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleStart = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setShowModal(true);
  };

  return (
    <section id="pricing" className="py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-16 text-white font-heading uppercase tracking-tight">
          Flexible Plans
        </h2>

        {/* Pricing Cards - Only 3 Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {PRICING_PLANS.slice(0, 3).map((plan, i) => (
            <div
              key={i}
              className={`
                relative flex flex-col p-10 rounded-[2.5rem] backdrop-blur-xl border-2
                transition-all duration-500 hover:-translate-y-3 group
                ${plan.recommended
                  ? "bg-blue-600/10 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                  : "bg-slate-950/40 border-slate-800 hover:border-slate-600"}
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-200 mb-1">{plan.title}</h3>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="flex-grow space-y-5 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                      <Check size={14} className="text-blue-500" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleStart(plan.title)}
                className={`
                  w-full py-5 rounded-2xl font-black text-lg transition-all
                  ${plan.recommended
                    ? "bg-white text-blue-600 hover:bg-slate-100 shadow-xl"
                    : "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20"}
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* CUSTOM PROJECT HORIZONTAL CONTAINER */}
        <div className="max-w-6xl mx-auto mt-20 group relative">
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-slate-950 px-8 py-10 md:px-14 md:py-12 border border-slate-800 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            {/* Artistic Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-6 h-6 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 shrink-0 transform group-hover:scale-110 transition-transform duration-500">
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase font-heading tracking-tight leading-none">
                  Customized Solutions
                </h3>
                <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed">
                  Have a unique project in mind? We build <span className="text-white font-bold">fully custom websites</span> and advanced web applications tailored exactly to your specific requirements.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918247392437"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn whitespace-nowrap px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-blue-600 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-3"
            >
              Contact Team
              <div className="bg-slate-950/10 p-1.5 rounded-lg group-hover/btn:bg-white/20 transition-colors">
                <X size={20} className="rotate-45" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* REQUIREMENT FORM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          />

          <div className="relative bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <h3 className="text-3xl font-black text-white mb-2 uppercase font-heading">Project Inquiry</h3>
              <p className="text-slate-400">Tell us about your requirements for the <span className="text-blue-400 font-bold">{selectedPlan}</span>. We'll build something extraordinary together.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert('Requirement Submitted Successfully!'); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Work Email</label>
                  <input required type="email" placeholder="john@company.com" className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Describe your Requirements</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you want to build (e.g., E-commerce site with specific features...)"
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-500 shadow-xl shadow-blue-600/20 transition-all"
              >
                Send Requirements
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
