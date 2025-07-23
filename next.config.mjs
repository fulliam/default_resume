/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  output: 'export',
  // assetPrefix: '/<repo-name>/',
  // basePath: '/<repo-name>',
}

export default nextConfig
