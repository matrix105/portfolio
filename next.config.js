/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-2.partnerportal.ionos.it',
      },
    ],
  },
};

module.exports = nextConfig;
