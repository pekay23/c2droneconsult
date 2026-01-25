import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-c2black text-white py-16 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* LOGO & INFO (UPDATED) */}
        <div className="mb-8 md:mb-0">
          
          {/* Logo Structure copied from Navbar */}
          <div className="mb-6">
            <Link href="/" className="flex items-center gap-4 group z-50">
              <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold tracking-tighter text-c2blue font-heading leading-none">
                      C2
                  </div>
                  <div className="flex flex-col justify-center">
                      <span className="text-lg font-bold text-white leading-none tracking-wide font-heading">
                          DRONE
                      </span>
                      <span className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-[0.3em] leading-tight">
                          CONSULT
                      </span>
                  </div>
              </div>
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-12">
                  <Image
                      src="/quad.png"
                      alt="C2 Drone Consult Quadcopter"
                      fill
                      className="object-contain"
                  />
              </div>
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-6">
            Empowering businesses with expert guidance and practical solutions for drone regulatory compliance.
          </p>
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
             <div className="flex items-center gap-2">
                <FaPhone className="text-c2blue" /> 
                <a href="tel:0278961805" className="hover:text-white transition-colors">027 896 1805</a>
             </div>
             <div className="flex items-center gap-2">
                <FaEnvelope className="text-c2blue" />
                <a href="mailto:info@c2drone.com" className="hover:text-white transition-colors">info@c2drone.com</a>
             </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col space-y-4 pt-2">
            <h3 className="font-bold text-lg font-heading">Company</h3>
            <Link href="/about" className="text-gray-400 hover:text-c2blue transition-colors">About Us</Link>
            <Link href="/services" className="text-gray-400 hover:text-c2blue transition-colors">Services</Link>
            <Link href="/news" className="text-gray-400 hover:text-c2blue transition-colors">News & Insights</Link>
            <Link href="/contact" className="text-gray-400 hover:text-c2blue transition-colors">Contact</Link>
        </div>

        {/* SOCIALS */}
        <div className="pt-2">
            <h3 className="font-bold text-lg font-heading mb-4">Connect</h3>
            <div className="flex space-x-4 text-2xl">
                <a 
                  href="https://www.linkedin.com/company/c2-drone-consult/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0077b5] transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                    <FaInstagram />
                </a>
            </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} C2Drone Consult. All Rights Reserved. Founded in Ghana.
      </div>
    </footer>
  );
}
