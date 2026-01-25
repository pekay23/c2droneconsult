import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-c2black text-white py-16 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* BRAND & INFO */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            C2<span className="text-c2blue">DRONE</span>
          </h2>
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
        <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <a href="/about" className="text-gray-400 hover:text-c2blue transition-colors">About Us</a>
            <a href="/services" className="text-gray-400 hover:text-c2blue transition-colors">Services</a>
            <a href="/news" className="text-gray-400 hover:text-c2blue transition-colors">News & Insights</a>
            <a href="/contact" className="text-gray-400 hover:text-c2blue transition-colors">Contact</a>
        </div>

        {/* SOCIALS */}
        <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
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
        © 2025 C2Drone Consult. All Rights Reserved. Founded in Ghana.
      </div>
    </footer>
  );
}
