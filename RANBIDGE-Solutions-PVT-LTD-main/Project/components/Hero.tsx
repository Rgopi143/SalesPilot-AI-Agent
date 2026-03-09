import React, { useEffect, useRef } from "react";
import { COMPANY_NAME, TAGLINE } from "../constants";
import { ChevronDown, ArrowRight, Twitter, Youtube } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 🔥 Hero reveal (NO typewriter) */
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
      );

      gsap.fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 1.2 }
      );

      /* 🎥 Background parallax */
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ✨ Subtle particles (reduced) */
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        heroRef.current?.appendChild(particle);

        gsap.to(particle, {
          y: "-100vh",
          x: Math.random() * 120 - 60,
          duration: Math.random() * 12 + 12,
          ease: "none",
          repeat: -1,
          delay: Math.random() * 4,
        });
      }
    }, heroRef);

    /* 🎯 Magnetic buttons */
    const buttons = buttonsRef.current?.querySelectorAll("a");
    buttons?.forEach((button) => {
      const move = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const reset = () =>
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });

      button.addEventListener("mousemove", move);
      button.addEventListener("mouseleave", reset);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 overflow-hidden text-white"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 sm:-top-24 md:-top-32 -left-16 sm:-left-24 md:-left-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-600/30 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-600/30 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight"
        >
          {COMPANY_NAME}
        </h1>

        <p
          ref={subtitleRef}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {TAGLINE}
        </p>

        <div
          ref={buttonsRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-500
              shadow-lg shadow-blue-500/30
              hover:shadow-indigo-500/40 transition-all
              flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Get Started
            <ArrowRight size={20} className="sm:size-18" />
          </a>

          <a
            href="#services"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-white/20 transition-all text-sm sm:text-base"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 opacity-60">
        <ChevronDown size={20} className="sm:size-8" />
      </div>
    </section>
  );
};

export default Hero;
