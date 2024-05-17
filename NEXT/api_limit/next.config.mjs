/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cloudflare-ipfs.com"], // Add the domain here
  },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
