"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground"; // <--- NEW IMPORT
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
}

export default function Home() {
  const container = useRef(null);
  const pinSection = useRef(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchNews();
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: pinSection.current,
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
    });
  }, { scope: container });

  return (
    <main ref={container} className="w-full relative bg-c2white">
      
      {/* 1. HERO SECTION WITH IMAGE */}
      <section className="h-screen w-full flex flex-col justify-center items-center bg-c2black text-white relative overflow-hidden">
        
        {/* HERO IMAGE BACKGROUND */}
        <div className="absolute inset-0 z-0">
            <Image 
                src="/hero-drone1.jpg" // Professional Drone Shot
                alt="Drone Surveying"
                fill
                className="object-cover opacity-40" // Darkened for text readability
                priority
            />
            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute inset-0 bg-linear-to-b from-c2black/30 via-c2black/50 to-c2black" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold z-10 text-center tracking-tight leading-tight drop-shadow-2xl">
          Mastering Drone <br /> <span className="text-c2blue">Compliance</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-gray-200 z-10 max-w-2xl text-center font-light px-4 drop-shadow-lg">
          Expert guidance for GCAA Registration, RTO Certification, and specialized operational approvals in Ghana.
        </p>

        <div className="z-10 mt-10 flex gap-4">
            <Link href="/contact" className="bg-c2blue px-8 py-3 rounded-full font-bold hover:bg-white hover:text-c2blue transition-colors shadow-lg hover:shadow-c2blue/50">
                Get Certified
            </Link>
            <Link href="/services" className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-c2black transition-colors backdrop-blur-sm">
                View Services
            </Link>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <Services />

      {/* 3. PINNED SECTION (THE "WHY PALO ALTO" STYLE) */}
      <section 
        ref={pinSection} 
        className="h-screen w-full bg-gray-50 flex items-center justify-between px-6 md:px-20 overflow-hidden relative"
      >
        {/* THE "VIDEO" BACKGROUND EFFECT */}
        <TechBackground />

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center md:pl-10 z-10 pointer-events-none">
           <h2 className="text-5xl font-bold text-c2black mb-6 drop-shadow-sm">
             Regulatory <span className="text-c2dark">Excellence</span>
           </h2>
           <p className="text-lg text-gray-600 max-w-lg leading-relaxed mb-8 bg-white/80 p-4 rounded-xl backdrop-blur-sm border border-gray-100">
             We specialize in Drone Registration, ROC/RTO Certification, and special regulatory approvals. 
             Our mission is to empower clients with expert guidance ensuring compliance and smooth operations.
           </p>
           <Link href="/about" className="text-c2blue font-bold text-lg hover:underline underline-offset-4 flex items-center gap-2 pointer-events-auto w-fit">
             Read Our Full Story <span className="text-xl">→</span>
           </Link>
        </div>
        
        <div className="hidden md:flex w-1/2 h-full items-center justify-center z-10">
           <div className="w-100 h-125 bg-c2blue/90 backdrop-blur-md rounded-3xl shadow-2xl relative flex flex-col items-center justify-center p-10 text-white transform rotate-3 hover:rotate-0 transition-transform duration-700 border border-white/20">
                <FaCheckCircle className="text-8xl mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-2">100% Certified</h3>
                <p className="text-center text-white/80">
                    Your partner in achieving full GCAA compliance and operational safety.
                </p>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-black/10 rounded-full blur-xl" />
           </div>
        </div>
      </section>

      {/* 4. NEWS SECTION */}
      <section id="news" className="min-h-screen bg-c2black text-white py-24 px-8 md:px-20">
        <div className="flex justify-between items-end mb-16 border-b border-gray-700 pb-4">
            <h2 className="text-4xl font-bold">Latest Insights</h2>
            <Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:block">
                View All News →
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {posts.length === 0 ? (
             <div className="col-span-3 text-center py-20 text-gray-500">
                Loading latest updates...
             </div>
           ) : (
             posts.map((post) => (
               <div key={post._id} className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800 hover:border-c2blue/30">
                 <div className="h-56 w-full relative overflow-hidden">
                   {post.mainImage ? (
                     <Image 
                       src={urlFor(post.mainImage).width(500).url()} 
                       alt={post.title}
                       fill
                       className="object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                   ) : (
                     <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">No Image</div>
                   )}
                 </div>
                 <div className="p-8">
                   <p className="text-c2blue text-xs font-bold uppercase tracking-widest mb-3">
                     {new Date(post.publishedAt).toLocaleDateString()}
                   </p>
                   <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-c2blue transition-colors">
                     {post.title}
                   </h3>
                   <span className="text-sm text-gray-400 group-hover:text-white underline decoration-c2blue underline-offset-4">Read Article</span>
                 </div>
               </div>
             ))
           )}
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer />

    </main>
  );
}
