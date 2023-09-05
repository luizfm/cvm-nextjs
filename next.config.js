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
        hostname: 'images.pexels.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api-cvm.luizfm.com/:path*',
        destination: 'http://api-cvm.luizfm.com/$1',
      },
      {
        source: '/backoffice/posts/api-cvm.luizfm.com/:path*',
        destination: 'http://api-cvm.luizfm.com/$1',
      },
    ]
  },
}

module.exports = nextConfig
