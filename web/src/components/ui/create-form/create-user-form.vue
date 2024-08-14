<script lang='ts' setup>
import Button from '@/components/ui/Button.vue';
import UserIcon from '@/components/icons/user-icon.vue';
const handleFormAction = (formData: FormData)=>{

}
const handleSubmit = ()=>{
  console.log("click")
}
</script>
<template>
    <form :action="handleFormAction">
      <div class="rounded-md bg-background-secondary p-4 md:p-6">

        <div class="mb-4">
          <label htmlFor="amount" class="mb-2 block text-sm font-medium">
            User name
          </label>
          <div class="relative mt-2 rounded-md">
            <div class="relative">
              <input
                id="amount"
                name="amount"
                type="text"
                step="0.01"
                placeholder="Enter user name"
                autocomplete="off"
                class="peer text-foreground-primary block w-full rounded-md border bg-background-primary border-border py-2 pl-10 text-sm outline-none outline-2 focus:outline-accent-secondary placeholder:text-border autofill:bg-background-primary"
              />
              <UserIcon class="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-border peer-focus:text-foreground-secondary" />
            </div>
          </div>
        </div>


      </div>
      <div class="mt-6 flex justify-end gap-4">
        <RouterLink
          to="/"
          class="flex h-10 items-center rounded-lg bg-background-secondary px-4 text-sm font-medium border border-border text-foreground-primary transition-colors hover:bg-background-secondary/50 hover:text-foreground-secondary"
        >
          Cancel
        </RouterLink>
        <Button @click="handleSubmit">Create new user</Button>
      </div>
    </form>
</template>
<style lang='less' scoped>
</style>