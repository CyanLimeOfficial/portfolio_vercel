/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // This is required to allow optimization of SVG images from external domains.
    dangerouslyAllowSVG: true,
    // This configures Next.js to properly handle the content type for SVGs.
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // This whitelist the specific domain you are using for placeholder images.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
