/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'axt.s3.amazonaws.com',
        pathname: '/donchava/**',
      },
    ],
  },
}

module.exports = nextConfig
