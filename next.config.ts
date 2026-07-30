import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const isPreview = process.env.VERCEL_ENV === "preview";
const toolbarScript = isPreview ? " https://vercel.live" : "";
const toolbarConnect = isPreview ? " https://vercel.live wss://ws-us3.pusher.com" : "";
const toolbarImages = isPreview ? " https://vercel.live https://vercel.com" : "";
const toolbarFonts = isPreview ? " https://vercel.live https://assets.vercel.com" : "";

// Content Security Policy
// - 'unsafe-inline' för script krävs av Next.js hydration + JSON-LD
// - 'unsafe-eval' endast i dev (krävs av React Fast Refresh)
// - Vercel Analytics laddas från samma origin (/_vercel/insights)
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com${toolbarScript}`,
  `style-src 'self' 'unsafe-inline'${toolbarScript}`,
  `img-src 'self' data: blob:${toolbarImages}`,
  `font-src 'self' data:${toolbarFonts}`,
  "media-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""} https://va.vercel-scripts.com https://vitals.vercel-insights.com${toolbarConnect}`,
  ...(isPreview ? ["frame-src https://vercel.live"] : []),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.2"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  // Aktivera gzip/brotli-komprimering och minimal JS
  compress: true,
  // Dölj Next.js-version i response headers
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Cacha statiska mediafiler länge
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
