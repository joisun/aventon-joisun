<script setup lang="ts">
import Breadcrumbs from '@/components/ui/breadcrumbs.vue'
import CreateUserForm from '@/components/ui/create-user-page/create-user-form.vue'
document.title = 'Create User'
</script>
<template>
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
  <CreateUserForm class="w-full lg:w-5/6  mx-auto"/>
</template>
