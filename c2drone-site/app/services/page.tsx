"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTree, FaIndustry, FaShieldAlt, FaHelicopter } from "react-icons/fa"; 
// 1. CHANGE THE IMPORT to use the better component
import SeamlessVideoLoop from "@/components/SeamlessVideoLoop";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Precision Agriculture",
    desc: "Maximize yields with multispectral crop analysis, identifying issues weeks before they are visible.",
    icon: <FaTree className="text-4xl mb-4" />,
  },
  {
    title: "Industrial Inspection",
    desc: "Risk-free structural assessments using millimeter-accurate 3D models of towers, bridges, and pipelines.",
    icon: <FaIndustry className="text-4xl mb-4" />,
  },
  {
    title: "Aerial Mapping & Surveying",
    desc: "Topographic data faster than traditional methods, delivering orthomosaics and digital elevation models (DEM).",
    icon: <FaHelicopter className="text-4xl mb-4" />,
  },
  {
    title: "Security & Surveillance",
    desc: "24/7 aerial monitoring for sensitive assets with automated perimeter patrols and thermal imaging.",
    icon: <FaShieldAlt className="text-4xl mb-4" />,
  },
];

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section 
      id="services" 
      ref={container} 
      className="relative py-32 text-white overflow-hidden bg-c2black"
    >
      
      {/* 2. USE THE SEAMLESS COMPONENT HERE AS WELL */}
      <SeamlessVideoLoop src="/videos/expertise.mp4" opacity={0.6} />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center md:text-left max-w-3xl">
           <h2 className="text-sm font-bold tracking-widest text-c2blue uppercase mb-3">Our Expertise</h2>
           <h3 className="text-4xl md:text-6xl font-bold font-heading mb-6">Comprehensive Aerial Intelligence</h3>
           <p className="text-lg text-gray-200 leading-relaxed">
             We don't just fly drones; we capture actionable data that drives business value.
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group p-8 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="text-c2blue">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold font-heading mb-4 text-white">{service.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-auto pt-6 text-sm font-bold text-c2blue flex items-center gap-2">
                Learn More <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
