// REMOVED "use client"; directive
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import type { Metadata } from 'next';

// --- DYNAMIC METADATA (Now works correctly) ---
export const metadata: Metadata = {
  title: "Contact Us | C2 Drone Consult",
  description: "Ready to simplify your drone operations? Contact C2 Drone Consult today for a personalized consultation on regulatory compliance and certification in Ghana.",
};

export default function ContactPage() {
  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT: INFO */}
        <div>
            <h1 className="text-5xl font-bold font-heading text-c2black mb-8">Let's Talk.</h1>
            <p className="text-lg text-gray-600 mb-12">
                Ready to simplify your drone operations? Contact us for a consultation today.
            </p>
            <div className="space-y-8">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-c2blue/10 rounded-full flex items-center justify-center text-c2blue text-xl">
                        <FaPhone />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                        <p className="text-xl font-bold text-c2black">027 896 1805</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-c2blue/10 rounded-full flex items-center justify-center text-c2blue text-xl">
                        <FaEnvelope />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                        <p className="text-xl font-bold text-c2black">info@c2drone.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-c2blue/10 rounded-full flex items-center justify-center text-c2blue text-xl">
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
                        <p className="text-xl font-bold text-c2black">Accra, Ghana</p>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-100">
            <form 
              action="https://formspree.io/f/mojdvjvp"
              method="POST"
              className="space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full p-4 rounded-lg border border-gray-300 focus:border-c2blue focus:ring-2 focus:ring-c2blue/20 outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full p-4 rounded-lg border border-gray-300 focus:border-c2blue focus:ring-2 focus:ring-c2blue/20 outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4} 
                      className="w-full p-4 rounded-lg border border-gray-300 focus:border-c2blue focus:ring-2 focus:ring-c2blue/20 outline-none transition-all" 
                      placeholder="How can we help you?"
                    ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-c2blue text-white font-bold py-4 rounded-lg hover:bg-c2dark transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </main>
  );
}
