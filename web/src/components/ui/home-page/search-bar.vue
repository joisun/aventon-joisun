<script lang='ts' setup>
import { SearchIcon } from '@/components/icons';

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
        class="peer bg-background-secondary  block w-full rounded-md border border-border py-[9px] pl-10 text-sm outline-2 placeholder:text-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
        :placeholder="placeholder"
      />
      <SearchIcon class="absolute inline-block left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-border peer-focus:text-foreground-secondary transition" />
    </div>
</template>
