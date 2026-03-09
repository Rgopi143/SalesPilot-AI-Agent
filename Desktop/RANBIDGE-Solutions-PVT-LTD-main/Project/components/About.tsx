import React, { useEffect, useRef } from "react";
import {
  Eye,
  Target,
  GraduationCap,
  Building2,
  Briefcase,
  User,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        storyRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        visionRef.current?.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative pt-40 pb-24
        bg-transparent
        overflow-hidden
      "
    >
      {/* SUBTLE DEPTH LAYER (VERY LIGHT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-28">
        {/* STORY */}
        <div
          ref={storyRef}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-blue-600 uppercase tracking-wider text-sm font-semibold">
            About Ranbidge
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Bridging Education with
            <span className="text-blue-600"> Industry Reality</span>
          </h3>

          <p className="text-lg text-slate-300 leading-relaxed">
            <strong>RANBIDGE Solutions Private Limited</strong> is built with a
            single purpose — to close the gap between academic learning and
            real-world industry expectations.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            We partner with colleges, students, and organizations to deliver
            structured programs, live internships, and industry-aligned skill
            development.
          </p>
        </div>

        {/* WHO WE SERVE */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: <GraduationCap />,
              title: "Students",
              desc: "Hands-on exposure, career clarity, and job-ready skills.",
            },
            {
              icon: <Building2 />,
              title: "Educational Institutions",
              desc: "Improved employability outcomes and industry partnerships.",
            },
            {
              icon: <Briefcase />,
              title: "Industry Partners",
              desc: "Access to trained talent and project execution support.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-slate-900/50 backdrop-blur border border-slate-700
                rounded-2xl p-8
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 mb-4 text-blue-600">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* VISION & MISSION */}
        <div
          ref={visionRef}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-12 shadow-sm">
            <Eye className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">
              Our Vision
            </h4>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                To become a trusted national bridge between education and industry,
                creating ethical, skilled, and future-ready professionals.
              </p>
              <p>
                <strong>RANBIDGE SOLUTIONS PRIVATE LIMITED</strong> specializes in delivering comprehensive IT services that bridge the gap between innovation and real-world impact, providing everything your business needs to thrive digitally.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-12 shadow-sm">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h4>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                To deliver practical learning experiences, real internships, and
                structured growth pathways aligned with industry needs.
              </p>
              <p>
                Our expertise spans across modern technology stacks including <strong>MERN, MEAN, LAMP</strong>, mobile development with <strong>Flutter and React Native</strong>, and cutting-edge AI solutions—your one-stop destination for all online IT services.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM INTRODUCTION */}
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Our Expert Team</h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Meet the professionals behind <strong>RANBIDGE</strong> dedicated to delivering excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "R.Gopinath Reddy",
                role: "CEO & Founder",
              },
              {
                name: "Narayanam V S A G Prakash",
                role: "CFO & Co-Founder",
              },
              {
                name: "A.Naga Ravindra",
                role: "CTO",
              },
              {
                name: "B.Varun Sandesh",
                role: "COO",
              }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 border border-slate-700 bg-slate-800 flex items-center justify-center">
                  <User className="w-24 h-24 text-slate-500 group-hover:text-blue-400 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-6">
                    <h5 className="text-white font-bold">{member.name}</h5>
                    <p className="text-blue-400 text-sm">{member.role}</p>
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

export default About;
