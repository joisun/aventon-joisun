<script lang="ts" setup>
withDefaults(
  defineProps<{
    count: number
  }>(),
  {
    count: 4,
  },
)
</script>
<template>
  <div class="mt-6 flow-root">
    <!-- mobile -->
    <div class="lg:hidden rounded-lg">
      <div
        v-for="i in count"
        :key="i"
        class="mb-2 w-full rounded-md bg-background-secondary p-4 text-foreground-primary"
      >
        <div
          class="flex flex-col items-start justify-between border-border border-b pb-4"
        >
          <div class="mb-2 w-full flex items-center gap-4">
            <span
              class="skeleton bg-background-primary text-5xl h-16 rounded-lg inline-flex justify-center items-center w-16 aspect-square"
            ></span>
            <div class="flex-1">
              <!-- prettier-ignore-start -->
              <p class="flex justify-between items-center gap-3">
                <span
                  class="skeleton bg-background-primary text-2xl rounded-md w-[10ch] h-[1.2em]"
                ></span>
              </p>
              <p class="text-sm flex flex-col sm:flex-row">
                <span
                  class="skeleton bg-background-primary rounded-md w-[20ch] h-[1.1em] mt-1"
                ></span>
                <span class="hidden sm:inline mx-2 text-foreground-secondary/50">/</span>
                <span
                  class="text-xs sm:text-sm skeleton bg-background-primary rounded-md w-[20ch] h-[1em] mt-1"
                ></span>
              </p>
              <!-- prettier-ignore-end -->
            </div>
          </div>
        </div>
        <div
          class="flex flex-col w-full items-start justify-between pt-4 gap-1"
        >
          <p
            class="skeleton bg-background-primary h-[1em] block rounded-md font-medium w-[22ch]"
          ></p>
          <p
            class="skeleton bg-background-primary h-[1em] block rounded-md font-medium w-[22ch] mt-1"
          ></p>
          <p class="text-xs w-full text-right mt-4 flex justify-end">
            <span
              class="skeleton bg-background-primary h-[1em] block rounded-md font-medium text-xs w-[22ch]"
            ></span>
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
        </tr>
      </thead>

      <!-- prettier-ignore-start -->
      <tbody class="bg-background-primary">
        <tr
          v-for="i in count"
          :key="i"
          class="w-full border-b border-border py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
        >
          <td class="whitespace-nowrap py-3 pl-6 pr-3">
            <p class="flex items-center gap-3">
              <span
                class="text-2xl skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[1em]"
              ></span>
              <span
                class="skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[10ch]"
              ></span>
            </p>
          </td>
          <td class="whitespace-nowrap px-3 py-3">
            <div
              class="skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[15ch]"
            ></div>
          </td>
          <td class="whitespace-nowrap px-3 py-3">
            <div
              class="skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[20ch]"
            ></div>
          </td>
          <td class="whitespace-nowrap px-3 py-3">
            <div
              class="skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[10ch]"
            ></div>
          </td>
          <td class="whitespace-nowrap px-3 py-3">
            <div
              class="skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[10ch]"
            ></div>
          </td>
          <td class="whitespace-nowrap px-3 py-3">
            <div
              class="skeleton rounded-md bg-foreground-secondary/10 h-[1em] w-[12ch]"
            ></div>
          </td>
        </tr>
      </tbody>
      <!-- prettier-ignore-end -->
    </table>
    <!-- <Pagination :totalPage="totalPage" @change="handleChange"/> -->
  </div>
</template>
