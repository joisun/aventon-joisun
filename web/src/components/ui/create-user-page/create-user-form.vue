<script lang="ts" setup>
import Button from '@/components/ui/Button.vue'
import PopDialog from '@/components/ui/pop-dialog.vue'
import { z } from 'zod'
import { reactive, ref } from 'vue'
import FormField from './form-field.vue'
import FormAvatarChoose from './form-avatar-choose.vue'
import {
  UserIcon,
  ForkIcon,
  EmailIcon,
  LocationIcon,
  LoadingIcon,
  ColorIcon,
} from '@/components/icons'
import { createUserAPI } from '@/api'
import type { CreateUser } from '@/api/definitions'
import { useRouter } from 'vue-router'
// import { newDate } from '@/utils'
const router = useRouter()
const loading = ref(false)
const disabled = ref(false)
const initialFormState = {
  name: '',
  email: '',
  address: '',
  avatar: '',
  f_color: '',
  f_food: '',
  date: null,
}
const formData = reactive<CreateUser>({ ...initialFormState })
function resetForm() {
  Object.keys(formData).forEach((key) => {
    ;(formData as any)[key] = (initialFormState as any)[key]
  })
}
const errors = ref<{
  [x in keyof typeof formData]?: string[]
}>({})
const resetErrors = () => {
  errors.value = {}
}
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
  avatar: z.string().optional(),
  f_color: z.string().optional(),
  f_food: z.string().optional(),
  date: z.string(),
})
const CreateNewUser = FormSchema.omit({
  id: true,
  date: true,
})
const validate = () => {
  return CreateNewUser.safeParse({
    ...formData,
  })
}

// dialog related
const dialog = reactive({
  visible: false,
  title: '',
  message: '',
  comfirmMsg: '',
  cancelMsg: '',
  closeResetMsg: '',
  gobackMsg: '',
  isErrorMsg: false,
})

type DialogType = typeof dialog
type ShowContent = Partial<Omit<DialogType, 'visible'>> & {
  isErrorMsg: boolean
}
const showDialog = (showContent: ShowContent) => {
  const {
    title,
    message,
    cancelMsg,
    comfirmMsg,
    isErrorMsg,
    closeResetMsg,
    gobackMsg,
  } = showContent
  dialog.title = title || ''
  dialog.message = message || ''
  dialog.cancelMsg = cancelMsg || ''
  dialog.comfirmMsg = comfirmMsg || ''
  ;(dialog.closeResetMsg = closeResetMsg || ''),
    (dialog.gobackMsg = gobackMsg || ''),
    (dialog.isErrorMsg = isErrorMsg)
  dialog.visible = true
}
const closeDialog = () => (dialog.visible = false)
const handleDialogConfirm = () => {
  closeDialog()
}
const handleContinue = () => {
  resetForm()
  closeDialog()
}
const handleGoback = () => {
  closeDialog()
  router.push('/')
}

const handleSubmit = () => {
  const validatedFields = validate()
  if (!validatedFields.success) {
    errors.value = validatedFields.error.flatten().fieldErrors
    return
  } else {
    resetErrors()
    loading.value = true
    disabled.value = true
    createUserAPI({
      ...validatedFields.data,
      date: new Date(),
    })
      .then((result) => {
        showDialog({
          title: 'Success',
          message: 'Create new user successfully.',
          closeResetMsg: 'Continue',
          gobackMsg: 'Ok and go back',
          isErrorMsg: false,
        })
      })
      .catch((error) => {
        showDialog({
          title: 'Failed',
          message: `Create new user failed. ${error}`,
          comfirmMsg: 'I got it.',
          isErrorMsg: true,
        })
        console.log('error', error)
      })
      .finally(() => {
        loading.value = false
        disabled.value = false
      })
  }
}
</script>
<template>
  <form ref="form" class="w-full">
    <div class="rounded-md bg-background-secondary p-4 md:p-6 w-full">
      <FormAvatarChoose :disabled="disabled" v-model="formData.avatar" />
      <FormField
        :disabled="disabled"
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
        :disabled="disabled"
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
        :disabled="disabled"
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
        :disabled="disabled"
        placeholder="Any food like most? what about apple?"
        label="Favorite Food"
        v-model="formData.f_food"
        :error="errors.f_food?.[0]"
      >
        <template #prefix-icon>
          <ForkIcon />
        </template>
      </FormField>
      <FormField
        :disabled="disabled"
        placeholder="Any food like most? what about apple?"
        label="Favorite Colors"
        v-model="formData.f_color"
        :error="errors.f_color?.[0]"
      >
        <template #prefix-icon>
          <ColorIcon />
        </template>
      </FormField>
    </div>

    <!-- operations -->
    <div class="mt-6 flex flex-col sm:flex-row justify-end gap-4">
      <RouterLink
        to="/"
        class="flex sm:order-1 order-2 h-10 items-center justify-center rounded-lg bg-background-secondary px-4 text-sm font-medium border border-border text-foreground-primary transition-colors hover:bg-background-secondary/50 hover:text-foreground-secondary"
        :class="[
          disabled ? 'bg-foreground-secondary/10 pointer-events-none' : '',
        ]"
      >
        Cancel
      </RouterLink>

      <PopDialog
        v-model="dialog.visible"
        trigger-class="w-full sm:w-auto order-1 sm:order-2"
        class="w-60"
      >
        <template #trigger>
          <Button
            :disabled="disabled"
            class="w-full sm:w-auto"
            @click="handleSubmit"
          >
            Create new user
            <LoadingIcon class="animate-spin text-xl mx-1" v-if="loading" />
          </Button>
        </template>
        <template #header>
          <div class="h-12 flex items-center px-4 font-medium">
            {{ dialog.title }}
          </div>
        </template>
        <template #content>
          <div
            class="h-auto px-4"
            :class="[
              dialog.isErrorMsg ? 'text-error' : 'text-foreground-secondary',
            ]"
          >
            {{ dialog.message }}
          </div>
        </template>
        <template #footer>
          <div
            class="h-auto p-4 flex flex-col gap-2 justify-center items-center"
          >
            <Button
              v-if="dialog.closeResetMsg"
              variant="ghost"
              @click="handleContinue"
              class="w-full"
            >
              {{ dialog.closeResetMsg }}
            </Button>
            <Button
              v-if="dialog.closeResetMsg"
              @click="handleGoback"
              class="w-full"
            >
              {{ dialog.gobackMsg }}
            </Button>
            <Button
              v-if="dialog.comfirmMsg"
              @click="handleDialogConfirm"
              class="w-full"
            >
              {{ dialog.comfirmMsg }}
            </Button>
          </div>
        </template>
      </PopDialog>
    </div>
  </form>
</template>
<style lang="less" scoped></style>
