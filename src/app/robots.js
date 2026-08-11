export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://github.com/Ganesh5710/sitemap.xml',
  }
}
