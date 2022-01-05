<template>
  <button
    :type="type"
    :class="`btn btn-${color} ${classes}`"
    :data-bs-target="target"
    :data-bs-toggle="toggle"
    :data-bs-dismiss="dismiss"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
import 'bootstrap';

export default {
  name: 'Button',
  props: {
    type: {
      type:String,
      default: 'button'
    },
    color: {
      type:String,
      default: 'primary'
    },
    classes: {
      type:String,
      default: ''
    },
    target: {
      type:String,
      default: ''
    },
    text: {
      type:String,
      default: ''
    },
    toggle: {
      type:String,
      default: ''
    },
    dismiss: {
      type:String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
