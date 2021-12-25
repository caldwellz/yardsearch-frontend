<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><slot name="title">{{ title }}</slot></h5>
          <BButton color="close" dismiss="modal" @click="$emit('cancel')" aria-label="Close" />
        </div>
        <div class="modal-body">
          <p><slot name="content">{{ content }}</slot></p>
        </div>
        <div class="modal-footer">
          <BButton color="secondary" dismiss="modal" @click="$emit('cancel')"><slot name="cancelLabel">{{ cancelLabel }}</slot></BButton>
          <BButton dismiss="modal" @click="$emit('confirm', this)"><slot name="confirmLabel">{{ confirmLabel }}</slot></BButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import BButton from './BButton.vue'

export default {
  name: 'BModal',
  components: {
    BButton
  },
  emits: ['confirm', 'cancel'],
  props: {
    id: {
      type:String,
      default: ''
    },
    title: {
      type:String,
      default: 'Please Confirm'
    },
    content: {
      type:String,
      default: 'Do you want to continue?'
    },
    cancelLabel: {
      type:String,
      default: 'Cancel'
    },
    confirmLabel: {
      type:String,
      default: 'Confirm'
    }
  }
}
</script>

<style scoped>

</style>
