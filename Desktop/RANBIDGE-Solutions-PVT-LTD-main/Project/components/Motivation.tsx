import React from "react";

const Motivation: React.FC = () => {
  return (
    <section className="py-28 bg-blue-900/20 backdrop-blur-md border-y border-blue-500/30 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-6">
        Let’s Build Something That Matters
      </h2>
      <p className="text-lg mb-10 text-slate-200">
        Your idea deserves a world-class digital experience.
      </p>
      <a
        href="/contact"
        className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:scale-105 transition shadow-lg shadow-blue-600/30"
      >
        Start Your Project
      </a>
    </section>
  );
};

export default Motivation;
