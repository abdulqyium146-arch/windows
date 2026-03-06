import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://mandswindows.co.uk/sitemap.xml',
    host: 'https://mandswindows.co.uk',
  };
}
