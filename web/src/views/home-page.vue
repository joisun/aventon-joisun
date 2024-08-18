<script setup lang="ts">
import SearchBar from '@/components/ui/home-page/search-bar.vue'
import CreateNewUser from '@/components/ui/home-page/create-new-user.vue'
import Table from '@/components/ui/home-page/table.vue'
import TableSkeleton from '@/components/ui/home-page/table-skeleton.vue'
import EmptyPlaceholder from '@/components/ui/home-page/empty-placeholder.vue'

import { queryUsersByPageAPI } from '@/api'
import { ref } from 'vue'
import type { User } from '@/api/definitions'
import { resetPageIndex } from '@/store/pagination'
import { QUERY_PAGE_SIZE } from '@/counts'
document.title = 'Joisun | Users'

const loading = ref(false)

// for table
const users = ref<User[]>([])
const totalPage = ref(0)
const queryVal = ref('')

// animation control

const startQuery = (query: string, currentPage: number = 1) => {

  loading.value = true
  queryUsersByPageAPI({ query: query, size: QUERY_PAGE_SIZE, currentPage })
    .then((result) => {
      totalPage.value = result.total
      users.value = result.data
    })
    .catch((error) => {})
    .finally(() => {
      loading.value = false
    })
}
const handleSearchChange = (query: string, currentPage: number = 1) => {
  resetPageIndex()
  queryVal.value = query
  startQuery(query)
}

const handleCurrentPageChange = (page: number) => {
  startQuery(queryVal.value, page)
}
// init request while page load
startQuery('')
</script>

<template>
  <main>
    <div class="w-full">
      <div class="flex w-full items-center justify-between">
        <h1 class="text-2xl font-serif">Users</h1>
      </div>
      <div class="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar
          :loading="loading"
          @change="handleSearchChange"
          placeholder="Search user information..."
        />
        <CreateNewUser />
      </div>

      <section class="overflow-hidden min-h-[500px]">
        <Table
          @currentPageChange="handleCurrentPageChange"
          :users="users"
          :loading="loading"
          :total-page="totalPage"
          v-if="totalPage && !loading"
        />
        <TableSkeleton :count="QUERY_PAGE_SIZE" v-if="loading" />
        <EmptyPlaceholder  v-if="!totalPage && !loading" />
      </section>
    </div>
  </main>
</template>
