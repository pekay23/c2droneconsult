"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTree, FaIndustry, FaShieldAlt, FaHelicopter } from "react-icons/fa"; 
import TechBackground from "@/components/TechBackground"; // Reusing your animation

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Precision Agriculture",
    desc: "Maximize yields with multispectral crop analysis. We identify irrigation issues and pest infestations weeks before they are visible to the naked eye.",
    icon: <FaTree className="text-4xl mb-4" />,
  },
  {
    title: "Industrial Inspection",
    desc: "Risk-free structural assessments. Our drones generate millimeter-accurate 3D models of towers, bridges, and pipelines without putting workers in danger.",
    icon: <FaIndustry className="text-4xl mb-4" />,
  },
  {
    title: "Aerial Mapping & Surveying",
    desc: "Topographic data faster than traditional methods. We deliver orthomosaics and digital elevation models (DEM) ready for CAD/GIS integration.",
    icon: <FaHelicopter className="text-4xl mb-4" />,
  },
  {
    title: "Security & Surveillance",
    desc: "24/7 aerial monitoring for sensitive assets. Deploy automated perimeter patrols with thermal imaging to detect intruders day or night.",
    icon: <FaShieldAlt className="text-4xl mb-4" />,
  },
];

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative py-32 bg-gray-50 text-c2black overflow-hidden">
      
      {/* 1. ANIMATED BACKGROUND */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <TechBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* HEADER */}
        <div className="mb-20 text-center md:text-left max-w-3xl">
           <h2 className="text-sm font-bold tracking-widest text-c2blue uppercase mb-3">Our Expertise</h2>
           <h3 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Aerial Intelligence</h3>
           <p className="text-lg text-gray-600 leading-relaxed">
             We don't just fly drones; we capture actionable data. From the farm to the construction site, 
             our certified pilots and analysts turn aerial insights into business value.
           </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group p-8 bg-white border border-gray-200 rounded-2xl hover:bg-c2blue hover:border-c2blue hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="text-c2blue group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-500 group-hover:text-gray-100 text-sm leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-6 text-sm font-bold text-c2blue group-hover:text-white flex items-center gap-2">
                Learn More <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
