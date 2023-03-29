/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
  },
  images: {
    domains: ['picsum.photos', 'maymont.org', 'news.clas.ufl.edu', 'www.lifeinnorway.net'],
  },
}

module.exports = nextConfig
