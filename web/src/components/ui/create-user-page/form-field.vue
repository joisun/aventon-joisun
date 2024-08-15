<script lang="ts" setup>
defineProps<{
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
}>()
const model = defineModel()
</script>
<template>
  <div class="mb-4">
    <label htmlFor="amount" class="mb-2 block text-sm font-medium">
      {{ label }}
    </label>
    <div class="relative mt-2 rounded-md">
      <div class="relative">
        <input
          :disabled="disabled"
          id="amount"
          name="amount"
          type="text"
          step="0.01"
          :placeholder="placeholder"
          autocomplete="off"
          class="peer transition-all disabled:bg-foreground-secondary/10 text-foreground-primary block w-full rounded-md border bg-background-primary border-border py-2 pl-10 text-sm outline-none outline-2 focus:outline-accent-secondary placeholder:text-border autofill:bg-background-primary"
          v-model="model"
        />

        <span
          class="pointer-events-none absolute left-3 top-1/2 h-[1em] w-[1em] -translate-y-1/2 text-border peer-focus:text-foreground-secondary inline-flex justify-center items-center"
        >
          <slot name="prefix-icon">😎</slot>
        </span>
      </div>
      <div class="text-error" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>
