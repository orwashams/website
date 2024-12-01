/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/k9x3ychkn3/**",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
        port: "",
        search: "?c=1idpaZznFLrbi-vA0Q1",
      },
    ],
  },
};

export default nextConfig;
