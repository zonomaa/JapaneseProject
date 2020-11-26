/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  target: 'serverless',
  exportTrailingSlash: process.env.NODE_ENV !== 'development',
  webpack: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, 'src'));
    return config;
  },
  env: {
    mode: process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
  },
};
