/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['axt.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
