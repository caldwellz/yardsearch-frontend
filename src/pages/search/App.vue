<template>
  <PageContainer page-title="Vehicle Search">
    <Alert
      :color="alertColor"
      :hidden="alertHidden"
      :text="alertText"
    />
    <Form
      :action="`${apiBase}/api/v1/active/vehicles/search`"
      method="get"
      enctype="application/json; charset=utf-8"
      @complete="onSearchComplete"
    >
      <SelectYears
        :base-u-r-l="apiBase"
        :reset-trigger="resetTrigger"
        :timeout="apiTimeout"
        @loadFailed="onLoadFailed"
      />
      <SelectModel
        :base-u-r-l="apiBase"
        :reset-trigger="resetTrigger"
        :timeout="apiTimeout"
        @loadFailed="onLoadFailed"
      />
      <SelectYard
        :base-u-r-l="apiBase"
        :timeout="apiTimeout"
        @loadFailed="onLoadFailed"
      />
      <FormSubmit
        classes="mx-2"
        :separate-row="false"
      >
        Search
      </FormSubmit>
      <Button
        classes="col-auto align-self-end mx-2"
        @click="resetForm"
      >
        Clear
      </Button>
    </Form>
    <br>
    <Table
      v-if="searchPerformed"
      :headers="resultHeaders"
      :rows="resultRows"
    />
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import Form from '@/components/Form.vue';
import FormSubmit from '@/components/FormSubmit.vue';
import SelectModel from '@/components/search/SelectModel.vue';
import SelectYard from '@/components/search/SelectYard.vue';
import SelectYears from '@/components/search/SelectYears.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'App',
  components: {
    PageContainer,
    Alert,
    Form,
    Button,
    FormSubmit,
    SelectModel,
    SelectYard,
    SelectYears,
    Table
  },
  data () {
    return {
      alertColor: 'danger',
      alertHidden: true,
      alertText: 'There was an error retrieving vehicle data. Please try again later.',
      apiBase: '',
      apiTimeout: 10000,
      resetTrigger: 0,
      resultHeaders: [['Year', 'Make', 'Model', 'Color', 'Row', 'Yard', 'Placed']],
      resultRows: [],
      searchPerformed: false,
      searchResults: {}
    };
  },
  watch: {
    searchResults: function (data) {
      // Convert the API results into table rows
      this.resultRows = [];
      for (const v of data.results) {
        const row = [
          v.year,
          v.make,
          v.model,
          v.color,
          v.row,
          v.yard,
          new Date(v.placed).toLocaleDateString()
        ];
        this.resultRows.push(row);
      }
    }
  },
  methods: {
    onLoadFailed (event) {
      console.error(event);
      this.alertHidden = false;
    },
    onSearchComplete (event) {
      if (event.status >= 200 && event.status < 300) {
        this.alertHidden = true;
        this.searchPerformed = true;
        this.searchResults = event.data;
      } else {
        console.error(event);
        this.alertHidden = false;
      }
    },
    resetForm (event) {
      event.target.parentElement.reset();
      ++this.resetTrigger;
    }
  }
};
</script>

<style>

</style>
