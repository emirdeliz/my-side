/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_API_BASE: process.env.URL_API_BASE,
  },
  compiler: {
    styledComponents: true
  },
};

module.exports = nextConfig;
