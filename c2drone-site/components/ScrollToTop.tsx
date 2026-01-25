"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowUp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {

  useGSAP(() => {
    // Animation to fade the button in and out
    gsap.to(".scroll-to-top-btn", {
      autoAlpha: 1, // Fades in to full opacity
      scrollTrigger: {
        trigger: "body", // Use the whole page as the trigger
        start: "20% top", // Fades in when you've scrolled 20% down the page
        end: "bottom bottom",
        toggleActions: "play none none reverse", // play on enter, reverse on leave back
        scrub: 0.5,
      },
    });
  });

  // Function to handle the smooth scroll
  const handleScrollToTop = () => {
    // We need to access the Lenis instance to scroll smoothly.
    // Lenis attaches itself to the <html> element, so we can find it this way.
    const lenis = (document.documentElement as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 }); // Smooth scroll to top over 2 seconds
    } else {
      // Fallback for browsers without JS or if Lenis fails
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="scroll-to-top-btn fixed bottom-8 right-8 z-50 w-14 h-14 bg-c2blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-c2dark transition-colors opacity-0 invisible" // Start hidden
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}
