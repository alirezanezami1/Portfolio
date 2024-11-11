<script setup>
const list = ArrayMenu()

const socialMedia = ref([
    {
        url : '~/assets/mediaIcons/Elemento (1).png',
        mediaLink : ''
    },
    {
        url : '../../assets/mediaIcons/Elemento.png',
        mediaLink : ''
    },
    {
        url : '../../assets/mediaIcons/Linkedin.png',
        mediaLink : ''
    },
    {
        url : '../../assets/mediaIcons/Telegram.png',
        mediaLink : ''
    }
])

</script>

<template>
    <div class="flex flex-col items-center w-full">

        <div class="bg-Bg/3 flex flex-col items-start text-right gap-5 p-3 pt-8 pl-10">

            <div class="w-[40px] h-[40px]">
                <img src="../../assets/adminPhoto/c82378950ce20a11d88ae82cc904617a.png" class="object-cover rounded-full w-full h-full" >
            </div>

            <div class="flex flex-col gap-1">
                <p class="font-normal text-[16px] leading-[25.6px]">رقیه رنجبری</p>
                <p class="font-normal text-[12px] leading-[19.2px] text-txt2">کارشناس سئو و بازاریاب دیجیتال</p>
            </div>

        </div>

        <div class=" flex flex-col gap-3 items-start text-right w-[208px] p-3 mt-2">
            <p class="text-[10px] font-light leading-[17.58px] text-txt3">منو</p>
            <NuxtLink v-for="item in list" :key="item" class="text-sm text-txt1 cursor-pointer flex gap-1 mb-3 text-[16px] text-right font-medium leading-[19.2px]">
                {{ item.title }} <img v-if="item.title === 'خدمات' " src="../../assets/icons/Size=16px, Icon=Arrows-Down (1).svg" alt="icon"  class="w-[16px]">
            </NuxtLink>
        </div>


        <div class="w-[208px] flex gap-4">
            <NuxtLink v-for="item in socialMedia" :key="item" :href="item.mediaLink">
                <img :src="item.url" alt="socialMedia" class="w-[40px]">
            </NuxtLink>
        </div>


    </div>
</template>