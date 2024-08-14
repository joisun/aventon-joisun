<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeSwitcher from '@/components/ui/theme-switcher.vue';
</script>

<template>
  <header class="h-12 flex justify-between items-center px-12 bg-background-secondary font-serif">
    <h1 class="font-semibold text-2xl">Aventon Joisun.</h1>
    <ThemeSwitcher class="!w-20"/>
  </header>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition as string || 'fade'">
      <div :key="route.path">
        <main class="mt-4 font-sans container mx-auto">
          <component :is="Component" />
        </main>
      </div>
    </transition>
  </router-view>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-right-leave-active {
  transition: all .5s ease-in;
  /* https://matthewlein.com/tools/ceaser */
  transition-timing-function: cubic-bezier(0.000, 0.020, 0.000, 1.085);
  position: absolute;
  width: 100%;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-active,
.slide-left-leave-active {
  transition: all .5s ease-in;
  transition-timing-function: cubic-bezier(0.000, 0.020, 0.000, 1.085);
  position: absolute;
  width: 100%;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;

}
</style>
