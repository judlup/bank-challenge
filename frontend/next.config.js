/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_PORT: process.env.API_PORT,
  },
}

module.exports = nextConfig
