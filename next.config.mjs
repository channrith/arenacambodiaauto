/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.arenacambodiaauto.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
