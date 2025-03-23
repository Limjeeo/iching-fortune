/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/iching-fortune',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/iching-fortune/',
}

module.exports = nextConfig 