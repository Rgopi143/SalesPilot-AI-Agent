
import React, { useState, useEffect } from 'react';
import { DOMAINS } from '../constants';
import { CheckCircle2, X, ExternalLink, Folder } from 'lucide-react';
import { gsap } from 'gsap';

const Domains: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeDomainId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeDomainId]);

  const activeDomain = DOMAINS.find(d => d.id === activeDomainId);

  return (
    <section id="domains" className="pt-40 pb-24 bg-transparent page-break relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Domains Offered</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Specialized Tracks for Every Career Path</h3>
          <p className="text-lg text-slate-300">
            Select a domain to view relevant projects and internship opportunities detailed curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOMAINS.map((domain) => (
            <div
              key={domain.id}
              onClick={() => setActiveDomainId(domain.id)}
              className="
                bg-slate-900/50 backdrop-blur rounded-3xl p-8 
                border border-slate-700 shadow-sm flex flex-col 
                hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-2 
                transition-all duration-300 cursor-pointer group relative
              "
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                <ExternalLink size={20} />
              </div>

              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {domain.name}
              </h4>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{domain.description}</p>

              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key Topics</p>
                {domain.topics.slice(0, 4).map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
                {domain.topics.length > 4 && (
                  <div className="text-xs text-slate-500 pl-6">+ {domain.topics.length - 4} more</div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-blue-400 text-sm font-semibold flex items-center gap-2">
                  View {domain.projects?.length || 0} Sample Projects
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL */}
      {activeDomain && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setActiveDomainId(null)}
          />

          {/* Content */}
          <div className="relative bg-slate-900 border border-slate-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col">

            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur z-10 p-8 border-b border-slate-800 flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{activeDomain.name} Projects</h3>
                <p className="text-slate-400">{activeDomain.description}</p>
              </div>
              <button
                onClick={() => setActiveDomainId(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeDomain.projects && activeDomain.projects.length > 0 ? (
                activeDomain.projects.map((project, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group/card flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-transparent transition-colors z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h5 className="text-lg font-bold text-white mb-2">{project.title}</h5>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] uppercase font-bold tracking-wider rounded border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <a
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors"
                        >
                          Visit Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-slate-500">
                  <p>No projects listed for this domain yet.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#internship-modal"
                onClick={() => setActiveDomainId(null)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-center"
              >
                Apply for {activeDomain.name} Internship
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors text-center"
              >
                Get {activeDomain.name} Service
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Domains;
