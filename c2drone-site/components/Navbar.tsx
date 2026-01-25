"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- Hook to check current page
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const pathname = usePathname();

  // Define which pages have a LIGHT background (White)
  // On these pages, the navbar text must be DARK initially.
  const lightPages = ["/about", "/contact"];
  const isLightPage = lightPages.includes(pathname);

  useGSAP(() => {
    // 1. Determine Initial Colors based on Page Type
    const initialTextColor = isLightPage ? "#1b1b1b" : "#ffffff"; // Black if light page, White if dark page
    const scrolledTextColor = "#ffffff"; // Always white when scrolled (on dark bg)
    
    // 2. Set the initial state immediately to prevent "flash"
    gsap.set(navRef.current, { 
        backgroundColor: "transparent",
        color: initialTextColor,
        borderColor: initialTextColor 
    });

    // 3. Create the Scroll Animation
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.scroll() > 50) {
            // SCROLLED STATE: Dark Background, White Text
            gsap.to(navRef.current, { 
                backgroundColor: "#1b1b1b", 
                color: scrolledTextColor,
                duration: 0.3, 
                ease: "power1.out" 
            });
        } else {
            // TOP STATE: Transparent Background, Context-Aware Text
            gsap.to(navRef.current, { 
                backgroundColor: "transparent", 
                color: initialTextColor,
                duration: 0.3, 
                ease: "power1.out" 
            });
        }
      }
    });
  }, [pathname]); // <--- Re-run this animation whenever the user changes pages

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-colors"
    >
      {/* BRAND LOGO */}
      <Link href="/" className="flex items-baseline gap-2 group">
        <div className="text-2xl font-bold tracking-tighter">
            C2<span className="text-c2blue group-hover:text-current transition-colors">DRONE</span>
        </div>
        <span className="text-sm font-light tracking-widest opacity-80 uppercase">
            Consult
        </span>
      </Link>
      
      {/* NAVIGATION LINKS */}
      <div className="hidden md:flex space-x-8 font-medium">
        <Link href="/services" className="hover:text-c2blue transition-colors">Services</Link>
        <Link href="/about" className="hover:text-c2blue transition-colors">About</Link>
        <Link href="/news" className="hover:text-c2blue transition-colors">News</Link>
        <Link href="/contact" className="hover:text-c2blue transition-colors">Contact</Link>
      </div>

      {/* CTA BUTTON */}
      {/* 'border-current' makes the border match the text color automatically */}
      <Link href="/contact" className="hidden md:block border border-current px-6 py-2 rounded-full hover:bg-c2blue hover:border-c2blue hover:text-white transition-all font-medium text-sm">
        Get Started
      </Link>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-2xl cursor-pointer">
        ☰
      </div>
    </nav>
  );
}
