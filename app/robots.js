export default function robots() {
  const baseUrl = 'https://jayprakash.flutterjs.dev';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
