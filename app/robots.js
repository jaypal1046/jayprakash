export default function robots() {
  const baseUrl = 'https://jayprakash-digital-services.jaypal1046.chatgpt.site';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
