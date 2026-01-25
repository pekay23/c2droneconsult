"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".fade-in", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });
  }, { scope: container });

  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20" ref={container}>
      <div className="max-w-4xl mx-auto px-8">
        
        {/* HEADER */}
        <h1 className="text-5xl md:text-7xl font-bold text-c2black mb-8 fade-in">
          Navigating the <span className="text-c2blue">Future</span> of Flight.
        </h1>

        {/* MAIN TEXT */}
        <div className="prose prose-lg text-gray-600 fade-in">
          <p className="text-xl leading-relaxed mb-8 font-medium text-c2black">
            C2 Drone Consult is a leading drone consultancy dedicated to helping businesses and individuals navigate the evolving world of unmanned aviation.
          </p>
          
          <p className="mb-6">
            We specialize in <strong>Drone Registration, ROC/RTO Certification, and obtaining special regulatory approvals</strong>, ensuring compliance and smooth operations. Our mission is to empower clients with expert guidance, practical solutions, and reliable support at every step of their drone regulatory compliance journey.
          </p>

          <p className="mb-12">
            Whether you’re starting out or scaling operations, we make drone regulatory compliance and certification simple, efficient, and stress-free. Founded in <strong>2025</strong>, we are at the forefront of Ghana's aviation revolution.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12 fade-in">
            <div>
                <h3 className="text-4xl font-bold text-c2blue mb-2">100%</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Compliance Rate</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-c2blue mb-2">2025</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Year Founded</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-c2blue mb-2">24/7</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Expert Support</p>
            </div>
        </div>

      </div>
    </main>
  );
}
