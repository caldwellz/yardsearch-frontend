<template>
  <Navbar :title="siteTitle" :filename="filename" :links="pages" :color="color" :backgroundColor="backgroundColor" />
  <Header :tagline="tagline"><slot name="pageTitle">{{ pageTitle }}</slot></Header>
  <div id="app-content" class="container shadow border border-dark rounded p-2">
    <slot></slot>
  </div>
  <Footer copyrightItems="Site design" copyrightYears="2020-2021" copyrightAddendum="vehicle stock information owned by its respective sources." />
</template>

<script>
import Navbar from './Navbar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'PageContainer',
  components: {
    Navbar,
    Header,
    Footer
  },
  data() {
    return {
      filename: '',
      pages: [
        { title: 'Home', url: 'index.html' },
        { title: 'Stats', url: 'stats.html' },
        { title: 'Vehicle Search', url: 'search.html' },
      ]
    }
  },
  props: {
    siteTitle: {
      type:String,
      default: 'YardStats'
    },
    pageTitle: {
      type:String,
      default: 'YardStats'
    },
    tagline: {
      type:String,
      default: ''
    },
    color: {
      type:String,
      default: 'dark'
    },
    backgroundColor: {
      type:String,
      default: 'primary'
    }
  },
  created() {
    this.filename = document.body.dataset.filename;
  }
}
</script>

<style scoped>

</style>
