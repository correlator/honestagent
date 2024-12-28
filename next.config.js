/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/HonestAgent',
  basePath: '/HonestAgent',
}

module.exports = nextConfig

