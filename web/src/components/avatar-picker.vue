<script lang="ts" setup>
import { ref } from 'vue'
import Button from './ui/Button.vue'
import { skins } from './avatar-picker'

const last = ref('')
const current = ref('#ffc83d')
const selected = defineModel()

const handleSelect = (avatar: string)=>{
    selected.value = avatar
}

</script>

<template>
  <div class="p-4">
    <ol class="grid grid-cols-6 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
      <li
        v-for="(skin, key, index) in skins"
        :key="key"
        class="flex aspect-square justify-center items-center cursor-pointer bg-foreground-secondary/20 hover:bg-foreground-secondary/40 p-1 sm:p-2 rounded-lg"
        @click="
          last = current;
          current = key as string
        "
      >
        <div
        class="w-full h-full rounded-full transition-all"
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
        class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl::grid-cols-9 gap-1"
      >
        <li
            @click="handleSelect(avatar)"
          class="group cursor-pointer origin-center flex justify-center items-center rounded-lg aspect-square"
          :class="[selected === avatar ? 'bg-foreground-secondary/40' : '']"
          v-for="avatar in skins[current]"
          :key="avatar"
        >
        <span class="text-3xl group-hover:scale-150 transition-all">
            {{ avatar }}
        </span>
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
