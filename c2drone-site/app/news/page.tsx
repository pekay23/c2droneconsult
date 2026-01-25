"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaArrowRight } from "react-icons/fa";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  body: any;
}

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch ALL posts, sorted by newest
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-bold text-c2black mb-4">News & <span className="text-c2blue">Insights</span></h1>
            <p className="text-gray-500 text-lg max-w-2xl">
                Stay updated with the latest regulations, technology trends, and success stories from C2Drone Consult.
            </p>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.length === 0 ? (
                <p>Loading articles...</p>
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
                            
                            <h2 className="text-2xl font-bold text-c2black mb-4 group-hover:text-c2blue transition-colors">
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
