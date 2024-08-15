<script lang="ts" setup>
import clsx from 'clsx'
type Breadcrumb = {
  label: string
  href: string
  active?: boolean
}
defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>
<template>
  <nav aria-label="Breadcrumb" class="mb-6 block font-serif">
    <ol class="flex text-xl md:text-2xl">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="breadcrumb.href"
        :class="
          clsx(breadcrumb.active || false ? 'text-foreground-primary ' : 'text-foreground-secondary')
        "
      >
        <RouterLink :to="breadcrumb.href">{{breadcrumb.label}}</RouterLink>
        <span v-if="index < breadcrumbs.length - 1" class="mx-3 inline-block">
          /
        </span>
      </li>
    </ol>
  </nav>
</template>
