/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Compat: versões antigas
      { source: "/catalogo/v1/:path*", destination: "/", permanent: true },
      { source: "/catalogo/v2/:path*", destination: "/", permanent: true },
      { source: "/catalogo/v3/:path*", destination: "/", permanent: true },

      // Compat: URLs antigas da V4 (quando estava dentro do site da Exo)
      { source: "/catalogo/v4", destination: "/", permanent: true },
      { source: "/catalogo/v4/catalogo", destination: "/catalogo", permanent: true },
      { source: "/catalogo/v4/catalogo/:path*", destination: "/catalogo/:path*", permanent: true },
      { source: "/catalogo/v4/produto/:id", destination: "/produto/:id", permanent: true },
      { source: "/catalogo/v4/produto/:path*", destination: "/produto/:path*", permanent: true },
    ];
  },
};

module.exports = nextConfig;
