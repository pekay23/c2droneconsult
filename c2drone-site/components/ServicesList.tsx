"use client"; // This is a dedicated Client Component

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// The list of services lives here
const serviceList = [
  {
    title: "Drone Registration & Compliance",
    desc: "Full assistance with GCAA registration processes for recreational and commercial drones.",
  },
  {
    title: "ROC / RTO Certification",
    desc: "Guided pathways for Remote Operator Certificates and Training Organization approvals.",
  },
  {
    title: "Regulatory Approvals",
    desc: "Securing special flight permits for BVLOS, night operations, and restricted zones.",
  },
  {
    title: "Operational Manual Development",
    desc: "Custom documentation tailored to your specific fleet and mission requirements.",
  },
  {
    title: "Safety Management Systems",
    desc: "Implementation of safety protocols to meet international aviation standards.",
  },
  {
    title: "Consultancy & Strategy",
    desc: "Expert advice on scaling your drone fleet and integrating aerial data into your business.",
  },
];

export default function ServicesList() {
  const container = useRef(null);

  // Animation logic is safely contained here
  useGSAP(() => {
    gsap.from(".service-item", {
      scrollTrigger: { trigger: container.current, start: "top 85%" },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    });
  }, { scope: container });

  return (
    <div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
      {serviceList.map((item, i) => (
        <div key={i} className="service-item group border-b border-gray-800 pb-8 hover:border-c2blue transition-colors duration-300">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-c2blue text-2xl mt-1 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-c2blue transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
