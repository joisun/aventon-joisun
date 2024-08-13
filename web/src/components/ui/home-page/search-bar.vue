<script lang='ts' setup>
import SearchIcon from '@/components/icons/search-icon.vue';
defineProps<{
    placeholder?:string
}>()
const handleChange = ()=>{

}
</script>
<template>
    <div class="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" class="sr-only">
        Search
      </label>
      <input
        @change={handleChange}
        class="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 outline-blue-600"
        :placeholder="placeholder"
      />
      <SearchIcon class="absolute inline-block left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
</template>
