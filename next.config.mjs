/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.externals.push('canvas', 'jsdom');
    return config;
  },
}

export default nextConfig
