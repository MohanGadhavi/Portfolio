import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // Adjusted for typical smooth feel, user can tweak
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

export default SmoothScroll;
