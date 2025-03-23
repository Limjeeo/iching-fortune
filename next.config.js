/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/iching-fortune',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig 