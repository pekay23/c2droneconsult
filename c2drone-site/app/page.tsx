"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";
import SeamlessVideoLoop from "@/components/SeamlessVideoLoop";
import { 
  FaCheckCircle, FaImage, FaPlane, FaFileContract, FaAward,
  FaTree, FaIndustry, FaShieldAlt, FaHelicopter
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Data for the Expertise Section
const expertiseServices = [
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

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
}

export default function Home() {
  const container = useRef(null);
  const regulatorySectionRef = useRef(null);
  const expertiseSectionRef = useRef(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id, title, slug, mainImage, publishedAt
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchNews();
  }, []);

  useGSAP(() => {
    gsap.to(".regulatory-card", {
      y: -50,
      scrollTrigger: {
        trigger: regulatorySectionRef.current,
        start: "top bottom", end: "bottom top", scrub: 1,
      },
    });

    gsap.from(".expertise-card", {
      scrollTrigger: { trigger: expertiseSectionRef.current, start: "top 80%" },
      y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
    });
  }, { scope: container });

  return (
    <main ref={container} className="w-full relative bg-c2white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen w-full flex flex-col justify-center items-center bg-c2black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image 
                src="/hero-drone1.jpg"
                alt="Drone Surveying"
                fill
                className="object-cover opacity-40"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-c2black/30 via-c2black/50 to-c2black" />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold font-heading z-10 text-center tracking-tight leading-tight drop-shadow-2xl">
          Mastering Drone <br /> <span className="text-c2blue">Compliance</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-200 z-10 max-w-2xl text-center font-light px-4 drop-shadow-lg">
          Expert guidance for GCAA Registration, RTO Certification, and specialized operational approvals in Ghana.
        </p>
        <div className="z-10 mt-10 flex gap-4">
            <Link href="/contact" className="bg-c2blue px-8 py-3 rounded-full font-bold hover:bg-white hover:text-c2blue transition-colors shadow-lg hover:shadow-c2blue/50">
                Get Certified
            </Link>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <div className="bg-c2black border-b border-gray-800 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-8 text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base">
            <span>Trusted By Industry Leaders</span>
            <div className="flex gap-8 opacity-50">
                <span>GCAA Compliant</span> • <span>ICAO Standards</span> • <span>Safety First</span>
            </div>
        </div>
      </div>

      {/* --- SEAMLESS VIDEO CONTAINER (START) --- */}
      <section className="relative bg-c2black text-white overflow-hidden">
        {/* Single Video Background for both sections */}
        <SeamlessVideoLoop src="/videos/process.mp4" opacity={0.7} />

        {/* 3. OUR EXPERTISE SECTION (Content Block) */}
        <div ref={expertiseSectionRef} className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="mb-20 text-center md:text-left max-w-3xl">
             <h2 className="text-sm font-bold tracking-widest text-c2blue uppercase mb-3">Our Expertise</h2>
             <h3 className="text-4xl md:text-6xl font-bold font-heading mb-6">Comprehensive Aerial Intelligence</h3>
             <p className="text-lg text-gray-200 leading-relaxed">
               We don't just fly drones; we capture actionable data that drives business value.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseServices.map((service, index) => (
              <div key={index} className="expertise-card group p-8 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <div className="text-c2blue">{service.icon}</div>
                <h4 className="text-xl font-bold font-heading mb-4 text-white">{service.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-auto pt-6 text-sm font-bold text-c2blue flex items-center gap-2">Learn More <span>→</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PROCESS SECTION (Content Block) */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
            <div className="text-center mb-16">
                <h2 className="text-c2blue font-bold tracking-widest uppercase mb-2">The Process</h2>
                <h3 className="text-4xl font-bold font-heading text-white">Your Path to Flight</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors hover:shadow-lg">
                    <div className="w-16 h-16 bg-c2blue/10 rounded-full flex items-center justify-center text-c2blue text-2xl mb-6"><FaFileContract /></div>
                    <h4 className="text-xl font-bold text-white mb-3">1. Consultation</h4>
                    <p className="text-gray-400">We analyze your operational needs and identify the specific GCAA permits required.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors hover:shadow-lg">
                    <div className="w-16 h-16 bg-c2blue/10 rounded-full flex items-center justify-center text-c2blue text-2xl mb-6"><FaPlane /></div>
                    <h4 className="text-xl font-bold text-white mb-3">2. Compliance & Audit</h4>
                    <p className="text-gray-400">Our team prepares your manuals, safety protocols, and GCAA documentation for submission.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors hover:shadow-lg">
                    <div className="w-16 h-16 bg-c2blue/10 rounded-full flex items-center justify-center text-c2blue text-2xl mb-6"><FaAward /></div>
                    <h4 className="text-xl font-bold text-white mb-3">3. Certification</h4>
                    <p className="text-gray-400">We manage the approval process until you receive your Permit or ROC. Ready for takeoff.</p>
                </div>
            </div>
        </div>
      </section>
      {/* --- SEAMLESS VIDEO CONTAINER (END) --- */}

      {/* 5. REGULATORY SECTION */}
      <section ref={regulatorySectionRef} className="min-h-screen w-full bg-gray-50 flex items-center justify-between px-6 md:px-20 overflow-hidden relative py-20">
        <TechBackground />
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-10 z-10 pointer-events-none">
           <h2 className="text-5xl font-bold font-heading text-c2black mb-6 drop-shadow-sm">Regulatory Excellence</h2>
           <p className="text-lg text-gray-600 max-w-lg leading-relaxed mb-8 bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-gray-100 shadow-sm">
             We specialize in Drone Registration, ROC/RTO Certification, and special regulatory approvals. 
           </p>
           <Link href="/about" className="text-c2blue font-bold text-lg hover:underline underline-offset-4 flex items-center gap-2 pointer-events-auto w-fit">
             Read Our Full Story <span className="text-xl">→</span>
           </Link>
        </div>
        <div className="hidden md:flex w-1/2 items-center justify-center z-10">
           <div className="regulatory-card w-100 h-125 bg-c2blue/90 backdrop-blur-md rounded-3xl shadow-2xl relative flex flex-col items-center justify-center p-10 text-white transform rotate-3 hover:rotate-0 transition-transform duration-700 border border-white/20">
                <FaCheckCircle className="text-8xl mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-2 font-heading">100% Certified</h3>
                <p className="text-center text-white/80">Your partner in achieving full GCAA compliance.</p>
           </div>
        </div>
      </section>

      {/* 6. NEWS SECTION */}
      <section id="news" className="min-h-screen bg-c2black text-white py-24 px-8 md:px-20">
        <div className="flex justify-between items-end mb-16 border-b border-gray-700 pb-4">
            <h2 className="text-4xl font-bold font-heading">Latest Insights</h2>
            <Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:block">
                View All News →
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {posts.length === 0 ? (
             <div className="col-span-3 text-center py-20 text-gray-500">Loading latest updates...</div>
           ) : (
             posts.map((post) => (
               <div key={post._id} className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800 hover:border-c2blue/30">
                 <div className="h-56 w-full relative overflow-hidden bg-gray-800">
                   {post.mainImage ? (
                     <Image src={urlFor(post.mainImage).width(500).url()} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full flex flex-col items-center justify-center text-gray-600"><FaImage className="text-4xl mb-2 opacity-50" /><span className="text-xs uppercase tracking-widest">No Image</span></div>
                   )}
                 </div>
                 <div className="p-8">
                   <p className="text-c2blue text-xs font-bold uppercase tracking-widest mb-3">{new Date(post.publishedAt).toLocaleDateString()}</p>
                   <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-c2blue transition-colors">{post.title}</h3>
                   <span className="text-sm text-gray-400 group-hover:text-white underline decoration-c2blue underline-offset-4">Read Article</span>
                 </div>
               </div>
             ))
           )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
