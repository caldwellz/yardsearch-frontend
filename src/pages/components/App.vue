<template>
  <PageContainer pageTitle="Component Examples &amp; Boilerplate">
    <Alert heading="Alert Heading" :text="alertText" :hidden="alertHidden" :timeout="5000"></Alert>
    <p>App content goes here.</p>
    <Modal content="Content Override - Prop" title="Prop Title" @confirm="onModalConfirm">
      <template v-slot:content>Content Override - Slot</template>
      <template v-slot:title>Slot Title</template>
    </Modal>
    <Button target=".modal" toggle="modal">Open Modal</Button>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import Alert from '@/components/Alert.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    PageContainer,
    Alert,
    Button,
    Modal
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
