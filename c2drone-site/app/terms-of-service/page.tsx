import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | C2 Drone Consult",
  description: "Read the terms and conditions for using the C2 Drone Consult website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* HEADER */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-5xl font-bold font-heading text-c2black mb-4">Terms of Service</h1>
          <p className="text-gray-500 italic">Last Updated: <span className="font-semibold text-c2blue">January 25, 2026</span></p>
        </div>

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-700 
                        prose-headings:font-heading prose-headings:text-c2black prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-c2blue prose-h2:pl-4
                        prose-strong:text-c2black prose-strong:font-bold">
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using our website, <strong className="text-c2blue">c2droneconsult.com</strong> (the "Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on C2 Drone Consult's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-c2blue">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on our website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by C2 Drone Consult at any time.
          </p>

          <h2>3. Disclaimer</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 italic text-gray-600 rounded-r-lg">
            <p className="mb-4 font-bold not-italic text-red-700">IMPORTANT NOTICE:</p>
            <p className="mb-0">
              The materials on our website are provided on an 'as is' basis. C2 Drone Consult makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>
          <p>
            Further, the information provided on this Site is for general informational purposes only and <strong>does not constitute a formal consultancy agreement or professional advice</strong>. A client relationship is only formed upon the execution of a formal, written agreement with C2 Drone Consult.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall <span className="text-c2blue font-bold">C2 Drone Consult</span> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of <strong className="text-c2black underline decoration-c2blue underline-offset-4">Ghana</strong> and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <hr className="my-12 border-gray-200" />

          <p className="text-sm text-gray-500">
            If you have any questions regarding these Terms, please contact us at <a href="mailto:info@c2drone.com" className="text-c2blue font-bold no-underline hover:underline">info@c2drone.com</a>.
          </p>

        </div>
      </div>
    </main>
  );
}
