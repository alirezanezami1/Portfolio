<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderMenuMobile from './MenuMobile.vue'; // اطمینان حاصل کنید که مسیر درست است

const openMenu = ref(false); // متغیر برای کنترل نمایش منوی موبایل

// تابع برای باز کردن و بستن منوی موبایل
const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};

// تابع برای بستن منوی موبایل
const closeMenu = () => {
  openMenu.value = false;
};

// اضافه کردن رویداد کلیک به کل صفحه
const handleClickOutside = (event) => {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  // بررسی اینکه آیا کلیک در خارج از منوی موبایل و آیکون منو است
  if (menu && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMenu();
  }
};

// ثبت رویداد در زمان بارگذاری کامپوننت
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// حذف رویداد در زمان تخریب کامپوننت
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
  position: fixed; /* موقعیت ثابت */
  top: 0; /* از بالای صفحه */
  right: 0; /* از سمت راست */
  width: 240px; /* عرض منو */
  height: 100%; /* ارتفاع کامل صفحه */
  background-color: white; /* رنگ پس‌زمینه */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5); /* سایه برای زیبایی */
  z-index: 1000; /* بالاتر از سایر محتوا */
  transition: transform 0.3s ease; /* انیمیشن برای باز و بسته شدن */
  /* transform: translateX(100%); مخفی کردن منو در سمت راست */
}


</style>