/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_API_BASE: process.env.URL_API_BASE,
  },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
