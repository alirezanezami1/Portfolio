<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderMenuMobile from './MenuMobile.vue'; 

const openMenu = ref(false); 

const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};

const closeMenu = () => {
  openMenu.value = false;
};

const handleClickOutside = (event) => {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menu && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template >
    <div class="flex relative items-center justify-between py-2.5 px-4 md:px-20 border-b-[1.5px] border-[#CDCFCD] "  v-auto-animate>
       
        <div class="md:hidden" id="menu-icon" @click="toggleMenu">
            <IconsMenuIcon></IconsMenuIcon> 
        </div>

        <div >
            <HeaderMenuDesktop></HeaderMenuDesktop>
        </div>

        <div v-if="openMenu" id="mobile-menu" class="mobile-menu">
            <HeaderMenuMobile></HeaderMenuMobile>
        </div>

      <div>
        <NuxtLink to="/">
        <Logo></Logo>
       </NuxtLink>
      </div>


    </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0; 
  right: 0; 
  width: 240px; 
  height: 100%; 
  background-color:white; 
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: transform 0.3s ease;
}


</style>