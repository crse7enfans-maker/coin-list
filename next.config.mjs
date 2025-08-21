/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.coingecko.com' },
      { protocol: 'https', hostname: 'www.coingecko.com' }
    ]
  },
  experimental: { typedRoutes: true }
};
export default nextConfig;
