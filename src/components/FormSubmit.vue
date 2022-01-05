<template>
  <p
    v-if="separateRow"
    :class="`d-flex mb-0 col-12 ${justify}`"
  >
    <Button
      type="submit"
      :color="color"
      :classes="classes"
    >
      <slot>{{ label }}</slot>
    </Button>
  </p>
  <Button
    v-else
    type="submit"
    :color="color"
    :classes="`col-auto align-self-end ${classes}`"
  >
    <slot>{{ label }}</slot>
  </Button>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'FormSubmit',
  components: {
    Button
  },
  props: {
    classes: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Submit'
    },
    color: {
      type: String,
      default: 'primary'
    },
    separateRow: {
      type: Boolean,
      default: true
    },
    centered: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    justify: function () {
      if (this.centered) { return 'justify-content-center'; } else { return ''; }
    }
  }
};
</script>

<style scoped>

</style>
