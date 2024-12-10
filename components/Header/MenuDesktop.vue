<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue';
const list = ArrayMenu()
const servicesList = [
  {title : '- انجام پروژه سئو' , path: '/services/seo'},
  {title : '- مشاوره سئو' , path: '/services/seo-consulting'},
  {title : '- منتورینگ سئو' , path: '/services/seo-mentoring'},
  {title : '- گوگل ادز' , path: '/services/seo-strategy'},
  {title : '- تدوین استراتژی محتوا' , path: '/services/google-Ads'},
  {title : '- طراحی سایت ' , path: '/services/website-design'},
]

const activePage = ref('home'); // صفحه فعال پیش‌فرض
const showDropdown = ref(false);

// تابع برای تنظیم صفحه فعال
const setActive = (page) => {
  activePage.value = page; // تنظیم صفحه فعال
  showDropdown.value = false; 
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value; // تغییر وضعیت نمایش منوی کشویی
};

const closeDropdown = () => {
  showDropdown.value = false;
};

const handleClickOutside = (event) => {
  const dropdown = document.getElementById('dropdown-menu');
  const servicesLink = document.getElementById('services-link');
  if (dropdown && !dropdown.contains(event.target) && !servicesLink.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// حذف رویداد در زمان تخریب کامپوننت
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template>

<div class="gap-12 hidden md:flex items-center relative">
  <NuxtLink 
        v-for="item in list" 
        :to="item.path"  
        :key="item.name" 
        class="text-sm relative text-[#050D05] cursor-pointer flex gap-1 text-[16px] text-right font-medium leading-[19.2px]" 
        @click="item.title === 'خدمات' ? toggleDropdown() : setActive(item.name)"
        :id="item.title === 'خدمات' ? 'services-link' : undefined" 
    >
        {{ item.title }} 
        <img v-if="item.title === 'خدمات'" src="../../assets/icons/Size=16px, Icon=Arrows-Down (1).svg" alt="icon" class="w-[16px]">
        <div v-if="activePage === item.name && item.title !== 'خدمات' " class="absolute left-0 right-0 bottom-[-5px] h-[4px] bg-[#13144E] transition-all duration-300 rounded-full pt-1"></div>
    </NuxtLink>

    <div v-if="showDropdown" id="dropdown-menu" class="absolute left-64 mt-56 bg-Bg/6 shadow-lg grid gap-2 z-10 rounded-xl text-txt2 py-3 px-4">
        <NuxtLink v-for="item in servicesList" :key="item" :to="item.path" class="block cursor-pointer text-[12px] leading-[160%]">{{ item.title }}</NuxtLink>
    </div>
</div>

</template>