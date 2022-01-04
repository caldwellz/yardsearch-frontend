<template>
  <div v-show="!(this.isHidden)" :class="`alert alert-dismissible alert-${color} fade show ${classes}`" role="alert">
    <h4 v-if="heading.length" class="alert-heading">{{ heading }}</h4>
    <slot>{{ text }}</slot>
    <Button color="close" @click="hide" aria-label="Close" />
  </div>
</template>

<script>
import 'bootstrap';
import Button from './Button.vue'

export default {
  name: 'Alert',
  components: {
    Button
  },
  data() {
    return {
      isHidden: this.hidden
    }
  },
  props: {
    color: {
      type:String,
      default: 'warning'
    },
    classes: {
      type:String,
      default: ''
    },
    heading: {
      type:String,
      default: ''
    },
    text: {
      type:String,
      default: ''
    },
    hidden: {
      type:Boolean,
      default: true
    },
    timeout: {
      type:Number,
      default: 0
    }
  },
  created() {
    this.resetTimeout();
  },
  watch: {
    hidden(newVal) {
      this.isHidden = newVal;
      if (newVal === false)
        this.resetTimeout();
    },
    timeout() {
      this.resetTimeout();
    }
  },
  methods: {
    hide() {
      this.isHidden = true;
    },
    resetTimeout() {
      if (this.timeout > 0)
        setTimeout(this.hide, this.timeout);
    }
  }
}
</script>

<style scoped>

</style>
