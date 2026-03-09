import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";
import { COMPANY_NAME, FAQ_DATA } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursorEffect } from "./useCursorEffect";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  useCursorEffect();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const talkRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header */
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      /* Contact cards */
      gsap.fromTo(
        cardsRef.current?.children,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      /* Let’s Talk section */
      gsap.fromTo(
        talkRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: talkRef.current,
            start: "top 80%",
          },
        }
      );

      /* FAQ Section */
      gsap.fromTo(
        faqRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-40 pb-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* 🔹 HEADER */}
        <div
          ref={headerRef}
          data-cursor
          data-logo="true"
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-blue-600 uppercase tracking-wider text-sm font-semibold">
            Contact Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Let’s Build Something
            <span className="text-blue-600"> Meaningful Together</span>
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Reach out to discuss internships, MoUs, institutional collaborations,
            or custom digital solutions.
          </p>
        </div>

        {/* 🔹 MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 📞 CONTACT DETAILS */}
          <div ref={cardsRef} className="space-y-8">

            {/* EMAIL */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-5 p-8 rounded-3xl bg-slate-900/50 backdrop-blur border border-slate-700
                         hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-2xl p-4">
                <Mail size={26} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email
                </p>
                <a
                  href="mailto:ranbidgesolutionspvtltd@gmail.com"
                  className="text-lg font-bold text-white hover:text-blue-600 transition-colors"
                >
                  ranbidgesolutionspvtltd@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-5 p-8 rounded-3xl bg-slate-900/50 backdrop-blur border border-slate-700
                         hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-2xl p-4">
                <Phone size={26} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Phone
                </p>
                <a
                  href="tel:+918247392437"
                  className="text-lg font-bold text-white hover:text-blue-600 transition-colors"
                >
                  +91 82473 92437
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-5 p-8 rounded-3xl bg-slate-900/50 backdrop-blur border border-slate-700
                         hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-2xl p-4">
                <MapPin size={26} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Office Address
                </p>
                <p className="text-lg font-bold text-white">
                  Ravindra Nagar, Narasaraopet,
                  <br />
                  Palnadu District, Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* 💬 LET’S TALK */}
          <div
            ref={talkRef}
            data-cursor
            data-logo="true"
            className="
              p-12 rounded-3xl
              bg-gradient-to-br from-slate-900 to-slate-800
              text-white
              shadow-2xl
              hover:scale-[1.02]
              transition-all
            "
          >
            <h4 className="text-3xl font-extrabold mb-4">
              Let’s Talk About Your Idea
            </h4>

            <p className="text-slate-300 leading-relaxed mb-8">
              Whether you’re planning internships, college collaborations,
              or a premium website — we’re here to help you shape it.
            </p>

            <ul className="space-y-3 mb-10">
              <li>• Looking to sign an MoU with your institution?</li>
              <li>• Need industry-aligned internships?</li>
              <li>• Want a professional digital presence?</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ranbidgesolutionspvtltd@gmail.com"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700
                           text-white font-semibold text-center transition"
              >
                Start a Conversation
              </a>

              <a
                href="https://wa.me/918247392437"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20
                           text-white font-semibold text-center transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-10 text-sm text-slate-400">
              {COMPANY_NAME}
            </p>
          </div>
        </div>

        {/* 🔹 FAQ SECTION */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h4>
            <p className="text-slate-400">Common questions about our services and process.</p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-white">{faq.question}</span>
                  <span className="text-blue-500 bg-blue-500/10 p-1 rounded-lg">
                    {activeFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
