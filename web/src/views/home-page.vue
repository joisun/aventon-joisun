<script setup lang="ts">
import SearchBar from '@/components/ui/home-page/search-bar.vue';
import CreateNewUser from '@/components/ui/home-page/create-new-user.vue';
import Table from '@/components/ui/home-page/table.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
document.title = "Users"
</script>

<template>
  <main>
    <div class="w-full ">
      <div class="flex w-full items-center justify-between">
        <h1 class="text-2xl font-serif">Users</h1>
      </div>
      <div class="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar placeholder="Search user information..." />
        <CreateNewUser />
      </div>
        <Table  />
    </div>
  </main>
</template>
