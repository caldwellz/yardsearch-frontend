<template>
  <PageContainer pageTitle="Component Examples &amp; Boilerplate">
    <BAlert heading="Alert Heading" :text="alertText" :hidden="alertHidden" :timeout="5000"></BAlert>
    <p>App content goes here.</p>
    <BModal content="Content Override - Prop" title="Prop Title" @confirm="onModalConfirm">
      <template v-slot:content>Content Override - Slot</template>
      <template v-slot:title>Slot Title</template>
    </BModal>
    <BButton target=".modal" toggle="modal">Open Modal</BButton>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import BAlert from '@/components/bootstrap/BAlert.vue'
import BButton from '@/components/bootstrap/BButton.vue'
import BModal from '@/components/bootstrap/BModal.vue'

export default {
  name: 'App',
  components: {
    PageContainer,
    BAlert,
    BButton,
    BModal
  },
  data() {
    return {
      alertText: '',
      alertHidden: true
    }
  },
  created() {
    console.log('Component created.');
    this.alertText = 'Custom alert text';
    this.alertHidden = false;
  },
  methods: {
    onModalConfirm(emittedData) {
      console.log('Modal confirmed.');
      console.log(emittedData);
    }
  }
}
</script>

<style>

</style>
