
import React from 'react';
import { Clock, Monitor, UserCheck, Award, FileCheck, Calendar } from 'lucide-react';

const InternshipModel: React.FC = () => {
  const modelSpecs = [
    { icon: <Calendar className="text-blue-600" />, label: "Duration", value: "4–8 Weeks", detail: "Flexible based on academic calendar" },
    { icon: <Monitor className="text-blue-600" />, label: "Mode", value: "Hybrid / Online / Offline", detail: "Tailored to student convenience" },
    { icon: <Clock className="text-blue-600" />, label: "Time Commitment", value: "1–2 Hours Daily", detail: "Designed not to hinder regular classes" },
    { icon: <UserCheck className="text-blue-600" />, label: "Mentorship", value: "Industry-Guided", detail: "Direct interaction with experts" },
    { icon: <FileCheck className="text-blue-600" />, label: "Projects", value: "Mini + Final Project", detail: "Real-world application based" },
    { icon: <Award className="text-blue-600" />, label: "Certification", value: "Standardized Certificate", detail: "Valued Internship Completion Certificate" }
  ];

  return (
    <section id="model" className="py-24 bg-transparent page-break">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 space-y-8">
              <h2 className="text-blue-400 font-bold uppercase tracking-wider text-sm">Internship Model</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                A Structured Approach to Real-World Learning
              </h3>
              <p className="text-slate-400 text-lg">
                Our internship model is carefully crafted to ensure maximum learning with minimum disruption to regular academic schedules. We focus on ethical engagement and practical output.
              </p>

              <ul className="space-y-4">
                {[
                  "No exploitation of student resources",
                  "Clear learning outcomes for every week",
                  "Structured assessment and feedback loops",
                  "Industry-relevant tech stack focus"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {modelSpecs.map((spec, index) => (
                <div key={index} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                  <div className="bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    {spec.icon}
                  </div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                  <h4 className="text-white font-bold text-lg mb-1">{spec.value}</h4>
                  <p className="text-slate-500 text-sm">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipModel;
