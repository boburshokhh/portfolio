/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingExcludes: {
    '*': [
      'node_modules/**/*.js',
      '.next/cache/**/*',
    ],
  },
}

module.exports = nextConfig 