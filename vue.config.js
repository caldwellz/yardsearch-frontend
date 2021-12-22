// vue.config.js
'use strict';
const pages = require('./pages.js');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // Deployment sub-path under the domain.
  // If using this, avoid using relative paths in the 'pages' object.
  publicPath: process.env.PUBLIC_PATH || '/'
, pages: pages
}
