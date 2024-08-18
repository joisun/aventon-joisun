<script lang="ts" setup>
import type { User } from '@/api/definitions'
import { EditIcon } from '@/components/icons'
import { formatDateToLocal } from '@/utils'
import Pagination from '@/components/ui/home-page/pagination.vue'
import Button from '@/components/ui/Button.vue'
import { animateType } from '@/store/pagination'
defineProps<{
  users: User[]
  loading: boolean
  totalPage: number
}>()
const emit = defineEmits<{
  (e: 'currentPageChange', value: number): void
}>()
const handleChange = (value: number) => {
  emit('currentPageChange', value)
}
</script>
<template>
  <div class="mt-6 flow-root">
    <div :class="animateType">
      <!-- mobile -->
      <div class="lg:hidden rounded-lg">
        <div
          v-for="user in users"
          :key="user.id"
          class="mb-2 w-full rounded-md bg-background-secondary p-4 text-foreground-primary"
        >
          <div
            class="flex flex-col items-start justify-between border-border border-b pb-4"
          >
            <div class="mb-2 w-full flex items-center gap-4">
              <span
                class="text-5xl rounded-lg bg-foreground-secondary/10 inline-flex justify-center items-center w-16 aspect-square"
              >
                {{ user.avatar }}
              </span>
              <div class="flex-1">
                <!-- prettier-ignore-start -->
                <p class="flex justify-between items-center gap-3">
                  <span class="font-semibold">{{ user.name }}</span>
                  <!-- TODO: Edit Operation -->
                  <!-- <Button
                    aria-label="Edit"
                    class="bg-foreground-secondary/20 hover:bg-foreground-secondary/30 rounded-lg text-foreground-secondary hover:text-foreground-primary p-2"
                  >
                    <EditIcon />
                  </Button> -->
                </p>
                <p class="text-sm flex flex-col sm:flex-row">
                  <span>Email: {{ user.email }}</span>
                  <span
                    class="hidden sm:inline text-foreground-secondary/50 mx-2"
                  >
                    /
                  </span>
                  <span class="text-xs sm:text-sm text-foreground-secondary">
                    Registered on
                    {{ user.date && formatDateToLocal(user.date) }}
                  </span>
                </p>
                <!-- prettier-ignore-end -->
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-full items-start justify-between pt-4 gap-1"
          >
            <p>
              <span class="font-medium mr-2">Favorite Color:</span>
              {{ user.f_color }}
            </p>
            <p>
              <span class="font-medium mr-2">Favorite Food:</span>
              {{ user.f_food }}
            </p>
            <p class="text-xs w-full text-right text-foreground-secondary mt-4">
              Address: {{ user.address }}
            </p>
          </div>
        </div>
      </div>

      <!-- pc -->
      <table class="hidden min-w-full lg:table">
        <thead class="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" class="px-4 py-5 font-medium sm:pl-6">Name</th>
            <th scope="col" class="px-3 py-5 font-medium">Email</th>
            <th scope="col" class="px-3 py-5 font-medium">Address</th>
            <th scope="col" class="px-3 py-5 font-medium">Favorite Color</th>
            <th scope="col" class="px-3 py-5 font-medium">Favorite Fruit</th>
            <th scope="col" class="px-3 py-5 font-medium">Date</th>
            <!-- <th scope="col" class="px-3 py-5 font-medium">
                  Status
                </th> -->
            <!-- <th scope="col" class="relative py-3 pl-6 pr-3">
                  <span class="sr-only">Edit</span>
                </th> -->
          </tr>
        </thead>
        <tbody class="bg-background-primary">
          <tr
            v-for="user in users"
            :key="user.id"
            class="w-full border-b border-border py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td class="whitespace-nowrap py-3 pl-6 pr-3">
              <p class="flex items-center gap-3">
                <span class="text-2xl">{{ user.avatar }}</span>
                <span>{{ user.name }}</span>
              </p>
            </td>
            <td class="whitespace-nowrap px-3 py-3">
              {{ user.email }}
            </td>
            <td class="whitespace-nowrap px-3 py-3">ex omnis laudantium</td>
            <td class="whitespace-nowrap px-3 py-3">
              <!-- TODO: Achieve Color Picker -->
              <!-- <div class="bg-green-500 w-8 h-8 rounded-full"></div> -->
              <p>{{ user.f_color }}</p>
            </td>
            <td class="whitespace-nowrap px-3 py-3">{{ user.f_food }}</td>
            <td class="whitespace-nowrap px-3 py-3">
              {{ user.date && formatDateToLocal(user.date) }}
            </td>
            <!-- TODO: Edit Operation -->
            <!-- <td class="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={user.status} />
                  </td>
                  <td class="whitespace-nowrap py-3 pl-6 pr-3">
                    <div class="flex justify-end gap-3">
                      <UpdateInvoice id={user.id} />
                      <DeleteInvoice id={user.id} />
                    </div>
                  </td> -->
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination :totalPage="totalPage" @change="handleChange" />
  </div>
</template>
