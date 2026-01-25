// REMOVED "use client" and related hooks
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import type { Metadata } from 'next';

// --- DYNAMIC METADATA (Works correctly in a Server Component) ---
export const metadata: Metadata = {
  title: "News & Insights | C2 Drone Consult",
  description: "Stay updated with the latest drone regulations, technology trends, and success stories from C2 Drone Consult in Ghana.",
};

// Interface for our Sanity data
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
}

// --- This is now an ASYNC SERVER COMPONENT ---
export default async function NewsPage() {
  
  // Data is fetched directly on the server before the page is sent to the client.
  const posts: Post[] = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }`);

  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-bold font-heading text-c2black mb-4">News & <span className="text-c2blue">Insights</span></h1>
            <p className="text-gray-500 text-lg max-w-2xl">
                Stay updated with the latest regulations, technology trends, and success stories from C2Drone Consult.
            </p>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.length === 0 ? (
                <p>No articles found.</p> // Updated message
            ) : (
                posts.map((post) => (
                    <article key={post._id} className="group flex flex-col h-full border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
                        {/* Image */}
                        <div className="h-64 w-full relative overflow-hidden">
                            {post.mainImage ? (
                                <Image 
                                    src={urlFor(post.mainImage).width(600).url()} 
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                            )}
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 flex flex-col grow">
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                <FaCalendar />
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </div>
                            
                            <h2 className="text-2xl font-bold font-heading text-c2black mb-4 group-hover:text-c2blue transition-colors">
                                {post.title}
                            </h2>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <Link href={`/news/${post.slug.current}`} className="text-c2blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Read Article <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))
            )}
        </div>

      </div>
    </main>
  );
}
