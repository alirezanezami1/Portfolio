<script setup>
const openMenu = ref(false)
</script>

<template>
    <div class="flex items-center  justify-between py-2.5 px-4 md:px-20 border-b-[1.5px] border-[#CDCFCD] ">
       
        <div class="md:hidden">
            <IconsMenuIcon></IconsMenuIcon>
        </div>

        <div >
            <HeaderMenuDesktop></HeaderMenuDesktop>
        </div>

        <div class="fixed z-50 w-[240px] h-dvh top-0 -right-3">
            <HeaderMenuMobile></HeaderMenuMobile>
        </div>

        <div>
            <Logo></Logo>
        </div>


    </div>
</template>