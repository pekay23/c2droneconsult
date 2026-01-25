// REMOVED "use client" - This is now a Server Component
import type { Metadata } from 'next';
import ServicesList from '@/components/ServicesList'; // <-- Import our new Client Component

// Metadata now works correctly
export const metadata: Metadata = {
  title: "Our Services | C2 Drone Consult",
  description: "Explore our comprehensive drone services including GCAA Registration, ROC/RTO Certification, regulatory approvals, safety management, and strategic consultancy.",
};

// This is a clean, non-interactive Server Component
export default function ServicesPage() {
  return (
    <main className="bg-c2black min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                Comprehensive regulatory and operational support for the modern aviation industry.
            </p>
        </div>

        {/* Render the interactive list component here */}
        <ServicesList />

      </div>
    </main>
  );
}
