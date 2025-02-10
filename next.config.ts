import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  transpilePackages: ['three'],
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
  },
};

export default nextConfig;
