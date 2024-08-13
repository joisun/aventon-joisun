<script setup lang="ts">
import Breadcrumbs from '@/components/ui/breadcrumbs.vue'
</script>
<template>
  <div class="about">
    <Breadcrumbs
      :breadcrumbs="[
        { label: 'User', href: '/' },
        {
          label: 'Create User',
          href: '/new',
          active: true,
        },
      ]"
    />
    <RouterLink
      to="/"
      class="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span class="hidden md:block">Go back</span>
      <PlusIcon class="w-5 text-2xl" />
    </RouterLink>
    <h1>This is an about page</h1>
  </div>
</template>
