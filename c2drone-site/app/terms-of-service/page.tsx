import type { Metadata } from 'next';

// SEO Metadata for the page
export const metadata: Metadata = {
  title: "Terms of Service | C2 Drone Consult",
  description: "Read the terms and conditions for using the C2 Drone Consult website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="mb-12 border-b pb-8">
          <h1 className="text-5xl font-bold font-heading text-c2black mb-4">Terms of Service</h1>
          <p className="text-gray-500">Last Updated: January 25, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:font-heading prose-headings:text-c2black prose-a:text-c2blue hover:prose-a:text-c2dark">
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using our website, c2droneconsult.com (the "Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on C2 Drone Consult's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on our website;</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by C2 Drone Consult at any time.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on our website are provided on an 'as is' basis. C2 Drone Consult makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, the information provided on this Site is for general informational purposes only and does not constitute a formal consultancy agreement or professional advice. A client relationship is only formed upon the execution of a formal, written agreement with C2 Drone Consult.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall C2 Drone Consult or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if C2 Drone Consult or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Ghana and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

        </div>
      </div>
    </main>
  );
}
