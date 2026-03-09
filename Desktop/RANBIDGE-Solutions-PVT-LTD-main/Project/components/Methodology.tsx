
import React from 'react';
import { MousePointer2, ClipboardCheck, BarChart2 } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Hands-On Approach",
      description: "Learning by doing. We move beyond theory to implement real-world solutions through interactive sessions."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Weekly Evaluations",
      description: "Consistent monitoring through weekly tasks ensures students stay on track and receive timely feedback."
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Project-Based Assessment",
      description: "Final certification is based on the successful delivery of a practical project that showcases acquired skills."
    }
  ];

  return (
    <section className="py-24 bg-white page-break">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="mx-auto bg-blue-50 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">
              Ethics & Student Safety
            </div>
            <h3 className="text-4xl font-bold text-slate-900">A Safe & Ethical Learning Environment</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We uphold the highest standards of professional conduct. <strong>RANBIDGE Solutions</strong> is committed to ensuring that no student is exploited, and all processes remain transparent and data-secure.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-sm font-medium">
              <div className="p-4 bg-white rounded-2xl shadow-sm">No Unpaid Hidden Charges</div>
              <div className="p-4 bg-white rounded-2xl shadow-sm">Data Privacy Guaranteed</div>
              <div className="p-4 bg-white rounded-2xl shadow-sm">Professional Conduct</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
