<template>
  <form
    ref="formElem"
    action="#"
    :class="`row gx-${gutterX} gy-${gutterY} ${classes}`"
    @submit.prevent="sendRequest"
  >
    <slot />
    <HTTPClient
      :url="action"
      :immediate="false"
      :content-type="enctype"
      :data="clientData"
      :method="method"
      :params="clientParams"
      :trigger="clientTrigger"
      :timeout="10000"
      @complete="onRequestComplete"
    />
  </form>
</template>

<script>
import HTTPClient from './HTTPClient.vue';

export default {
  name: 'Form',
  components: {
    HTTPClient
  },
  props: {
    action: {
      type: String,
      default: '#'
    },
    method: {
      type: String,
      default: 'post'
    },
    enctype: {
      type: String,
      default: 'application/x-www-form-urlencoded; charset=utf-8'
    },
    classes: {
      type: String,
      default: ''
    },
    gutterX: {
      type: String,
      default: '3'
    },
    gutterY: {
      type: String,
      default: '3'
    }
  },
  emits: ['complete'],
  data () {
    return {
      clientParams: {},
      clientData: {},
      clientTrigger: 0
    };
  },
  methods: {
    sendRequest (event) {
      // Extract only the elements (form items) that have names. This excludes buttons, etc.
      const elemList = event.target.elements;
      let formData = {};
      for (let n = 0; n < elemList.length; ++n) {
        const elem = elemList[n];
        if (elem.name) {
          formData[elem.name] = elem.value;
        }
      }

      // Conventionally, GET requests should have their params in the URI, and nothing in the body.
      // See: https://stackoverflow.com/questions/978061/http-get-with-request-body
      if (this.method === 'get') {
        this.clientParams = formData;
        this.clientData = {};
      } else {
        this.clientParams = {};
        this.clientData = formData;
      }

      // This triggers the sending of the actual HTTP request.
      // HTTPClient then sends back a status event which is re-emitted in the method below.
      this.clientTrigger++;
    },
    onRequestComplete (eventData) {
      if (eventData.status >= 200 && eventData.status < 300) {
        this.$refs.formElem.reset();
      }
      this.$emit('complete', eventData);
    }
  }
};
</script>

<style scoped>

</style>
