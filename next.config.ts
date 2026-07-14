import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Taiki-Takamatsu.png",
      },
    ],
  },
};

export default nextConfig;
