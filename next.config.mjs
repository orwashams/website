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
        hostname: "k9x3ychkn3.ufs.sh",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
        port: "",
        search: "?c=1idpaZznFLrbi-vA0Q1",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "*/**",
      },
    ],
  },
};
export default nextConfig;
