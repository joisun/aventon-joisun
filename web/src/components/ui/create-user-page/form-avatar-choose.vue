<script lang='ts' setup>
import { ref } from 'vue';
import PopDialog from '../pop-dialog.vue';
import Button from '../Button.vue';
const showModal = ref(false)
const handleConfirm = ()=>{
    console.log("con")
    showModal.value = false
}
const handleClose = ()=>{
    showModal.value = false
}
</script>

<template>
    
    <PopDialog v-model="showModal" @confirm="handleConfirm" @close="handleClose">
        <template #trigger>
            <Button @click="showModal = true">show modal</Button>
        </template>
        <template #content>
            <div class="w-52 h-52 bg-red-100">Provident aliquid neque molestiae rerum sequi amet doloremque.</div>
        </template>
    </PopDialog>
</template>