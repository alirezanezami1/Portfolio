<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue';
import { useRoute } from 'vue-router';
const list = ArrayMenu()
const servicesList = [
  {title : '- انجام پروژه سئو' , path: '/services/seo'},
  {title : '- مشاوره سئو' , path: '/services/seo-consulting'},
  {title : '- منتورینگ سئو' , path: '/services/seo-mentoring'},
  {title : '- تدوین استراتژی سئو' , path: '/services/seo-strategy'},
  {title : '- گوگل ادز' , path: '/services/google-Ads'},
  {title : '- طراحی سایت ' , path: '/services/website-design'},
]

const SocialImg = [
    { url : 'https://www.linkedin.com/in/r-ranjbari/' , img : '/img/Linkedin.png'},
    { url : '//api.whatsapp.com/send?phone=+989380286230MOBILE_NUMBER&text=سلام' , img : '/img/Whatsapp.png'},
    { url : 'https://www.instagram.com/ranjbari.seo/' , img : '/img/Instagram (1).png'},
    { url : 'https://t.me/Ranjbari67' , img : '/img/Telegram.png'},
]

const activePage = ref('home');
const showDropdown1 = ref(false);
const route = useRoute();

const setActive = (page) => {
  activePage.value = page;
  showDropdown1.value = false; 
};

const toggleDropdown1 = () => {
  showDropdown1.value = !showDropdown1.value;
};

const closeDropdown = () => {
  showDropdown1.value = false;
};

const handleClickOutside = (event) => {
  const dropdown = document.getElementById('dropdown-menu1');
  const servicesLink = document.getElementById('services-link1');
  if (dropdown && !dropdown.contains(event.target) && !servicesLink.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

watch(() => route.path, () => {
  const currentPath = route.path;  
  const foundItem = list.find(item => item.path === currentPath);
  if (foundItem) {
    activePage.value = foundItem.name;
  } else {
    activePage.value = '';
  }
});
</script>

<template>
    <div class="flex flex-col items-center w-full h-full shadow-[10px_10px_10px_100vw_rgba(0,0,0,0.5)] ">

        <div class="bg-Bg/3 flex flex-col items-start text-right gap-2 p-7 pt-12 w-full">

            <div class="w-[40px] h-[40px]">
                <img src="../../assets/adminPhoto/c82378950ce20a11d88ae82cc904617a.png" class="object-cover rounded-full w-full h-full" >
            </div>

            <div class="flex flex-col gap-1">
                <p class="font-normal text-[16px] leading-[25.6px]">رقیه رنجبری</p>
                <p class="font-normal text-[12px] leading-[19.2px] text-txt2">کارشناس سئو و بازاریاب دیجیتال</p>
            </div>

        </div>

        <div class="bg-Bg/1 flex flex-col gap-3 items-start text-right w-[208px] p-3 pt-6 ">
            <p class="text-[10px] font-light leading-[17.58px] text-txt3">منو</p>
            <div class="grid gap-6">
                <NuxtLink 
                    v-for="item in list" 
                    :to="item.path"  
                    :key="item.name" 
                    class="text-sm relative text-[#050D05] cursor-pointer flex gap-1 text-[16px] text-right font-medium leading-[19.2px]" 
                    @click="item.title === 'خدمات' ? toggleDropdown1() : setActive(item.name)"
                    :id="item.title === 'خدمات' ? 'services-link1' : undefined" 
                >
                    {{ item.title }} 
                    <img v-if="item.title === 'خدمات'" src="../../assets/icons/Size=16px, Icon=Arrows-Down (1).svg" alt="icon" class="w-[16px]">
                    <div v-if="activePage === item.name && item.title !== 'خدمات' " class="absolute left-0 right-0 bottom-[-5px] h-[4px] bg-[#13144E] transition-all duration-300 rounded-full pt-1"></div>
                </NuxtLink>
            
                <div v-if="showDropdown1" id="dropdown-menu1" class="absolute left-16 mt-[68px] bg-Bg/6 shadow-lg grid gap-2 rounded-xl text-txt2 py-3 px-4">
                    <NuxtLink v-for="item in servicesList" :key="item" :to="item.path" @click="showDropdown1 = false" class="block cursor-pointer text-[12px] leading-[160%]">{{ item.title }}</NuxtLink>
                </div>
            </div>
        </div>
       
        <div class="bg-Bg/1 w-[208px] flex items-center justify-center pt-20 pb-6 gap-2 mt-auto">
            <NuxtLink v-for="item in SocialImg" :key="item" :to="item.url" target="_blank">
                <img :src="item.img" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
        </div>


    </div>
</template>

<style scoped>
#dropdown-menu1 {
    z-index: 100000 !important;
}
</style>