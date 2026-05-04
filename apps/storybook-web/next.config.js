/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@mariner/components',
    '@mariner/theme',
    '@mariner/icons',
    '@mariner/fonts',
    '@mariner/tailwind-config',
  ],
};

module.exports = nextConfig;
