/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // 実験的な機能
    appDir: true,
  },
}

module.exports = nextConfig
