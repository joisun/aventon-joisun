<template>
  <button
  @click.prevent
    class="flex h-10 items-center justify-center rounded-lg bg-accent-primary px-4 text-sm font-medium text-foreground-primary transition-colors hover:bg-accent-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
  >
    <slot/>
  </button>
</template>
