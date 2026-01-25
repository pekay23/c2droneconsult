import type { Metadata } from 'next';

// SEO Metadata for the page
export const metadata: Metadata = {
  title: "Privacy Policy | C2 Drone Consult",
  description: "Learn how C2 Drone Consult collects, uses, and protects your personal data when you use our website and services.",
  // Prevent this page from being indexed by search engines if desired
  // robots: {
  //   index: false,
  //   follow: true,
  // },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="mb-12 border-b pb-8">
          <h1 className="text-5xl font-bold font-heading text-c2black mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: January 25, 2026</p>
        </div>

        {/* Using Tailwind's 'prose' plugin for beautiful typography by default */}
        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:font-heading prose-headings:text-c2black prose-a:text-c2blue hover:prose-a:text-c2dark">
          
          <p>
            C2 Drone Consult ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website c2droneconsult.com. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you use the contact form on the Site. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Respond to your inquiries and support requests.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>

          <h2>3. Cookie Policy</h2>
          <p>
            We use cookies to help customize the Site and improve your experience. When you visit our website, we use a single, essential cookie (`cookie_consent`) to remember your choice regarding our cookie policy. This cookie does not track you or collect any personal information. It is solely for remembering your consent and will not be used for any other purpose.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, and to request the deletion of your personal data. To make such a request, please contact us using the contact information provided below.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>C2 Drone Consult</strong><br />
            Accra, Ghana<br />
            <a href="mailto:info@c2drone.com">info@c2drone.com</a>
          </p>

        </div>
      </div>
    </main>
  );
}
