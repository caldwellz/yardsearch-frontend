<template>
  <slot />
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'HTTPClient',
  props: {
    baseURL: {
      type: String,
      default: ''
    },
    contentType: {
      type: String,
      default: 'application/json; charset=utf-8'
    },
    data: {
      type: Object,
      default: function () {
        return {};
      }
    },
    immediate: {
      type: Boolean,
      default: true
    },
    method: {
      type: String,
      default: 'get'
    },
    params: {
      type: Object,
      default: function () {
        return {};
      }
    },
    timeout: {
      type: Number,
      default: 0
    },
    trigger: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: '#'
    }
  },
  emits: ['complete'],
  watch: {
    trigger () {
      this.sendRequest();
    }
  },
  mounted () {
    if (this.immediate) { this.sendRequest(); }
  },
  methods: {
    processRequestData (data) {
      if (this.method === 'get') { return ''; }
      if (this.contentType.indexOf('urlencoded') > 0) { return qs.stringify(data, {skipNulls: true}); }
      if (this.contentType.indexOf('json') > 0) { return JSON.stringify(data); }

      let failData = {status: 415, statusText: `Unsupported encoding type '${this.contentType}' on '${this.method}' request.`};
      this.$emit('complete', failData);
      return '';
    },
    async sendRequest () {
      try {
        let res = await axios({
          baseURL: this.baseURL,
          url: this.url,
          method: this.method,
          params: this.params,
          data: this.data,
          timeout: this.timeout,
          transformRequest: [this.processRequestData],
          headers: {
            'content-type': this.contentType
          },
          paramsSerializer: function (params) {
            return qs.stringify(params, {skipNulls: true});
          }
        });
        this.$emit('complete', res);
      } catch (error) {
        this.$emit('complete', error);
      }
    }
  }
};
</script>

<style scoped>

</style>
