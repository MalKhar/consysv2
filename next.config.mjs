/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.co",
        port: "",
        pathname: "/**", // Allow all images from placeholder.co
      },
    ],
  },
};

export default nextConfig;
