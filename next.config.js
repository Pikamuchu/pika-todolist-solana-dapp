/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

console.log(`Using env config ${process.env.NODE_ENV}`);

module.exports = withPWA({
  reactStrictMode: true,
  distDir: '.next',
  pwa: {
    dest: 'public',
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'inline-source-map';
    }
    return config;
  }
});
