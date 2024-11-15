<script setup>
const { openMenu } = useMenu()

watch(openMenu, (newValue) => {
  // این کد هر زمان که مقدار isMenuOpen تغییر کرد اجرا می‌شود
  if (newValue) {
    console.log(newValue)
  } else {
    openMenu.value = false
  }
})

</script>

<template >
    <div class="flex items-center  justify-between py-2.5 px-4 md:px-20 border-b-[1.5px] border-[#CDCFCD] " @click.self="openMenu = false" v-auto-animate>
       
        <div class="md:hidden">
            <IconsMenuIcon @click="openMenu = true"></IconsMenuIcon>
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