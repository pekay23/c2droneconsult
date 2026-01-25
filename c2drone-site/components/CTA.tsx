import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-c2blue text-white">
      <div className="max-w-4xl mx-auto py-20 px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Ready to Fly?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Let's navigate the complexities of drone regulation together. Contact us today for a personalized consultation and take the first step towards compliant and efficient operations.
        </p>
        <Link 
          href="/contact"
          className="bg-white text-c2blue font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-colors shadow-2xl"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
