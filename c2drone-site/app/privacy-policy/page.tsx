import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | C2 Drone Consult",
  description: "Learn how C2 Drone Consult collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* HEADER */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-5xl font-bold font-heading text-c2black mb-4">Privacy Policy</h1>
          <p className="text-gray-500 italic">Last Updated: <span className="font-semibold text-c2blue">January 25, 2026</span></p>
        </div>

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-700 
                        prose-headings:font-heading prose-headings:text-c2black prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-c2blue prose-h2:pl-4
                        prose-strong:text-c2black prose-strong:font-bold
                        prose-a:text-c2blue hover:prose-a:text-c2dark prose-a:no-underline hover:prose-a:underline">
          
          <p className="lead text-xl text-gray-600">
            C2 Drone Consult ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-c2blue">c2droneconsult.com</strong>.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-6">
            <h3 className="text-xl font-bold text-c2black mb-3 mt-0">A. Personal Data</h3>
            <p className="mb-0">
              Personally identifiable information, such as your <span className="underline decoration-c2blue/30 underline-offset-4">name, email address, and telephone number</span>, that you voluntarily give to us when you use the <strong>Contact Form</strong> on the Site. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
            <h3 className="text-xl font-bold text-c2black mb-3 mt-0">B. Derivative Data</h3>
            <p className="mb-0">
              Information our servers automatically collect when you access the Site, such as your <em>IP address, browser type, operating system, access times,</em> and the pages you have viewed directly before and after accessing the Site.
            </p>
          </div>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-c2blue">
            <li>Respond to your inquiries and support requests efficiently.</li>
            <li>Send you administrative information, such as updates to our services or terms.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>

          <h2>3. Cookie Policy</h2>
          <p>
            We use cookies to help customize the Site and improve your experience. When you visit our website, we use a single, essential cookie (<code className="bg-gray-100 text-c2blue px-2 py-1 rounded text-sm">cookie_consent</code>) to remember your choice regarding our cookie policy. 
          </p>
          <p>
            This cookie <strong>does not</strong> track you or collect any personal information. It is solely for remembering your consent and will not be used for any other purpose.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, and to request the deletion of your personal data. To make such a request, please contact us using the information below.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <address className="not-italic bg-c2black text-white p-8 rounded-2xl shadow-lg mt-8">
            <strong className="text-2xl font-heading block mb-4">C2 Drone Consult</strong>
            <span className="block mb-2">Accra, Ghana</span>
            <span className="block mb-4">West Africa</span>
            <a href="mailto:info@c2drone.com" className="text-c2blue font-bold text-lg hover:text-white transition-colors">info@c2drone.com</a>
          </address>

        </div>
      </div>
    </main>
  );
}
