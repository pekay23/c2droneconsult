// REMOVED "use client" - This is now a Server Component
import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent'; // <-- Import our new Client Component

// Metadata now works correctly
export const metadata: Metadata = {
  title: "About Us | C2 Drone Consult",
  description: "Learn about C2 Drone Consult, a leading drone consultancy in Ghana dedicated to helping businesses navigate the evolving world of unmanned aviation.",
};

// This is a clean, non-interactive Server Component
export default function AboutPage() {
  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Render the interactive content component here */}
        <AboutContent />

      </div>
    </main>
  );
}
