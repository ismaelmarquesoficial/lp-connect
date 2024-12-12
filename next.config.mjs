/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['your-domain.com'] // Se usar imagens externas
  }
};

export default nextConfig;