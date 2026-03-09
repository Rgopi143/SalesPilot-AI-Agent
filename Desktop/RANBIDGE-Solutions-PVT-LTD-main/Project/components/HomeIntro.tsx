import React from "react";

const HomeIntro: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Everything You Need to Build a Powerful Digital Presence
        </h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          From industry-ready internships and custom software solutions to
          professional websites and research support — Ranbidge delivers
          end-to-end digital excellence under one roof.
        </p>
      </div>
    </section>
  );
};

export default HomeIntro;
