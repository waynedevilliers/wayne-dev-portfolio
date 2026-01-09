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
  webpack: (config, { isServer, webpack }) => {
    // Exclude .d.ts files
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'ignore-loader',
    });

    // Use NormalModuleReplacementPlugin to handle node: protocol imports
    const nodeModules = [
      'node:fs',
      'node:fs/promises',
      'node:path',
      'node:module',
      'node:crypto',
      'node:url',
      'node:process',
      'node:buffer',
      'node:stream',
      'node:util',
      'node:os',
      'node:child_process',
      'node:vm',
      'node:v8',
      'node:zlib',
      'node:events',
      'node:assert',
      'node:string_decoder',
    ];

    nodeModules.forEach((nodeModule) => {
      const moduleName = nodeModule.replace('node:', '');
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          new RegExp(`^${nodeModule}$`),
          (resource) => {
            resource.request = moduleName;
          }
        )
      );
    });

    // Fallback for Node.js modules in client bundle
    if (!isServer) {
      const path = require('path');

      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        'fs/promises': false,
        child_process: false,
        net: false,
        tls: false,
        crypto: false,
        path: false,
        os: false,
        util: false,
        v8: false,
        vm: false,
        zlib: false,
        events: false,
        assert: false,
        string_decoder: false,
        esbuild: false, // Prevent esbuild from being bundled in browser
      };

      // Provide polyfill for 'module' package
      config.resolve.alias = {
        ...config.resolve.alias,
        module: path.resolve(__dirname, 'polyfills/module.js'),
      };
    } else {
      // Mark esbuild as external for server-side to prevent bundling
      config.externals = config.externals || [];
      config.externals.push('esbuild');
    }

    return config;
  },
};

module.exports = nextConfig;
