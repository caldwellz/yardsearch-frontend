// Pages object generation for vue.config.js
'use strict';

const srcRoot = process.env.PWD;
const pageInfo = [
  {
    name: 'index'
  , title: 'YardSearch: Overview'
  , desc: 'Search for vehicles and see recent statistics about Utah automotive junkyards.'
  }
, {
    name: 'search'
  , title: 'YardSearch: Vehicle Search'
  , desc: 'Search for vehicles in Utah automotive junkyards.'
  }
, {
    name: 'stats'
  , title: 'YardSearch: Statistics'
  , desc: 'See recent vehicle statistics for Utah junkyards.'
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
    , pagename: page.name
    , chunks: ['chunk-vendors', 'chunk-common', page.name]
  }
}

module.exports = pages;
