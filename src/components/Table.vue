<template>
  <div class="table-responsive">
    <table :class="`table table-striped ${classes}`">
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
  }
}
</script>

<style scoped>

</style>
