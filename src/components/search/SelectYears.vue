<template>
  <FormSelect
    name="minYear"
    label="Min Year"
    :options="minYearOptions"
    @input="onSelect"
  />
  <FormSelect
    name="maxYear"
    label="Max Year"
    :options="maxYearOptions"
    @input="onSelect"
  />
  <HTTPClient
    url="/api/v1/active/vehicles/years"
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
  name: 'SelectYears',
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
      apiData: [],
      options: {
        minYear: [],
        maxYear: []
      },
      selectedValues: {
        minYear: '',
        maxYear: ''
      }
    };
  },
  computed: {
    minYearOptions () {
      const yearOptions = [anyOpt];
      for (const year of this.options.minYear) {
        yearOptions.push({ value: year });
      }
      return yearOptions;
    },
    maxYearOptions () {
      const yearOptions = [anyOpt];
      for (const year of this.options.maxYear) {
        yearOptions.push({ value: year });
      }
      return yearOptions;
    }
  },
  watch: {
    resetTrigger: {
      immediate: false,
      handler () {
        this.resetValue('minYear');
        this.resetValue('maxYear');
      }
    },
    'selectedValues.minYear': {
      immediate: false,
      handler (val) {
        // Only allow maxYear options >= the selected minYear
        const yearOptions = [];
        for (const year of this.apiData) {
          if (year >= val || val === '') {
            yearOptions.push(year);
          }
        }
        this.options.maxYear = yearOptions;
        this.resetValue('maxYear');
      }
    },
    'selectedValues.maxYear': {
      immediate: false,
      handler (val) {
        // Only allow minYear options <= the selected maxYear
        const yearOptions = [];
        for (const year of this.apiData) {
          if (year <= val || val === '') {
            yearOptions.push(year);
          }
        }
        this.options.minYear = yearOptions;
      }
    }
  },
  methods: {
    onFetchComplete (event) {
      if (event.status >= 200 && event.status < 300) {
        this.apiData = event.data.sort();
        this.options.minYear = this.apiData;
        this.options.maxYear = this.apiData;
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
