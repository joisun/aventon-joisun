<script lang="ts" setup>
import { SearchIcon, LoadingIcon } from '@/components/icons'
import { trailingDebounce } from '@/utils'
import { nextTick, onMounted, ref, toRef, watch, watchEffect } from 'vue'

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

defineProps<{
  placeholder?: string
  loading?: boolean
}>()

const handleChange = trailingDebounce((e) => {
  emit('change', e[0].target.value)
}, 500)
</script>
<template>
  <div class="relative flex flex-1 flex-shrink-0">
    <label htmlFor="search" class="sr-only">Search</label>
    <input
      autofocus
      @input="handleChange"
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
