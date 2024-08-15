<script lang="ts" setup>
import { ref } from 'vue'
import PopDialog from '../pop-dialog.vue'
import AvatarPicker from '@/components/avatar-picker.vue'
import Button from '../Button.vue'
defineProps<{
  disabled?: boolean
}>()
const showModal = ref(false)
const selectedAvatar = defineModel()
const handleConfirm = () => {
  showModal.value = false
}
const handleClose = () => {
  showModal.value = false
    selectedAvatar.value = ""
}
</script>

<template>
  <PopDialog
    title="Choose Avatar"
    v-model="showModal"
    @confirm="handleConfirm"
    @close="handleClose"
    class="w-5/6 sm:w-1/2 max-w-[600px]"
  >
    <template #trigger>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-medium">Avatar</label>
        <Button :disabled="disabled" class="disabled:bg-foreground-secondary/10 bg-transparent border border-border hover:!bg-foreground-secondary/10 !text-5xl h-16 w-16" @click="showModal = true">{{ selectedAvatar }}</Button>
      </div>
    </template>
    <template #content>
      <AvatarPicker v-model="selectedAvatar" />
    </template>
  </PopDialog>
</template>
