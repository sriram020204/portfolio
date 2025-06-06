
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export
  basePath: '/YOUR_REPOSITORY_NAME_HERE', // IMPORTANT: Replace YOUR_REPOSITORY_NAME_HERE with your actual GitHub repository name
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true, // Ensure all paths end with a trailing slash (e.g., /about/ instead of /about)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
