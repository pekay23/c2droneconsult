"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function PageTransition() {
  const loaderRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    // This effect runs every time the user navigates to a new page
    if (loaderRef.current) {
      const tl = gsap.timeline();
      
      // 1. Instantly show the loader
      tl.set(loaderRef.current, { autoAlpha: 1 });
      
      // 2. Animate it out after a short delay
      // The delay gives the new page time to render behind the loader
      tl.to(loaderRef.current, { 
        autoAlpha: 0, 
        delay: 0.8, // Adjust this delay to feel right (0.5s to 1s is typical)
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }, [pathname]); // The key: this animation re-triggers whenever the pathname changes

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 bg-c2black z-9999 flex justify-center items-center pointer-events-none"
    >
      {/* Re-using the text logo from the Navbar for consistency */}
      <div className="flex items-center gap-4 group">
          <div className="text-5xl font-bold tracking-tighter text-c2blue font-heading leading-none">
              C2
          </div>
          <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-white leading-none tracking-wide font-heading">
                  DRONE
              </span>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.3em] leading-tight">
                  CONSULT
              </span>
          </div>
      </div>
    </div>
  );
}
