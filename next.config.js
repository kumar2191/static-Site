/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('next/constants')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => null
}

const nextConfig = (phase) => {
  // npm run dev or next dev
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  // npm run build or next build
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

  // npm run build or next build
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  return {
    reactStrictMode: true,
    distDir: 'build',
    images: {
      domains: [
        'www.w3schools.com',
        'www.tvs-e.in',
      ],
      minimumCacheTTL: 60,
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // sassOptions: {
    //   includePaths: [path.join(__dirname, '/styles')],
    // },
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: [
      'www.w3schools.com',
      'www.facebook.com',
      
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // sassOptions: {
  //   includePaths: [path.join(__dirname, '/styles')],
  // },
})

// module.exports = nextConfig
