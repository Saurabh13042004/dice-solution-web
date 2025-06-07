/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    // Disabling during builds allows the build to succeed despite ESLint warnings
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;