"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBars, FaTimes } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define Light Pages (Navbar text starts Dark)
  const lightPages = ["/about", "/contact"];
  const isLightPage = lightPages.includes(pathname);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Mobile Menu Animation
  useGSAP(() => {
    if (isMenuOpen) {
      // Open: Slide in and stagger links
      gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
      gsap.fromTo(".mobile-link", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
      );
    } else {
      // Close: Slide out
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isMenuOpen]);

  // Navbar Scroll Color Logic
  useGSAP(() => {
    const initialTextColor = isLightPage ? "#1b1b1b" : "#ffffff";
    const scrolledTextColor = "#ffffff";
    
    // Set Initial State
    gsap.set(navRef.current, { 
        backgroundColor: "transparent",
        color: initialTextColor,
        borderColor: initialTextColor 
    });

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.scroll() > 50) {
            gsap.to(navRef.current, { 
                backgroundColor: "#1b1b1b", 
                color: scrolledTextColor,
                duration: 0.3 
            });
        } else {
            // Only revert to transparent if menu is CLOSED
            if (!isMenuOpen) {
                gsap.to(navRef.current, { 
                    backgroundColor: "transparent", 
                    color: initialTextColor,
                    duration: 0.3 
                });
            }
        }
      }
    });
  }, [pathname, isMenuOpen]); // Re-run if page changes or menu opens

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-colors"
      >
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-baseline gap-2 group z-50">
          <div className="text-2xl font-bold tracking-tighter">
              C2<span className="text-c2blue group-hover:text-current transition-colors">DRONE</span>
          </div>
          <span className="text-sm font-light tracking-widest opacity-80 uppercase">
              Consult
          </span>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/services" className="hover:text-c2blue transition-colors">Services</Link>
          <Link href="/about" className="hover:text-c2blue transition-colors">About</Link>
          <Link href="/news" className="hover:text-c2blue transition-colors">News</Link>
          <Link href="/contact" className="hover:text-c2blue transition-colors">Contact</Link>
        </div>

        {/* DESKTOP CTA */}
        <Link href="/contact" className="hidden md:block border border-current px-6 py-2 rounded-full hover:bg-c2blue hover:border-c2blue hover:text-white transition-all font-medium text-sm">
          Get Started
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-2xl z-50 focus:outline-none"
          style={{ color: isMenuOpen ? "white" : "currentColor" }} // Ensure button is white when menu is open
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        ref={menuRef}
        className="fixed inset-0 bg-c2black z-40 flex flex-col justify-center items-center text-white translate-x-full"
      >
        <div className="flex flex-col space-y-8 text-center text-3xl font-bold">
          <Link href="/" className="mobile-link hover:text-c2blue transition-colors">Home</Link>
          <Link href="/services" className="mobile-link hover:text-c2blue transition-colors">Services</Link>
          <Link href="/about" className="mobile-link hover:text-c2blue transition-colors">About</Link>
          <Link href="/news" className="mobile-link hover:text-c2blue transition-colors">News</Link>
          <Link href="/contact" className="mobile-link hover:text-c2blue transition-colors">Contact</Link>
          
          <div className="mobile-link pt-8">
             <Link href="/contact" className="bg-c2blue px-10 py-4 rounded-full text-lg hover:bg-white hover:text-c2blue transition-colors">
                Get Started
             </Link>
          </div>
        </div>
      </div>
    </>
  );
}
