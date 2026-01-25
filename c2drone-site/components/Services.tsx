"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// FIXED IMPORTS: All from 'fa' (Font Awesome) to be safe
import { FaTree, FaIndustry, FaShieldAlt, FaHelicopter } from "react-icons/fa"; 

gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: "Precision Agriculture",
    desc: "Multispectral imaging to optimize crop health and yield.",
    icon: <FaTree className="text-4xl mb-4" />,
  },
  {
    title: "Industrial Inspection",
    desc: "Automated structure scanning for bridges and towers.",
    icon: <FaIndustry className="text-4xl mb-4" />,
  },
  {
    title: "Aerial Mapping",
    desc: "3D Topographic surveys with millimeter accuracy.",
    icon: <FaHelicopter className="text-4xl mb-4" />, // <--- Using Helicopter as safe fallback
  },
  {
    title: "Security & Surveillance",
    desc: "Real-time aerial monitoring for sensitive assets.",
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
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-24 bg-c2white text-c2black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
           <h2 className="text-sm font-bold tracking-widest text-c2blue uppercase mb-2">Our Expertise</h2>
           <h3 className="text-4xl md:text-5xl font-bold">Comprehensive Drone Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group p-8 border border-gray-200 rounded-2xl hover:bg-c2blue hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-c2blue group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-500 group-hover:text-gray-100 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
