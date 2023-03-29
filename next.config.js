/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'maymont.org', 'news.clas.ufl.edu', 'www.lifeinnorway.net'],
  },
}

module.exports = nextConfig
