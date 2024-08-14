<script lang="ts" setup>
import { ref } from 'vue'
import Button from './ui/Button.vue'
import { skins } from './avatar-picker'
// prettier-ignore-start

// prettier-ignore-end
const last = ref('')
const current = ref('#ffc83d')
</script>
<template>
  <div class="p-4">
    <ol class="grid grid-cols-6 gap-4">
      <li
        v-for="(skin, key, index) in skins"
        :key="key"
        class="flex justify-center items-center cursor-pointer bg-foreground-secondary/20 hover:bg-foreground-secondary/40 p-2 rounded-lg aspect-square"
        @click="
          last = current;
          current = key as string
        "
      >
        <div
          class="w-5/6 h-5/6 rounded-full transition-all"
          :style="{ backgroundColor: key as string }"
        ></div>
      </li>
    </ol>
    <section
      class="h-64 mt-4 overflow-x-hidden overflow-y-auto no-scrollbar"
      :class="[current > last ? 'animate-fadeRight' : 'animate-fadeLeft']"
      :key="current"
    >
      <ol
        class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2"
      >
        <li
          class="text-3xl cursor-pointer hover:scale-150 transition-all origin-center flex justify-center items-center"
          v-for="avatar in skins[current]"
          :key="avatar"
        >
          {{ avatar }}
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped >
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
