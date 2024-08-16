<script setup lang="ts">
import clsx from 'clsx';
import {  withDefaults } from 'vue'
const enum ButtonType {
  ghost = 'ghost',
  primary = 'primary'
}
withDefaults(defineProps<{
  variant?: 'ghost' | 'primary'
}>(),{
  variant: ButtonType.primary
})
</script>
<template>
  <button
  @click.prevent
    :class='clsx(
      "flex h-10 items-center justify-center rounded-lg transition-colors",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary",
      "px-4 font-medium disabled:bg-foreground-secondary/20 disabled:text-foreground-secondary",
      {
        "bg-accent-primary hover:bg-accent-secondary text-foreground-primary ": variant === ButtonType.primary,
        "bg-transparent hover:bg-foreground-secondary/10 border border-border  text-foreground-primary": variant === ButtonType.ghost
      }
    )'
  >
    <slot/>
  </button>
</template>
