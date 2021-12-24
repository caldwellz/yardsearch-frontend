<template>
    <button type="button" :class="`btn btn-${color} ${classes}`" :data-bs-target="target" :data-bs-toggle="toggle" :data-bs-dismiss="dismiss"><slot>Button</slot></button>
</template>

<script>
import 'bootstrap';

export default {
  name: 'BButton',
  props: {
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
