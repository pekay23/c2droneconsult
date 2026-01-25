"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image"; // <--- Make sure Image from Next.js is imported

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
      gsap.fromTo(".mobile-link", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, { x: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    gsap.set(navRef.current, { backgroundColor: "#1b1b1b", backdropFilter: "blur(0px)" });

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.scroll() > 50) {
            gsap.to(navRef.current, { 
                backgroundColor: "rgba(27, 27, 27, 0.85)", 
                backdropFilter: "blur(12px)", 
                duration: 0.3
            });
        } else {
            gsap.to(navRef.current, { 
                backgroundColor: "#1b1b1b", 
                backdropFilter: "blur(0px)", 
                duration: 0.3
            });
        }
      }
    });
  }, []);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 flex items-center justify-between transition-colors">
        
        {/* 1. MOBILE HAMBURGER */}
        <div className="md:hidden flex-1 flex justify-start">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl z-50 focus:outline-none p-2 text-white">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        {/* 2. LOGO WITH IMAGE */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-4 group z-50">
                
                {/* Text Part of the Logo */}
                <div className="flex items-center gap-3">
                    <div className="text-4xl font-bold tracking-tighter text-c2blue font-heading leading-none">
                        C2
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-lg font-bold text-white leading-none tracking-wide font-heading group-hover:text-gray-200 transition-colors">
                            DRONE
                        </span>
                        <span className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-[0.3em] leading-tight">
                            CONSULT
                        </span>
                    </div>
                </div>

                {/* Image Part of the Logo */}
                <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-12">
                    <Image
                        src="/quad.png"
                        alt="C2 Drone Consult Quadcopter"
                        fill
                        className="object-contain" // Ensures image fits perfectly
                        priority
                    />
                </div>

            </Link>
        </div>
        
        {/* 3. DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 font-medium absolute left-1/2 transform -translate-x-1/2 text-white">
          <Link href="/services" className="hover:text-c2blue transition-colors">Services</Link>
          <Link href="/about" className="hover:text-c2blue transition-colors">About</Link>
          <Link href="/news" className="hover:text-c2blue transition-colors">News</Link>
          <Link href="/contact" className="hover:text-c2blue transition-colors">Contact</Link>
        </div>

        {/* 4. CTA */}
        <div className="flex-1 md:flex-none flex justify-end">
            <Link href="/contact" className="hidden md:block border border-white px-6 py-2 rounded-full hover:bg-c2blue hover:border-c2blue hover:text-white transition-all font-medium text-sm text-white">
            Get Started
            </Link>
            <div className="md:hidden w-8"></div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div ref={menuRef} className="fixed inset-0 bg-c2black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center text-white -translate-x-full">
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
