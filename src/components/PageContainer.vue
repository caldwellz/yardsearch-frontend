<template>
  <BNavbar :title="siteTitle" :filename="filename" :links="pages" :color="color" :backgroundColor="backgroundColor" />
  <div class="container mt-2 shadow border border-dark rounded">
    <Header :tagline="tagline"><slot name="pageTitle">{{ pageTitle }}</slot></Header>
    <div class="app-content p-2">
      <slot></slot>
    </div>
  </div>
  <Footer copyrightItems="Site design" copyrightAddendum="vehicle stock information owned by its respective sources." />
</template>

<script>
import BNavbar from './bootstrap/BNavbar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'PageContainer',
  components: {
    BNavbar,
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
