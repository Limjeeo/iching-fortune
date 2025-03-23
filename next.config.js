/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/iching-fortune',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/iching-fortune/',
  distDir: 'out',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig 