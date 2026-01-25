import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

// This helper function creates a short text excerpt for meta descriptions
function toPlainText(blocks: any[] = []) {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n')
    .substring(0, 155) + '...'; // Limit to 155 characters
}

// --- 1. DYNAMIC METADATA FUNCTION ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage
  }`, { slug });

  if (!post) {
    return { title: "Not Found", description: "This page does not exist." };
  }

  const description = toPlainText(post.body);
  const ogImageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).url() : '/default-og-image.jpg'; // Make sure you have a default image in /public

  return {
    title: `${post.title} | C2 Drone Consult`,
    description: description,
    openGraph: {
      title: `${post.title} | C2 Drone Consult`,
      description: description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// --- 2. SERVER COMPONENT TO FETCH DATA ---
export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    publishedAt,
    body
  }`, { slug });

  if (!post) {
    return <div className="pt-40 text-center">Article not found.</div>;
  }

  return (
    <main className="bg-c2white min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/news" className="text-gray-400 hover:text-c2blue text-sm mb-8 inline-block">
            ← Back to News
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-c2black mb-6 leading-tight">
            {post.title}
        </h1>
        <p className="text-gray-500 mb-10 border-l-4 border-c2blue pl-4">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.mainImage && (
            <div className="w-full h-400px relative rounded-2xl overflow-hidden mb-12 shadow-lg">
                <Image 
                    src={urlFor(post.mainImage).width(1200).url()} 
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>
        )}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
            <PortableText value={post.body} />
        </div>
      </article>
    </main>
  );
}
