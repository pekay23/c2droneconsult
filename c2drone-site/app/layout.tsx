import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // <--- Import Space Grotesk
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

// Body font (Readable)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Heading font (Tech/Aero look)
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "C2 Drone Consult | Premier Aviation Regulatory Services",
  description: "Expert guidance for GCAA Registration, RTO Certification, and specialized operational approvals in Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-c2white text-c2black antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
