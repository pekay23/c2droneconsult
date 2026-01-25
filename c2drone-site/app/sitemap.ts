import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://c2droneconsult.netlify.app/'; // <-- REPLACE with your actual domain

  // 1. Get all news article slugs from Sanity
  const posts: { slug: { current: string }, _updatedAt: string }[] = await client.fetch(`
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const postUrls = posts.map(post => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    priority: 0.8,
  }));

  // 2. Define your static pages
  const staticRoutes = [
    '', // Homepage
    '/about',
    '/services',
    '/contact',
    '/news'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    priority: route === '' ? 1.0 : 0.9,
  }));

  // 3. Combine them all
  return [...staticRoutes, ...postUrls];
}
