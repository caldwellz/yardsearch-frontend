<template>
  <BModal content="Content Override - Prop" title="Prop Title" @confirm="onModalConfirm">
    <template v-slot:content>Content Override - Slot</template>
    <template v-slot:title>Slot Title</template>
  </BModal>
  <BButton target=".modal" toggle="modal">Open Modal</BButton>
</template>

<script>
import BButton from '@/components/bootstrap/BButton.vue'
import BModal from '@/components/bootstrap/BModal.vue'

export default {
  name: 'App',
  components: {
    BButton,
    BModal
  },
  data() {
    return {

    }
  },
  created() {
    console.log('Component created.');
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
