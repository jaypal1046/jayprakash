export default function sitemap() {
  const baseUrl = 'https://jayprakash.flutterjs.dev';
  const lastModified = '2026-10-12';

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#work`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#estimator`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
