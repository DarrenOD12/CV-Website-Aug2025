/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export for GitHub Pages
  output: 'export',
  
  // Set to your actual repository name
  basePath: '/CV-Website-Aug2025',
  assetPrefix: '/CV-Website-Aug2025/',
  
  // Important for SPA routing on GitHub Pages
  trailingSlash: true,
  
  // Your existing image configuration
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true, // Required for static export
  },
  
  // Remove swcMinify as it's now deprecated or auto-enabled
  // swcMinify: true,
  
  // Your existing experimental features
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
