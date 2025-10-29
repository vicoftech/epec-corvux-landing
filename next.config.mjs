import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Alias @ -> root
    config.resolve.alias["@"] = path.resolve("./")
    return config
  },
}

export default nextConfig
