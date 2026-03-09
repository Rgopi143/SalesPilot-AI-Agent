import React, { useEffect, useRef } from 'react';
import { Clock, Monitor, UserCheck, Award, FileCheck, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Internship: React.FC = () => {
  const internshipRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftContentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rightContentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, internshipRef);

    return () => ctx.revert();
  }, []);

  const modelSpecs = [
    { icon: <Calendar className="text-blue-600" />, label: "Duration", value: "4–8 Weeks", detail: "Flexible based on academic calendar" },
    { icon: <Monitor className="text-blue-600" />, label: "Mode", value: "Hybrid / Online / Offline", detail: "Tailored to student convenience" },
    { icon: <Clock className="text-blue-600" />, label: "Time Commitment", value: "1–2 Hours Daily", detail: "Designed not to hinder regular classes" },
    { icon: <UserCheck className="text-blue-600" />, label: "Mentorship", value: "1:1 Guidance", detail: "Personalized mentorship with industry experts" },
    { icon: <FileCheck className="text-blue-600" />, label: "Projects", value: "Mini + Final Project", detail: "Real-world application based" },
    { icon: <Award className="text-blue-600" />, label: "Certification", value: "Standardized Certificate", detail: "Valued Internship Completion Certificate" }
  ];

  const internshipPrograms = [
    {
      title: "Python Full Stack Development",
      mode: "Virtual",
      duration: "6-8 Weeks",
      description: "Master end-to-end Python development with modern frameworks and deployment strategies",
      skills: ["Python", "Django/Flask", "PostgreSQL", "REST APIs", "Docker", "AWS Deployment"],
      mentorship: "1:1 Personal Mentorship",
      projects: "2 Real-world Projects"
    },
    {
      title: "Web Development with Python & Flask",
      mode: "Virtual", 
      duration: "4-6 Weeks",
      description: "Build dynamic web applications using Python and Flask framework with best practices",
      skills: ["Python", "Flask", "HTML/CSS/JavaScript", "SQLAlchemy", "Jinja2", "API Development"],
      mentorship: "1:1 Personal Mentorship", 
      projects: "1 Capstone Project"
    }
  ];

  return (
    <section ref={internshipRef} className="pt-40 pb-24 bg-transparent page-break">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Internship Program</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Structured Learning Experience
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our internship model is carefully crafted to ensure maximum learning with minimum disruption to regular academic schedules. We focus on ethical engagement and practical output.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={leftContentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">A Structured Approach to Real-World Learning</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
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
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-900/50">
              <h4 className="text-2xl font-bold text-white mb-4">Why Choose Our Internship Program?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <UserCheck className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <FileCheck className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Real Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <Award className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <Monitor className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Flexible Mode</span>
                </div>
              </div>
            </div>

            {/* 1:1 Mentorship Card */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-12 rounded-2xl border border-purple-900/50">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-3xl font-bold text-white">One on One Mentorship</h4>
                
              </div>
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Get personalized guidance from industry experts who are dedicated to your growth and success throughout your internship journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300 font-medium text-lg">Personalized Learning Path</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300 font-medium text-lg">Weekly Progress Reviews</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300 font-medium text-lg">Code Reviews & Feedback</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300 font-medium text-lg">Career Guidance</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-purple-800/20 rounded-lg border border-purple-600/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-300 font-semibold">Special Offer</p>
                      <p className="text-slate-300 text-sm">Get 20% off on 3-month commitment</p>
                    </div>
                    <span className="text-purple-300 font-bold">₹2,999/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightContentRef} className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Program Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modelSpecs.map((spec, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {spec.icon}
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{spec.label}</p>
                    <h4 className="text-white font-bold text-lg mb-2">{spec.value}</h4>
                    <p className="text-slate-400 text-sm">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Join our internship program and gain the practical experience that employers are looking for. Transform your academic knowledge into professional skills.
              </p>

              <a
                href="https://ranbidge-intern-4djb.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Internship Programs Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Virtual Internships</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized Programs for Your Career Growth
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Choose from our specialized virtual internship programs designed to provide hands-on experience with 1:1 mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">{program.title}</h4>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-300 font-medium">Mode: {program.mode}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-300 font-medium">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-300 font-medium">Projects: {program.projects}</span>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{program.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white font-semibold mb-3">Skills You'll Learn:</h5>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <a
                      href="https://forms.gle/esK6TANvsz5Xwb4q9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;