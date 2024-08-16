<script lang="ts" setup>
import { currentPage } from '@/store/pagination';
const emit = defineEmits<{
  (e: 'change', value: number): void
}>()
const handleChange = (val: number) => {
  currentPage.value = val
  emit('change', val)
}

withDefaults(
  defineProps<{
    totalPage?: number
  }>(),
  {
    totalPage: 0,
  },
)
import { RightIcon, LeftIcon } from '@/components/icons'
import Button from '@/components/ui/Button.vue'
import { ref } from 'vue'
</script>
<template>
  <div className="flex w-full justify-center flex-nowrap my-2 select-none">
    <Button
      variant="ghost"
      class="!p-3"
      :disabled="currentPage === 1"
      @click="handleChange(currentPage - 1)"
    >
      <LeftIcon class="text-xl" />
    </Button>

    <!-- TODO: 有时间优化一下，如果数据过多，这里应该神略显示， 而不是全部 -->
    <div class="single-wrapper flex mx-4">
      <Button
        variant="ghost"
        class="rounded-none"
        @click="handleChange(i)"
        :class="{
          '!bg-accent-primary': currentPage === i,
          'rounded-l-lg border-r-1': i === 1,
          'rounded-r-lg border-r-1': i === totalPage,
          'border-r-0': i !== 1 && i !== totalPage,
        }"
        v-for="i in totalPage"
      >
        {{ i }}
      </Button>
    </div>
    <Button
      variant="ghost"
      class="!p-3"
      :disabled="currentPage === totalPage"
      @click="handleChange(currentPage + 1)"
    >
      <RightIcon class="text-xl" />
    </Button>
  </div>
</template>
<style lang="less" scoped></style>
