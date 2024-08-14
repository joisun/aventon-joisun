<script lang="ts" setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { CloseIcon } from '../icons'
import Button from './Button.vue'

defineOptions({
  inheritAttrs: false
})
defineProps<{
    title?: string
}>()

const triggerRef = ref<null | HTMLDivElement>(null)
const dialogRef = ref<null | HTMLDialogElement>(null)
const cacheLeftTop = { left: 0, top: 0 } // 缓存dialog 展开时的位置，用于动画关闭的起始状态
const aniDuration = 500 // 动画时长
const delayCloseSwitcher = ref(false) // 延迟关闭，用于等待动画执行完毕
const modelVisible = defineModel<boolean>({
  default: false,
})
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()
const handleClose = () => {
  emit('close')
}
const handleConfirm = () => {
  emit('confirm')
}
watch(
  modelVisible,
  (v) => {
    // show
    if (modelVisible.value) {
      // 动态计算 modal 的宽高
      nextTick(() => {
        const { offsetHeight: dh, offsetWidth: dw } = dialogRef.value! || {
          offsetHeight: 0,
          offsetWidth: 0,
        }
        // 当前视口的宽高
        const vw = document.documentElement.clientWidth
        const vh = document.documentElement.clientHeight
        // 计算 dialog 的目标位置
        const toLeft = vw / 2 - dw / 2
        const toTop = vh / 2 - dh / 2

        // 缓存一下 计算后的结果,用于关闭动画
        cacheLeftTop.left = toLeft
        cacheLeftTop.top = toTop
        aniShow(toLeft, toTop)
      })
    } else {
      // close
      delayCloseSwitcher.value = true
      aniClose()

      setTimeout(() => {
        // 动画完成后关闭 dialog
        delayCloseSwitcher.value = false
      }, aniDuration)
    }
  },
  {
    immediate: true,
  },
)
const aniShow = (toLeft: number, toTop: number) => {
  if (!triggerRef.value) return
  // trigger 元素的位置
  const { offsetLeft: fromL, offsetTop: fromT } = triggerRef.value
  dialogRef.value &&
    dialogRef.value.animate(
      [
        { transform: `translate(${fromL}px, ${fromT}px) scale(0.8)` },
        { transform: `translate(${toLeft}px, ${toTop}px) scale(1)` },
      ],
      {
        duration: aniDuration,
        fill: 'forwards',
        easing: 'cubic-bezier(0.000, 0.760, 0.080, 0.980)', //https://matthewlein.com/tools/ceaser
      },
    )
}
const aniClose = () => {
  const { left: toLeft, top: toTop } = cacheLeftTop
  if (!triggerRef.value) return
  // trigger 元素的位置
  const { offsetLeft: fromL, offsetTop: fromT } = triggerRef.value
  dialogRef.value &&
    dialogRef.value.animate(
      [
        {
          transform: `translate(${toLeft}px, ${toTop}px) scale(1)`,
          opacity: 1,
        },
        {
          transform: `translate(${fromL}px, ${fromT}px) scale(0.2)`,
          opacity: 0,
        },
      ],
      {
        duration: aniDuration,
        fill: 'forwards',
        easing: 'cubic-bezier(0.000, 0.760, 0.080, 0.980)', //https://matthewlein.com/tools/ceaser
      },
    )
}
</script>
<template>
  <div class="inline-block" ref="triggerRef">
    <slot name="trigger"></slot>
  </div>
  <teleport to="body" v-if="modelVisible || delayCloseSwitcher">
    <div class="absolute mask inset-0 bg-black/10">
      <!-- top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -->
      <div
        ref="dialogRef"
        class="absolute origin-top-left min-w-[200px] min-h-[200px] bg-background-secondary rounded-lg overflow-hidden text-foreground-primary"
        :class="$attrs.class"
        
      >
        <slot name="header">
          <header
            class="h-12 border-b border-border p-2 flex justify-between items-center"
          >
            <p class="text-foreground-primary font-medium" v-if="title">{{ title }}</p>
            <Button
              @click="handleClose"
              class="!h-8 !w-8 !p-0 !bg-transparent hover:!border-foreground-secondary border !border-border"
            >
              <CloseIcon class="text-2xl text-foreground-primary" />
            </Button>
          </header>
        </slot>
        <main>
          <slot name="content" />
        </main>
        <slot name="footer">
          <footer
            class="absolute bottom-0 left-0 right-0 h-12 border-t border-border p-2 flex justify-end items-center"
          >
            <Button @click="handleConfirm" class="!h-8">Confirm</Button>
          </footer>
        </slot>
      </div>
    </div>
  </teleport>
</template>
<style lang="less" scoped></style>
