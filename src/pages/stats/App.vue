<template>
  <PageContainer page-title="Vehicle Statistics">
    <Alert
      :color="alertColor"
      :hidden="alertHidden"
      :text="alertText"
    />
    <Table :headers="tableHeaders">
      <TableAutoRow
        v-for="(row, index) in tableRows"
        :key="index"
        :base-u-r-l="apiBase"
        :base-path="row.basePath"
        :headers="row.headers"
        :sources="row.sources"
        :timeout="apiTimeout"
        @loadFailed="onLoadFailed"
      />
    </Table>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue';
import Alert from '@/components/Alert.vue';
import Table from '@/components/Table.vue';
import TableAutoRow from '@/components/TableAutoRow.vue';

export default {
  name: 'App',
  components: {
    PageContainer,
    Alert,
    Table,
    TableAutoRow
  },
  data() {
    return {
      alertColor: 'danger',
      alertHidden: true,
      alertText: 'There was an error retrieving vehicle data. Please try again later.',
      apiBase: '',
      apiTimeout: 5000,
      tableHeaders: [['Vehicles', 'Yesterday', 'Last Week', 'Last Month']],
      tableRows: [
        {
          headers: ['Added since...'],
          basePath: '/api/v1/stats/vehicles/added?since='
        },
        {
          headers: ['Removed since...'],
          basePath: '/api/v1/stats/vehicles/removed?since='
        },
        {
          headers: ['Available as of...'],
          basePath: '/api/v1/stats/vehicles/total?on='
        }
      ]
    }
  },
  created() {
    // Fill in the tableRows queries and fields
    const sources = [];
    const dayMillis = 86400 * 1000;
    const backDates = [
      dayMillis,     // Yesterday
      dayMillis * 7, // Last week
      dayMillis * 31 // Last month
    ];
    for (const d of backDates) {
      sources.push({
        query: new Date(Date.now() - d).toISOString(),
        field: 'count'
      });
    }
    for (const r of this.tableRows) {
      r.sources = sources;
    }
  },
  methods: {
    onLoadFailed(event) {
      console.error(event);
      this.alertHidden = false;
    }
  }
}
</script>

<style>

</style>
