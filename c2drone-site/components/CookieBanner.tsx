"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Helper function to manage cookies
const setCookie = (name: string, value: string, days: number) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};

const getCookie = (name: string) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};


export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only run this logic on the client side
    if (typeof window !== "undefined") {
      const consent = getCookie('cookie_consent');
      if (!consent) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookie_consent', 'accepted', 365); // Remember for 1 year
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // Don't render anything if consent is given
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-c2black/90 text-white backdrop-blur-md border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center md:text-left">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
          Read our <Link href="/privacy-policy" className="underline hover:text-c2blue">Privacy Policy</Link>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-c2blue text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-c2blue transition-colors shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
