// vue.config.js
'use strict';

const srcRoot = process.env.PWD;
const pubRoot = process.env.PUBLIC_PATH || '/';

let pages = {};
let pageInfo = [
  {
    name: 'index'
  , title: 'TAPStats | Home'
  }
];

for (let page of pageInfo) {
  pages[page.name] = {
      entry: `${srcRoot}/src/pages/${page.name}/main.js`
    , template: `${srcRoot}/public/${page.name}.html`
    , filename: `${page.name}.html`
    , title: page.title
    , chunks: ['chunk-vendors', 'chunk-common', page.name]
  }
}

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // Deployment sub-path under the domain.
  // If using this, avoid using relative paths in the 'pages' object.
  publicPath: pubRoot
, pages: pages
}

console.log(module.exports.pages)
