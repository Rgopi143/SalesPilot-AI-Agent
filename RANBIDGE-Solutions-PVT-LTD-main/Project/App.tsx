import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Domains from "./components/Domains";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import ThreeBackground from "./components/ThreeBackground";

function App() {
  useEffect(() => {
    // Global parallax support
    gsap.utils.toArray("[data-speed]").forEach((element: any) => {
      const speed = parseFloat(element.getAttribute("data-speed"));
      gsap.to(element, {
        y: () => -(window.innerHeight * speed),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <ThreeBackground />
      {/* Global UI */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* Global Components */}
      <ChatWidget />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
