import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, // ✅ оставляем, как у тебя было
  },

  // ✅ добавляем turbopack-раздел (официально поддерживается с Next 16)
  turbopack: {
    resolveAlias: {
      "@": "./", // ✅ теперь алиасы работают и внутри Turbopack
    },
  },
};

export default nextConfig;
