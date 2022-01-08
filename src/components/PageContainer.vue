<template>
  <Navbar
    :title="siteTitle"
    :filename="filename"
    :links="pages"
    :color="color"
    :background-color="backgroundColor"
  />
  <Header :tagline="tagline">
    <slot name="pageTitle">
      {{ pageTitle }}
    </slot>
  </Header>
  <div
    id="app-content"
    class="container shadow border border-dark rounded p-2"
  >
    <slot />
  </div>
  <Footer
    copyright-items="Site design"
    copyright-addendum="vehicle stock information owned by its respective sources."
  />
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
  props: {
    siteTitle: {
      type:String,
      default: 'YardSearch'
    },
    pageTitle: {
      type:String,
      default: 'YardSearch'
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
  data() {
    return {
      filename: '',
      pages: [
        { title: 'Home', url: 'index.html' },
        { title: 'Search', url: 'search.html' },
        { title: 'Stats', url: 'stats.html' }
      ]
    }
  },
  created() {
    this.filename = document.body.dataset.filename;
  }
}
</script>

<style scoped>

</style>
