<template>
  <tr>
    <th
      v-for="(col, colIndex) in headers"
      :key="colIndex"
    >
      {{ col }}
    </th>
    <td
      v-for="(src, index) in sources"
      :key="index"
    >
      {{ columns[index] }}
      <HTTPClient
        :url="`${basePath}${src.query}`"
        :base-u-r-l="baseURL"
        :timeout="timeout"
        @complete="(event) => onFetchComplete(event, index, src.field)"
      />
    </td>
  </tr>
</template>

<script>
import 'bootstrap';
import HTTPClient from '@/components/HTTPClient.vue';

export default {
  name: 'TableAutoRow',
  components: {
    HTTPClient
  },
  props: {
    baseURL: {
      type: String,
      default: ''
    },
    basePath: {
      type: String,
      default: ''
    },
    headers: {
      type:Array,
      default: () => []
    },
    sources: {
      type:Array,
      default: () => []
    },
    timeout: {
      type: Number,
      default: 0
    }
  },
  emits: ['loadFailed'],
  data() {
    return {
      columns: []
    }
  },
  methods: {
    onFetchComplete (event, index, field) {
      if (event.status >= 200 && event.status < 300) {
        if (field)
          this.columns[index] = event.data[field];
        else
          this.columns[index] = event.data;
      } else {
        this.$emit('loadFailed', event);
      }
    }
  }
}
</script>

<style scoped>

</style>
