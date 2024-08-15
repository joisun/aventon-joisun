<script lang="ts" setup>
import type { User } from '@/api/definitions';
import { formatDateToLocal } from '@/utils';
defineProps<{
  users:User[],
  loading: boolean
  totalPage: number
}>()
</script>
<template>
  <div class="mt-6 flow-root">
    <div class="inline-block min-w-full align-middle">
      <div class="rounded-lg bg-background-secondary p-2 md:pt-0">
        <!-- <div class="md:hidden">
              <div
                v-for="user in users"
                :key="user.id"
                class="mb-2 w-full rounded-md bg-white p-4"
              >
                <div class="flex items-center justify-between border-b pb-4">
                  <div>
                    <div class="mb-2 flex items-center">
                      <img
                        :src="user.image_url"
                        class="mr-2 rounded-full"
                        width={28}
                        height={28}
                        :alt="`${user.name}'s profile picture`"
                      />
                      <p>{user.name}</p>
                    </div>
                    <p class="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <InvoiceStatus status={user.status} />
                </div>
                <div class="flex w-full items-center justify-between pt-4">
                  <div>
                    <p class="text-xl font-medium">
                      {formatCurrency(user.amount)}
                    </p>
                    <p>{formatDateToLocal(user.date)}</p>
                  </div>
                  <div class="flex justify-end gap-2">
                    <UpdateInvoice id={user.id} />
                    <DeleteInvoice id={user.id} />
                  </div>
                </div>
              </div>
          </div> -->
        <table class="hidden min-w-full md:table">
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
                  <span class="text-2xl">{{ user.avatar }}</span><span>{{ user.name }}</span>
                </p>
              </td>
              <td class="whitespace-nowrap px-3 py-3">
                {{ user.email }}
              </td>
              <td class="whitespace-nowrap px-3 py-3">ex omnis laudantium</td>
              <td class="whitespace-nowrap px-3 py-3">
                <div class="bg-green-500 w-8 h-8 rounded-full"></div>
              </td>
              <td class="whitespace-nowrap px-3 py-3">Apple</td>
              <td class="whitespace-nowrap px-3 py-3">
                {{ formatDateToLocal(user.date) }}
                <!-- {{formatDateToLocal(user.date)}} -->
              </td>
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
    </div>
  </div>
</template>
