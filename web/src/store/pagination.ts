import { computed, ref } from 'vue'

export const lastCachedPage = ref(1)
export const currentPage = ref(1)
export const resetPageIndex = ()=>{
    lastCachedPage.value = 1;
    currentPage.value = 1
}
export const animateType = computed(()=>{
    return lastCachedPage.value === currentPage.value ? 'animate-fadeUp' : lastCachedPage.value > currentPage.value ? 'animate-fadeRight' : 'animate-fadeLeft'
})