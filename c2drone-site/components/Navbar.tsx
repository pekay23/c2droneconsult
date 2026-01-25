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

  const lightPages = ["/about", "/contact"];
  const isLightPage = lightPages.includes(pathname);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
      gsap.fromTo(".mobile-link", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 });
    } else {
      gsap.to(menuRef.current, { x: "-100%", duration: 0.5, ease: "power3.in" }); // Slide out to Left now
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    const initialTextColor = isLightPage ? "#1b1b1b" : "#ffffff";
    gsap.set(navRef.current, { backgroundColor: "transparent", color: initialTextColor, borderColor: initialTextColor });

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.scroll() > 50) {
            gsap.to(navRef.current, { backgroundColor: "#1b1b1b", color: "#ffffff", duration: 0.3 });
        } else {
            if (!isMenuOpen) {
                gsap.to(navRef.current, { backgroundColor: "transparent", color: initialTextColor, duration: 0.3 });
            }
        }
      }
    });
  }, [pathname, isMenuOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 flex items-center justify-between transition-colors">
        
        {/* 1. MOBILE HAMBURGER (LEFT) */}
        <div className="md:hidden flex-1 flex justify-start">
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-2xl z-50 focus:outline-none p-2"
            style={{ color: isMenuOpen ? "white" : "currentColor" }}
            >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        {/* 2. BRAND LOGO (Center on Mobile, Left on Desktop) */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="flex items-baseline gap-2 group z-50">
            <div className="text-2xl font-bold tracking-tighter font-heading">
                C2<span className="text-c2blue group-hover:text-current transition-colors">DRONE</span>
            </div>
            <span className="text-xs font-light tracking-widest opacity-80 uppercase hidden sm:inline-block">
                Consult
            </span>
            </Link>
        </div>
        
        {/* 3. DESKTOP LINKS (Center) */}
        <div className="hidden md:flex space-x-8 font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link href="/services" className="hover:text-c2blue transition-colors">Services</Link>
          <Link href="/about" className="hover:text-c2blue transition-colors">About</Link>
          <Link href="/news" className="hover:text-c2blue transition-colors">News</Link>
          <Link href="/contact" className="hover:text-c2blue transition-colors">Contact</Link>
        </div>

        {/* 4. CTA / RIGHT SPACER (Right) */}
        <div className="flex-1 md:flex-none flex justify-end">
            <Link href="/contact" className="hidden md:block border border-current px-6 py-2 rounded-full hover:bg-c2blue hover:border-c2blue hover:text-white transition-all font-medium text-sm">
            Get Started
            </Link>
            {/* Empty div to balance the centered logo on mobile */}
            <div className="md:hidden w-8"></div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (Slide from LEFT) */}
      <div 
        ref={menuRef}
        className="fixed inset-0 bg-c2black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center text-white -translate-x-full"
      >
        <div className="flex flex-col space-y-8 text-center text-3xl font-bold font-heading">
          <Link href="/" className="mobile-link hover:text-c2blue transition-colors">Home</Link>
          <Link href="/services" className="mobile-link hover:text-c2blue transition-colors">Services</Link>
          <Link href="/about" className="mobile-link hover:text-c2blue transition-colors">About</Link>
          <Link href="/news" className="mobile-link hover:text-c2blue transition-colors">News</Link>
          <Link href="/contact" className="mobile-link pt-8">
             <span className="bg-c2blue px-10 py-4 rounded-full text-lg hover:bg-white hover:text-c2blue transition-colors">Get Started</span>
          </Link>
        </div>
      </div>
    </>
  );
}
