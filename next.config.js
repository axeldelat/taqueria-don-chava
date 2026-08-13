/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 256],
    // Next 16 rejects any quality not listed here and silently falls back to 75
    qualities: [75, 85],
  },
}

module.exports = nextConfig
