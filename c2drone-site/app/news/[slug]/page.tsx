"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; // To get the slug from URL

export default function SinglePostPage() {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      // Query for 1 specific post based on slug
      const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        mainImage,
        publishedAt,
        body
      }`;
      const data = await client.fetch(query, { slug });
      setPost(data);
    };
    fetchPost();
  }, [slug]);

  if (!post) return <div className="pt-40 text-center">Loading article...</div>;

  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <Link href="/news" className="text-gray-400 hover:text-c2blue text-sm mb-8 inline-block">
            ← Back to News
        </Link>

        {/* Title & Date */}
        <h1 className="text-4xl md:text-5xl font-bold text-c2black mb-6 leading-tight">
            {post.title}
        </h1>
        <p className="text-gray-500 mb-10 border-l-4 border-c2blue pl-4">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        {/* Main Image */}
        {post.mainImage && (
            <div className="w-full h-400] relative rounded-2xl overflow-hidden mb-12 shadow-lg">
                <Image 
                    src={urlFor(post.mainImage).width(1200).url()} 
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>
        )}

        {/* Rich Text Body (The actual content) */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
            <PortableText value={post.body} />
        </div>

      </article>
    </main>
  );
}
