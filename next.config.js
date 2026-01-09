/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Transpile Intlayer packages
  transpilePackages: [
    'intlayer',
    'next-intlayer',
    'react-intlayer',
    '@intlayer/core',
    '@intlayer/config',
    '@intlayer/dictionaries-entry',
    '@intlayer/editor-react',
    '@intlayer/webpack',
  ],

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // Add your image domains here
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Exclude .d.ts files
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'ignore-loader',
    });

    // Fallback for Node.js modules in client bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
