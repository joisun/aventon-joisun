<script lang='ts' setup>
import { ref } from 'vue';
import PopDialog from '../pop-dialog.vue';
import AvatarPicker from '@/components/avatar-picker.vue';
import Button from '../Button.vue';
const showModal = ref(true)
const handleConfirm = ()=>{
    console.log("con")
    showModal.value = false
}
const handleClose = ()=>{
    showModal.value = false
}
</script>

<template>
    
    <PopDialog title="Choose Avatar" v-model="showModal" @confirm="handleConfirm" @close="handleClose" class="w-5/6 lg:w-1/4">
        <template #trigger>
            <Button @click="showModal = true">show modal</Button>
        </template>
        <template #content>
            <AvatarPicker/>
        </template>
    </PopDialog>
</template>