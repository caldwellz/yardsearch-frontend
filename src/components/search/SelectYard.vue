<template>
  <FormSelect
    name="yard"
    label="Yard"
    :options="yardOptions"
  />
  <HTTPClient
    url="/api/v1/active/vehicles/yards"
    :base-u-r-l="baseURL"
    :timeout="timeout"
    @complete="onFetchComplete"
  />
</template>

<script>
import anyOpt from './anyOption.js';
import FormSelect from '@/components/FormSelect.vue';
import HTTPClient from '@/components/HTTPClient.vue';

export default {
  name: 'SelectYard',
  components: {
    FormSelect,
    HTTPClient
  },
  props: {
    baseURL: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 0
    }
  },
  emits: ['loadFailed'],
  data () {
    return {
      options: []
    };
  },
  computed: {
    yardOptions () {
      const yardOptions = [anyOpt];
      for (const yard of this.options) {
        yardOptions.push({ value: yard });
      }
      return yardOptions;
    }
  },
  methods: {
    onFetchComplete (event) {
      if (event.status >= 200 && event.status < 300) {
        this.options = event.data.sort();
      } else {
        this.$emit('loadFailed', event);
      }
    }
  }
};
</script>

<style>

</style>
