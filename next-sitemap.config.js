/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://vantastudio.ro",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [],
  additionalPaths: async () => {
    return [
      { loc: "/", changefreq: "weekly", priority: 1.0 },
      { loc: "/servicii", changefreq: "weekly", priority: 0.9 },
      { loc: "/branding", changefreq: "weekly", priority: 0.8 },
      { loc: "/graphic-design", changefreq: "weekly", priority: 0.8 },
      { loc: "/web-design", changefreq: "weekly", priority: 0.8 },
      { loc: "/motion-video", changefreq: "weekly", priority: 0.8 },
      { loc: "/proiecte", changefreq: "monthly", priority: 0.7 },
      { loc: "/despre", changefreq: "monthly", priority: 0.7 },
      { loc: "/contact", changefreq: "monthly", priority: 0.7 },
      { loc: "/blog", changefreq: "weekly", priority: 0.6 },
    ];
  },
};

export default config;