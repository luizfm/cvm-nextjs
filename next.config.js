/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'api.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'imgv2-2-f.scribdassets.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
}

module.exports = nextConfig
