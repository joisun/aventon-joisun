<script lang="ts" setup>
import { LeftIcon, RightIcon } from '@/components/icons'
import Button from '@/components/ui/Button.vue'
import { currentPage, lastCachedPage } from '@/store/pagination'
import { computed, ref, watch } from 'vue'
const emit = defineEmits<{
  (e: 'change', value: number): void
}>()
const handleChange = (val: number) => {
  // do nothing if click current page index
  if (currentPage.value === val) return

  // cache before change
  lastCachedPage.value = currentPage.value
  currentPage.value = val
  emit('change', val)
}

const props = withDefaults(
  defineProps<{
    totalPage?: number
  }>(),
  {
    totalPage: 0,
  },
)

const MAX_ITEMS = 5

const indicators = computed(() => {
  const initials = Array.from({ length: MAX_ITEMS }, (_, index) => index + 1)
  const offset = currentPage.value - 1 // 1 for init page value
  if(currentPage.value > MAX_ITEMS){
    return initials.map((i) => i + offset - MAX_ITEMS + 1)
  }else{
    return initials
  }
})

</script>
<template>
  <div
    className="flex w-full justify-center flex-nowrap my-2 select-none"
    v-if="totalPage"
  >
    <Button
      variant="ghost"
      class="!p-3"
      :disabled="currentPage === 1"
      aria-label="Go to last page"
      @click="handleChange(currentPage - 1)"
    >
      <LeftIcon class="text-xl" />
    </Button>

    <div class="single-wrapper flex mx-4">
      <Button
        variant="ghost"
        class="rounded-none"
        :aria-label="`Go to page ${i}`"
        @click="handleChange(i)"
        :class="{
          '!bg-accent-primary': currentPage === i,
          'rounded-l-lg border-r-1': i === indicators[0],
          'rounded-r-lg border-r-1': i === indicators[indicators.length - 1],
          'border-r-0': i !== 1 && i !== indicators[indicators.length - 1],
        }"
        v-for="i in indicators"
      >
        {{ i }}
      </Button>
      <!-- <div class="ml-2 px-2 text-foreground-secondary flex justify-center items-center rounded-lg border border-border">
        {{ totalPage }} in total.
      </div> -->
    </div>
    <Button
      variant="ghost"
      class="!p-3"
      aria-label="Go to next page"
      :disabled="currentPage === totalPage"
      @click="handleChange(currentPage + 1)"
    >
      <RightIcon class="text-xl" />
    </Button>
  </div>
  <p class="text-center text-xs text-foreground-secondary">with {{ totalPage }} in total.</p>
</template>
<style lang="less" scoped></style>
