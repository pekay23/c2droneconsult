"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function SeamlessVideoLoop({ src, opacity = 0.5 }: { src: string; opacity?: number }) {
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const fadeDuration = 1; // How long the crossfade should be (in seconds)
    
    const currentVideo = videoRefs[activeVideo].current;
    const nextVideo = videoRefs[1 - activeVideo].current;

    if (!currentVideo || !nextVideo) return;
    
    // Ensure the next video is ready to play
    nextVideo.currentTime = 0;
    nextVideo.play();
    gsap.set(nextVideo, { opacity: 0 });

    const handleTimeUpdate = () => {
      // When the current video is about to end, start the crossfade
      if (currentVideo.duration - currentVideo.currentTime <= fadeDuration) {
        gsap.to(currentVideo, { opacity: 0, duration: fadeDuration });
        gsap.to(nextVideo, { opacity: 1, duration: fadeDuration });
        
        // After the fade, swap the active video and reset the old one
        setTimeout(() => {
          setActiveVideo(prev => 1 - prev);
          currentVideo.currentTime = 0;
        }, fadeDuration * 1000);
      }
    };

    currentVideo.addEventListener("timeupdate", handleTimeUpdate);
    
    return () => {
      currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
    };

  }, [activeVideo]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-c2black">
      {/* Both video elements are stacked */}
      <video
        ref={videoRefs[0]}
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ opacity: activeVideo === 0 ? 1 : 0 }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <video
        ref={videoRefs[1]}
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ opacity: activeVideo === 1 ? 1 : 0 }}
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: opacity }}
      />
    </div>
  );
}
