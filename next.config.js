/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "https://www.google.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
