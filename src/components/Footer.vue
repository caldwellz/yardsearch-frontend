<template>
  <footer
    class="mt-2 py-2 bg-dark bg-gradient text-light"
    :style="footerStyle"
  >
    <p class="m-0">
      <slot />
    </p>
    {{ copyrightItems.length ? copyrightItems + ' copyright' : 'Copyright' }} &#169; {{ copyrightYears }}
    <a
      v-if="copyrightAuthorLink && copyrightAuthorLink.length"
      class="link-light"
      :href="copyrightAuthorLink"
    >
      {{ copyrightAddendum.length ? copyrightAuthor + ';' : copyrightAuthor }}
    </a>
    <span v-else>
      {{ copyrightAddendum.length ? copyrightAuthor + ';' : copyrightAuthor }}
    </span>
    {{ copyrightAddendum }}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    copyrightItems: {
      type:String,
      default: ''
    },
    copyrightYears: {
      type:String,
      default: String(new Date().getFullYear())
    },
    copyrightAuthor: {
      type:String,
      default: 'Ensign Technical Solutions, LLC'
    },
    copyrightAuthorLink: {
      type:String,
      default: ''
    },
    copyrightAddendum: {
      type:String,
      default: ''
    },
    textAlign:{
      type:String,
      default: 'center'
    }
  },
  computed: {
    footerStyle () {
      return 'text-align: ' + this.textAlign;
    }
  }
}
</script>

<style scoped>
footer {
  font-size: 0.75rem;
}
</style>
