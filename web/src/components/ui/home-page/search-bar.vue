<script lang="ts" setup>
import { SearchIcon, LoadingIcon } from '@/components/icons'
import { trailingDebounce } from '@/utils'
import { nextTick, onMounted, ref, toRef, watch, watchEffect } from 'vue'

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const props = defineProps<{
  placeholder?: string
  loading?: boolean
  disabled?: boolean
}>()

const input = ref()
const inputRef = ref()
const inputModel = defineModel()

const handleChange = trailingDebounce(() => {
  inputModel.value = input.value
  emit('change', input.value)
}, 500)

// 非disable 时 自动聚焦
// watch(
//   () => props.disabled,
//   () => {
//     // console.log('trigger')
//     nextTick(() => {
//       props.disabled === false && inputRef.value.focus()
//     })
//   },
// )
</script>
<template>
  <div class="relative flex flex-1 flex-shrink-0">
    <label htmlFor="search" class="sr-only">Search</label>
    <input
      ref="inputRef"
      autofocus
      :disabled="disabled"
      @input="(e) => handleChange(e)"
      v-model="input"
      class="peer disabled:bg-foreground-secondary/10 bg-background-secondary block w-full rounded-md border border-border py-[9px] pl-10 text-sm outline-2 placeholder:text-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
      :placeholder="placeholder"
    />
    <span
      class="absolute inline-block left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-border peer-focus:text-foreground-secondary transition"
    >
      <LoadingIcon class="text-xl animate-spin" v-if="loading" />
      <SearchIcon class="text-xl" v-else />
    </span>
  </div>
</template>
