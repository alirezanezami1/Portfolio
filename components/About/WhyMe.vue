<script setup>
const Items = [
    {img : '/img/about/whyMe/Frame 332 (1).png' , title: 'گزارش دهی و تحلیل ' , description: 'ارائه گزارش های دقیق از عملکرد سئو و تحلیل نتایح برای بهبود مستمر '},
    {img : '/img/about/whyMe/Frame 332.png' , title: 'ارتباط موثر ' , description: 'من به ارتباط موثر با مشتریان اعتقاد دارم و در طول پروژه به طور منظم گزارش های پیشرفت را ارائه می دهم '},
    {img : '/img/about/whyMe/Frame 332 (2).png' , title: 'رویکرد داده محور' , description: 'تصمیم گیری های من براساس داده ها و تحلیل های دقیق است '},
    {img : '/img/about/whyMe/Frame 332 (3).png' , title: 'پشتیبانی مداوم ' , description: 'حتی پس از اتمام پروژه ، من آماده ارائه پشتیبانی و مشاوره به شما هستم '}
]
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 w-full my-20">
        <div v-for="item,index in Items" :key="index" class="flex flex-col justify-start items-start gap-8 px-4 py-6 rounded-xl w-[308px] h-[251px] lg:h-[300px] xl:h-[251px] bg-Bg/3">
            <img :src="item.img" alt="img">
            <div class="flex flex-col gap-4 justify-start items-start">
                <h6 class="text-[18px] leading-[140%] font-bold">{{ item.title }}</h6>
                <p class="text-[16px] leading-[160%] text-txt2">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>