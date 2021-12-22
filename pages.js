// Pages object generation for vue.config.js
'use strict';

const srcRoot = process.env.PWD;
const pageInfo = [
  {
    name: 'index'
  , title: 'YardStats | Home'
  , desc: 'Main page of YardStats.'
  }
];

let pages = {};
for (let page of pageInfo) {
  pages[page.name] = {
      entry: `${srcRoot}/src/pages/${page.name}/main.js`
    , template: `${srcRoot}/src/page_template.html`
    , filename: `${page.name}.html`
    , title: page.title
    , desc: page.desc
    , chunks: ['chunk-vendors', 'chunk-common', page.name]
  }
}

module.exports = pages;
