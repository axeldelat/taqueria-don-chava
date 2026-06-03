/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
