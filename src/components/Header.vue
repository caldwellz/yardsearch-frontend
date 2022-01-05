<template>
  <header :style="headerStyle">
    <h2 class="mt-2">
      <slot>{{ title }}</slot>
    </h2>
    <p class="lead mb-2">
      <slot name="tagline">
        {{ tagline }}
      </slot>
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type:String,
      default: 'Page Title'
    },
    tagline: {
      type:String,
      default: ''
    },
    textAlign:{
      type:String,
      default: 'center'
    }
  },
  computed: {
    headerStyle () {
      return 'text-align: ' + this.textAlign;
    }
  }
}
</script>

<style scoped>

</style>
