"use client";

// This component will render a looping, muted video as a background.
export default function VideoBackground({ src, opacity = 0.5 }: { src: string; opacity?: number }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-c2black">
      {/* The Video Element */}
      <video
        key={src} // Helps React properly handle src changes
        autoPlay
        loop
        muted
        playsInline // CRITICAL for iOS to prevent fullscreen
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay for Text Readability */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: opacity }}
      />
    </div>
  );
}
