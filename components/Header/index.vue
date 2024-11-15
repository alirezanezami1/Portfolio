<script setup>
const emit = defineEmits(['opcao-emit'])
const openMenu = ref(false)
const testFunc = () => {
    openMenu.value = true
}
console.log(console.log(emit));


</script>

<template >
    <div class="flex items-center  justify-between py-2.5 px-4 md:px-20 border-b-[1.5px] border-[#CDCFCD] " @click="emit('opcao-emit')" v-auto-animate>
       
        <div class="md:hidden">
            <IconsMenuIcon @click="testFunc"></IconsMenuIcon>
        </div>

        <div >
            <HeaderMenuDesktop></HeaderMenuDesktop>
        </div>

        <div v-if="openMenu" class="fixed z-50 w-[240px] h-dvh top-0 -right-10" :class="{moveHeader : openMenu}">
            <HeaderMenuMobile></HeaderMenuMobile>
        </div>

        <div>
            <Logo></Logo>
        </div>


    </div>
</template>

<style scoped>
.moveHeader {
    right: -12px;
}
</style>