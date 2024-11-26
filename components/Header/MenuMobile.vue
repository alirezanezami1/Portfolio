<script setup>
const list = ArrayMenu()
</script>

<template>
    <div class="flex flex-col items-center w-full h-[800px] shadow-[10px_10px_10px_100vw_rgba(0,0,0,0.5)] ">

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
            <NuxtLink v-for="item in list" :key="item" class="text-sm text-txt1 cursor-pointer flex flex-col gap-1 mb-3 text-[16px] text-right font-medium leading-[19.2px] "  >
             <div class="flex gap-1">
                   {{ item.title }} <img v-if="item.title === 'خدمات' " src="../../assets/icons/Size=16px, Icon=Arrows-Down (1).svg" alt="icon"  class="w-[16px]">
             </div>
             <!-- <div class="w-[69px] h-[4px] bg-[#13144E] rounded-full"></div> -->
            
            </NuxtLink>
        </div>
       
        <div class="bg-Bg/1 w-[208px] flex items-center justify-center pt-20 pb-6 gap-2 mt-auto">
            <NuxtLink>
                <img src="../../assets/mediaIcons/whatsapp.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
            <NuxtLink>
                <img src="../../assets/mediaIcons/instagram.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
            <NuxtLink>
                <img src="../../assets/mediaIcons/Telegram.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
            <NuxtLink>
                <img src="../../assets/mediaIcons/Linkedin.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
        </div>


    </div>
</template>