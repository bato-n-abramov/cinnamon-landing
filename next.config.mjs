/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    remotePatterns: [
     { hostname: process.env.IMAGE_HOSTNAME || 'localhost' }
    ],
  },
};

export default nextConfig;