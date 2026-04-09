import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.2"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  // Aktivera gzip/brotli-komprimering och minimal JS
  compress: true,
};

export default nextConfig;
