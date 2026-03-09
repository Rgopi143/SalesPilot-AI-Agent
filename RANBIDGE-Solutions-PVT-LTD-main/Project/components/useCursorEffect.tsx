import { useEffect } from "react";
import { gsap } from "gsap";

export const useCursorEffect = () => {
  useEffect(() => {
    const glow = document.querySelector(
      '[style*="radial-gradient"]'
    ) as HTMLElement;

    const logo = document.querySelector(
      "img[alt='Ranbidge']"
    ) as HTMLElement;

    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const showLogo = el.dataset.logo === "true";

      gsap.to(glow, { opacity: 1, duration: 0.25 });
      gsap.to(logo, {
        opacity: showLogo ? 0.35 : 0,
        scale: showLogo ? 1 : 0.85,
        duration: 0.25,
      });
    };

    const leave = () => {
      gsap.to(glow, { opacity: 0, duration: 0.25 });
      gsap.to(logo, { opacity: 0, duration: 0.25 });
    };

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);
};
