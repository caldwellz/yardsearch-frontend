<template>
  <div
    :id="id"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title">
              {{ title }}
            </slot>
          </h5>
          <Button
            color="close"
            dismiss="modal"
            aria-label="Close"
            @click="$emit('cancel')"
          />
        </div>
        <div class="modal-body">
          <p>
            <slot name="content">
              {{ content }}
            </slot>
          </p>
        </div>
        <div class="modal-footer">
          <Button
            color="secondary"
            dismiss="modal"
            @click="$emit('cancel')"
          >
            <slot name="cancelLabel">
              {{ cancelLabel }}
            </slot>
          </Button>
          <Button
            dismiss="modal"
            @click="$emit('confirm', this)"
          >
            <slot name="confirmLabel">
              {{ confirmLabel }}
            </slot>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import Button from './Button.vue'

export default {
  name: 'Modal',
  components: {
    Button
  },
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
  },
  emits: ['confirm', 'cancel']
}
</script>

<style scoped>

</style>
