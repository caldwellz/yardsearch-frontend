<template>
  <div class="table-responsive p-1">
    <table
      ref="datatable"
      :class="`table table-striped ${classes}`"
    >
      <thead>
        <tr
          v-for="(row, rowIndex) in headers"
          :key="rowIndex"
        >
          <th
            v-for="(col, colIndex) in row"
            :key="colIndex"
          >
            {{ col }}
          </th>
        </tr>
        <slot name="head" />
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
        >
          <th
            v-for="(col, colIndex) in row"
            :key="colIndex"
          >
            {{ col }}
          </th>
        </tr>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script>
import 'bootstrap';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';

export default {
  name: 'Table',
  props: {
    classes: {
      type:String,
      default: ''
    },
    headers: {
      type:Array,
      default: () => []
    },
    rows: {
      type:Array,
      default: () => []
    }
  },
  data: () => {
    return {
      dataTable: {}
    }
  },
  mounted() {
    this.dataTable = new DataTable(this.$refs.datatable);
  },
  updated() {
    this.dataTable = new DataTable(this.$refs.datatable);
  }
}
</script>

<style scoped>

</style>
