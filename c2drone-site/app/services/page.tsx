"use client";

import { FaCheckCircle } from "react-icons/fa";

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

export default function ServicesPage() {
  return (
    <main className="bg-c2black min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                Comprehensive regulatory and operational support for the modern aviation industry.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {serviceList.map((item, i) => (
                <div key={i} className="group border-b border-gray-800 pb-8 hover:border-c2blue transition-colors duration-300">
                    <div className="flex items-start gap-4">
                        {/* Corrected class here: shrink-0 */}
                        <FaCheckCircle className="text-c2blue text-2xl mt-1 shrink-0" />
                        <div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-c2blue transition-colors">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </main>
  );
}
