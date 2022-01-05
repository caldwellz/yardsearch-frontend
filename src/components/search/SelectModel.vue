<template>
  <FormSelect
    name="make"
    label="Make"
    :options="makeOptions"
    @input="onSelect"
  />
  <FormSelect
    name="model"
    label="Model"
    :options="modelOptions"
    @input="onSelect"
  />
  <HTTPClient
    url="/api/v1/active/vehicles/models"
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
  name: 'SelectModel',
  components: {
    FormSelect,
    HTTPClient
  },
  props: {
    baseURL: {
      type: String,
      default: ''
    },
    resetTrigger: {
      type: Number,
      default: 0
    },
    timeout: {
      type: Number,
      default: 0
    }
  },
  emits: ['loadFailed'],
  data () {
    return {
      apiData: {},
      options: {
        makes: [],
        models: []
      },
      selectedValues: {
        make: '',
        model: ''
      }
    };
  },
  computed: {
    makeOptions () {
      const makeOptions = [anyOpt];
      for (const make of this.options.makes) {
        makeOptions.push({ value: make });
      }
      return makeOptions;
    },
    modelOptions () {
      const modelOptions = [anyOpt];
      for (const model of this.options.models) {
        modelOptions.push({ value: model });
      }
      return modelOptions;
    }
  },
  watch: {
    resetTrigger: {
      immediate: false,
      handler () {
        this.resetValue('make');
        this.resetValue('model');
      }
    },
    'selectedValues.make': {
      immediate: false,
      handler (make) {
        // Only show models from the selected make
        if (make === '') {
          this.options.models = [];
          return;
        }
        const models = [];
        for (const model of this.apiData[make]) {
          models.push(model);
        }
        this.options.models = models.sort();
        this.resetValue('model');
      }
    }
  },
  methods: {
    onFetchComplete (event) {
      if (event.status >= 200 && event.status < 300) {
        this.apiData = event.data;
        const makes = [];
        for (const make in this.apiData) {
          makes.push(make);
        }
        this.options.makes = makes.sort();
      } else {
        this.$emit('loadFailed', event);
      }
    },
    onSelect (event) {
      this.selectedValues[event.target.name] = event.target.value;
    },
    resetValue (name) {
      // TODO: Find a Vue way to reset the actual selected value.
      // If not manually reset, it sticks on the same index when its options
      // are changed rather than resetting to '(any)'.
      document.getElementById(name).value = '';
      this.selectedValues[name] = '';
    }
  }
};
</script>

<style>

</style>
