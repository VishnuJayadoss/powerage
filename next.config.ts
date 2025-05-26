import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['saddlebrown-tapir-823678.hostingersite.com']
  }
}

export const config = {
  matcher: ['/cart/:path*', '/profile/:path*']
}

export default nextConfig
