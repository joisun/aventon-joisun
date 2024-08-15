<script setup lang="ts">
import SearchBar from '@/components/ui/home-page/search-bar.vue'
import CreateNewUser from '@/components/ui/home-page/create-new-user.vue'
import Table from '@/components/ui/home-page/table.vue'
import { useRoute } from 'vue-router'
import { queryUsersByPageAPI } from '@/api'
import { ref } from 'vue'
import type { User } from '@/api/definitions'
const route = useRoute()
document.title = 'Users'

const loading = ref(false)
const disabled = ref(false)

// for table
const users = ref<User[]>([])
const totalPage = ref(0)

const handleSearchChange = (query: string) => {
  loading.value = true
  disabled.value = true

  queryUsersByPageAPI({ query: query, size: 10 })
    .then((result) => {
      totalPage.value = result.total
      users.value = result.data
    })
    .catch((error) => {})
    .finally(() => {
      loading.value = false
      disabled.value = false
    })
}
handleSearchChange('')

</script>

<template>
  <main>
    <div class="w-full">
      <div class="flex w-full items-center justify-between">
        <h1 class="text-2xl font-serif">Users</h1>
      </div>
      <div class="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar
          :disabled="disabled"
          :loading="loading"
          @change="handleSearchChange"
          placeholder="Search user information..."
        />
        <CreateNewUser />
      </div>
      <Table :users="users" :loading="loading" :total-page="totalPage" />
    </div>
  </main>
</template>
