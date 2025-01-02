/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Allow Sanity's CDN as a source
  },
};
module.exports = {
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;