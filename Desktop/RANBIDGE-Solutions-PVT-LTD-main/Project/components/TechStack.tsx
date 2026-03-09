import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TECHNOLOGIES = [
  { name: "HTML", color: "text-orange-500", border: "border-orange-500/30", bg: "bg-orange-500/5", dot: "bg-orange-500" },
  { name: "CSS", color: "text-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/5", dot: "bg-blue-500" },
  { name: "JavaScript", color: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/5", dot: "bg-yellow-400" },
  { name: "Tailwind", color: "text-cyan-400", border: "border-cyan-400/30", bg: "bg-cyan-400/5", dot: "bg-cyan-400" },
  { name: "Bootstrap", color: "text-purple-500", border: "border-purple-500/30", bg: "bg-purple-500/5", dot: "bg-purple-500" },
  { name: "GSAP", color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/5", dot: "bg-green-400" },
  { name: "Git", color: "text-orange-600", border: "border-orange-600/30", bg: "bg-orange-600/5", dot: "bg-orange-600" },
  { name: "GitHub", color: "text-white", border: "border-slate-400/30", bg: "bg-slate-400/5", dot: "bg-white" },
  { name: "Flask", color: "text-emerald-400", border: "border-emerald-400/30", bg: "bg-emerald-400/5", dot: "bg-emerald-400" },
  { name: "Node.js", color: "text-green-500", border: "border-green-500/30", bg: "bg-green-500/5", dot: "bg-green-500" },
  { name: "Express.js", color: "text-slate-300", border: "border-slate-300/30", bg: "bg-slate-300/5", dot: "bg-slate-300" },
  { name: "React", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5", dot: "bg-blue-400" },
  { name: "Flutter", color: "text-cyan-500", border: "border-cyan-500/30", bg: "bg-cyan-500/5", dot: "bg-cyan-500" },
  { name: "Python", color: "text-yellow-500", border: "border-yellow-500/30", bg: "bg-yellow-500/5", dot: "bg-yellow-500" },
  { name: "Java", color: "text-red-500", border: "border-red-500/30", bg: "bg-red-500/5", dot: "bg-red-500" },
  { name: "n8n", color: "text-pink-500", border: "border-pink-500/30", bg: "bg-pink-500/5", dot: "bg-pink-500" },
  { name: "Figma", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/5", dot: "bg-purple-400" },
  { name: "TypeScript", color: "text-blue-600", border: "border-blue-600/30", bg: "bg-blue-600/5", dot: "bg-blue-600" },
  { name: "MongoDB", color: "text-green-600", border: "border-green-600/30", bg: "bg-green-600/5", dot: "bg-green-600" },
  { name: "Supabase", color: "text-emerald-500", border: "border-emerald-500/30", bg: "bg-emerald-500/5", dot: "bg-emerald-500" },
  { name: "SQL", color: "text-blue-300", border: "border-blue-300/30", bg: "bg-blue-300/5", dot: "bg-blue-300" },
  { name: "PostgreSQL", color: "text-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/5", dot: "bg-blue-500" },
  { name: "RESTful API", color: "text-yellow-600", border: "border-yellow-600/30", bg: "bg-yellow-600/5", dot: "bg-yellow-600" },
  { name: "Docker", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5", dot: "bg-blue-400" },
  { name: "Matplotlib", color: "text-blue-300", border: "border-blue-300/30", bg: "bg-blue-300/5", dot: "bg-blue-300" },
  { name: "NumPy", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/5", dot: "bg-blue-400" },
  { name: "Pandas", color: "text-indigo-400", border: "border-indigo-400/30", bg: "bg-indigo-400/5", dot: "bg-indigo-400" },
  { name: "Excel", color: "text-green-700", border: "border-green-700/30", bg: "bg-green-700/5", dot: "bg-green-700" },
  { name: "AI Tools", color: "text-cyan-300", border: "border-cyan-300/30", bg: "bg-cyan-300/5", dot: "bg-cyan-300" }
];

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".tech-badge");
      if (!items) return;

      items.forEach((item) => {
        // Random starting positions
        gsap.set(item, {
          x: gsap.utils.random(-20, 20),
          y: gsap.utils.random(-20, 20),
        });

        // Floating animation
        gsap.to(item, {
          x: "+=30",
          y: "+=30",
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 2),
        });

        // Drifting effect
        gsap.to(item, {
          rotation: gsap.utils.random(-5, 5),
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-white font-heading uppercase tracking-tight">
            Our Tech Universe
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            An expansive ecosystem of technologies we leverage to build world-class digital solutions.
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto relative min-h-[400px] perspective-1000"
        >
          {TECHNOLOGIES.map((tech, i) => (
            <div
              key={i}
              className={`tech-badge 
                px-6 py-3 rounded-2xl
                bg-slate-950/40 backdrop-blur-xl border ${tech.border.replace('/30', '/60')}
                text-slate-200 font-bold text-sm md:text-base
                shadow-2xl shadow-black/20
                hover:scale-110 hover:border-white transition-all duration-300 cursor-pointer
                flex items-center justify-center whitespace-nowrap
              `}
            >
              <div className={`w-2 h-2 rounded-full mr-3 animate-pulse ${tech.dot}`} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
