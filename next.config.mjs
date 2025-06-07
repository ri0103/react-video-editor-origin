/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If the existing project uses svgs as components, add svgr support
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};
export default nextConfig;
