/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://khaing-hsu-thwe.vercel.app", // Replace with your Vercel domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/private/*"], // Exclude private routes if any
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};