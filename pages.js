// Pages object generation for vue.config.js
'use strict';

const srcRoot = process.env.PWD;
const pageInfo = [
  {
    name: 'index'
  , title: 'Statistics & Search Overview | YardStats'
  , desc: 'See recent yard statistics and search for vehicles in Utah junkyards.'
  }
, {
    name: 'search'
  , title: 'Vehicle Search | YardStats'
  , desc: 'Search for vehicles in Utah junkyards.'
  }
, {
    name: 'stats'
  , title: 'Vehicle Statistics | YardStats'
  , desc: 'See recent vehicle statistics for Utah junkyards.'
  }
, {
    name: 'components'
  , title: 'Vue Component Examples | YardStats'
  , desc: 'Examples and copyable boilerplate for Vue components.'
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
