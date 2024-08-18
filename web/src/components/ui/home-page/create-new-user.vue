<script lang='ts' setup>
import { PlusIcon } from '@/components/icons';
</script>
<template>
    <RouterLink to="/new" aria-label="Create a new user" class="flex h-10 items-center rounded-lg bg-accent-primary px-4  font-medium text-foreground-primary transition-colors hover:bg-accent-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary">
        <span class="hidden md:block">New user</span>
        <PlusIcon class="md:ml-2 w-5 text-2xl" />
    </RouterLink>
</template>
