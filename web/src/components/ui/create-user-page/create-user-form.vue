<script lang="ts" setup>
import Button from '@/components/ui/Button.vue'
import { z } from 'zod'
import { reactive, ref } from 'vue'
import FormField from './form-field.vue'
import { UserIcon, ForkIcon, EmailIcon, LocationIcon } from '@/components/icons'

const formData = reactive({
  name: '',
  email: '',
  address: '',
  avatar: '',
  f_color: '',
  f_food: '',
})
const errors = ref<{
  [x in keyof typeof formData]?: string[]
}>({})
const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: 'Please input name.',
  }),
  email: z
    .string()
    .min(1, { message: 'Please input email.' })
    .email('This email is not valid format, please try again.'),
  address: z.string().min(1, {
    message: 'Please input address.',
  }),
  avatar: z.string(),
  f_color: z.string(),
  f_food: z.string(),
  date: z.string(),
})
const CreateNewUser = FormSchema.omit({
  id: true,
  date: true,
  avatar: true,
  f_color: true,
  f_food: true,
})

const handleSubmit = () => {
  const validatedFields = CreateNewUser.safeParse({
    ...formData,
  })
  if (!validatedFields.success) {
    errors.value = validatedFields.error.flatten().fieldErrors
  }
  console.log('validatedFields', errors.value)
}
</script>
<template>
  <form ref="form" class="w-full">
    <div class="rounded-md bg-background-secondary p-4 md:p-6 w-full">
      <FormField
        placeholder="User name."
        label="User Name"
        v-model="formData.name"
        :error="errors.name?.[0]"
      >
        <template #prefix-icon>
          <UserIcon />
        </template>
      </FormField>

      <FormField
        placeholder="Please input user address."
        label="Address"
        v-model="formData.address"
        :error="errors.address?.[0]"
      >
        <template #prefix-icon>
          <LocationIcon />
        </template>
      </FormField>
      <FormField
        placeholder="email address"
        label="Email"
        v-model="formData.email"
        :error="errors.email?.[0]"
      >
        <template #prefix-icon>
          <EmailIcon />
        </template>
      </FormField>
      <FormField
        placeholder="Any food like most? what about apple?"
        label="Favorite Food"
        v-model="formData.f_food"
        :error="errors.f_food?.[0]"
      >
        <template #prefix-icon>
          <ForkIcon />
        </template>
      </FormField>
      <!-- <div class="mb-4">
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
            <UserIcon
              class="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-border peer-focus:text-foreground-secondary"
            />
          </div>
        </div>
      </div> -->
    </div>
    <div class="mt-6 flex flex-col sm:flex-row justify-end gap-4">
      <RouterLink
        to="/"
        class="flex sm:order-1  order-2 h-10 items-center justify-center rounded-lg bg-background-secondary px-4 text-sm font-medium border border-border text-foreground-primary transition-colors hover:bg-background-secondary/50 hover:text-foreground-secondary"
      >
        Cancel
      </RouterLink>
      <Button class="sm:order-2 order-1" @click="handleSubmit">Create new user</Button>
    </div>
  </form>
</template>
<style lang="less" scoped></style>
