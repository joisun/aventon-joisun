<script lang='ts' setup>
import PlusIcon from "@/components/icons/plus-icon.vue"
</script>
<template>
    <RouterLink to="/new"
        class="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        <span class="hidden md:block">New user</span>
        <PlusIcon class="w-5 text-2xl" />
    </RouterLink>
</template>
