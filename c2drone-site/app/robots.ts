import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://c2droneconsult.com'; // Replace with your actual domain when you buy one

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Don't let Google index your CMS login page
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
