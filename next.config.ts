import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.2"],
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
