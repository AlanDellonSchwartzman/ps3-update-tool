/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
]);
  
module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
   webpack: (config) => {
     config.resolve.alias = {
       ...config.resolve.alias,
    '@mui/styled-engine': '@mui/styled-engine-sc',
      };
      return config;
    }
});