<script setup lang="ts">
import { defineEmits, nextTick } from 'vue'
const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>()

const switchValue = defineModel<boolean>({
  default: false,
})

const toggle = () => {
  switchValue.value = !switchValue.value
  nextTick(() => {
    emit('change', switchValue.value)
  })
}
</script>

<template>
  <div class="px-2 py-1 h-full w-full flex justify-center items-center">
    <button
      @click="toggle"
      type="button"
      :class="[
        'relative inline-flex h-full w-full items-center rounded-full ',
        switchValue ? 'bg-white/10' : 'bg-gray-300',
      ]"
    >
      <span
        :class="[
          `absolute -translate-x-[calc(100%+1rem)] h-4 w-4 transform transition-all inline-flex justify-center items-center text-lg `,
          switchValue ? 'left-full scale-150' : 'left-12 scale-150 ',
        ]"
      >
        <span :class="[ switchValue ? 'animate-swingRotate' : 'animate-jellyScale']">
          {{ switchValue ? '🌙' : '☀️' }}
          <!-- 🔆☀️ -->
        </span>
      </span>
    </button>
  </div>
</template>
