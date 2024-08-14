<script lang="ts" setup>
import Switcher from './switcher.vue'
import { useTheme } from '@/hooks/useTheme'

const { isDark, setTheme} = useTheme()


</script>
<template>
  <Switcher v-model="isDark" @change="(value)=>setTheme(value)" />
</template>
<style lang="less" scoped></style>
