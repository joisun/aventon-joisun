<script lang='ts' setup>
import PlusIcon from "@/components/icons/plus-icon.vue"
</script>
<template>
    <RouterLink to="/new"
        class="flex h-10 items-center rounded-lg bg-accent-primary px-4 text-sm font-medium text-foreground-primary transition-colors hover:bg-accent-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary">
        <span class="hidden md:block">New user</span>
        <PlusIcon class="w-5 text-2xl" />
    </RouterLink>
</template>
