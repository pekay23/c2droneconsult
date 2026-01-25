import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop"; // Re-added for best UX
import CookieBanner from "@/components/CookieBanner"; // <-- IMPORT THE NEW COMPONENT

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// THE FIX: Removed the extra backtick from Space_Grotesk
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

// Metadata
export const metadata: Metadata = {
  title: "C2 Drone Consult | Premier Aviation Regulatory Services",
  description: "Expert guidance for GCAA Registration, RTO Certification, and specialized operational approvals in Ghana.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-c2white text-c2black antialiased`}>
        
        <PageTransition />
        
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>

        <ScrollToTop />
        
        {/* ADD THE COOKIE BANNER HERE */}
        <CookieBanner />
        
      </body>
    </html>
  );
}