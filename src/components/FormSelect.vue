<template>
  <div :class="`${colSize} mb-${marginBottom}`">
    <label
      v-if="label.length"
      class="form-label"
      :for="name"
    >
      {{ label }}
    </label>
    <select
      :id="name"
      :class="`form-select ${classes}`"
      :name="name"
      :multiple="multiple"
    >
      <option
        v-for="(opt, index) in options"
        :key="index"
        :value="opt.value"
        :selected="opt.selected"
        :disabled="opt.disabled"
      >
        {{ opt.label ? opt.label : opt.value }}
      </option>
    </select>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    size: {
      type: String,
      default: 'auto'
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    marginBottom: {
      type: String,
      default: '0'
    },
    options: {
      type: Array,
      required: true
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
