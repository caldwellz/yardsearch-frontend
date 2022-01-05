<template>
  <div :class="`${colSize} mb-${marginBottom}`">
    <label
      v-if="label.length"
      class="form-label"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      :class="`form-control ${classes}`"
      :name="name"
      :placeholder="placeholder"
      :aria-label="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    size: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Text'
    },
    marginBottom: {
      type: String,
      default: '0'
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    colSize: function () {
      if (this.size.length) { return 'col-' + this.size; } else { return 'col'; }
    }
  }
};
</script>

<style scoped>

</style>
