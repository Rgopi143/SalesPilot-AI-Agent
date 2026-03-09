import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover scale effect
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () =>
        gsap.to(cursor, { scale: 1.8, duration: 0.3 })
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(cursor, { scale: 1, duration: 0.3 })
      );
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-[9999]"
    />
  );
};

export default Cursor;