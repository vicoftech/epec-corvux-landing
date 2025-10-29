const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname)
    return config
  },
}

module.exports = nextConfig