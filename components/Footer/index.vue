<script setup>
const SocialImg = [
    { url : '' , img : '/img/Linkedin.png'},
    { url : '' , img : '/img/Whatsapp.png'},
    { url : '' , img : '/img/Instagram (1).png'},
    { url : '' , img : '/img/Telegram.png'},
]
</script>

<template>
    <div class="flex flex-col gap-7 w-full justify-center items-center bg-Bg/2 p-2 md:p-20">
        <div class="flex flex-col xl:flex-row justify-center items-center gap-16">
            <div class="flex flex-col gap-[26px] w-[328px] sm:w-[704px] xl:w-[512px]">
                <div class="flex flex-col justify-center items-start gap-4">
                    <div class="w-[40px] h-[40px]">
                        <img src="../../assets/adminPhoto/c82378950ce20a11d88ae82cc904617a.png" class="object-cover rounded-full w-full h-full" >
                    </div>
                
                    <div class="flex flex-col gap-1">
                        <p class="font-normal text-[20px] leading-[140%] md:text-[16px] md:leading-[25.6px] text-white">رقیه رنجبری</p>
                        <p class="font-normal text-[14px] leading-[160%] md:text-[16px] md:leading-[19.2px] text-txt5">کارشناس سئو و بازاریاب دیجیتال</p>
                    </div>
                </div>

                <div>
                    <p class="text-[16px] leading-[160%] text-txt5 font-thin">سلام! من رقیه رنجبری هستم، یک کارشناس سئو با 8 سال تجربه در بهینه سازی وبسایت‌ها برای موتورهای جستجو. علاقه من به دنیای دیجیتال و کمک به کسب‌وکارها برای رشد آنلاین، انگیزه‌ای قوی برای من بوده تا در این حوزه فعالیت کنم.</p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-start text-right gap-16 w-[328px] sm:w-full xl:w-[704px]">
                <div class="flex flex-col justify-start items-start gap-6">
                    <h4 class="text-[20px] md:text-[24px] leading-[140%] text-white">لینک های اصلی</h4>
                    <div class="flex flex-row md:flex-col text-[16px] leading-[160%] gap-8 md:gap-1 flex-wrap w-full md:w-auto justify-start md:justify-center items-start text-txt5">
                        <NuxtLink to="/" >صفحه اصلی</NuxtLink>
                        <NuxtLink to="/">خدمات</NuxtLink>
                        <NuxtLink to="/">نمونه کارها</NuxtLink>
                        <NuxtLink to="/">درباره من</NuxtLink>
                        <NuxtLink to="/">ارتباط با من</NuxtLink>
                    </div>
                </div>

                <div class="flex flex-col justify-start items-start gap-6">
                    <h4 class="text-[20px] md:text-[24px] leading-[140%] text-white">خدمات اصلی</h4>
                    <div class="flex flex-row md:flex-col text-[16px] leading-[160%] gap-8 md:gap-1 flex-wrap w-full md:w-auto justify-start md:justify-center items-start text-txt5">
                        <NuxtLink to="/" >انحام پروژه سئو</NuxtLink>
                        <NuxtLink to="/">مشاوره سئو</NuxtLink>
                        <NuxtLink to="/">منتورینگ سئو</NuxtLink>
                        <NuxtLink to="/">گوگل ادز</NuxtLink>
                        <NuxtLink to="/">تدوین استراتژی سئو</NuxtLink>
                        <NuxtLink to="/">طراحی سایت</NuxtLink>
                    </div>
                </div>

                <div class="flex flex-col gap-8 justify-center items-start">
                    <div class="flex flex-col justify-center items-start gap-6">
                        <h4 class="text-[24px] leading-[140%] text-white">راه های ارتباطی با من</h4>
                        <div class="flex flex-col gap-1 justify-center items-start">
                            <div class="flex justify-center gap-2 text-[16px] leading-[160%] text-txt5"><img src="../../assets/icons/Contact Phone Icon.png">شماره همراه : ۰۹۳۸۰۲۸۶۲۳۰</div>
                            <div class="flex justify-center gap-2 text-[16px] leading-[160%] text-txt5"><img src="../../assets/icons/Contact Email Icon.png">ایمیل : r.ranjbari67@gmail.com </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-[18px] justify-center items-start">
                        <h4 class="text-[24px] leading-[140%] text-white">شبکه های اجتماعی</h4>
                        <div class="flex gap-4 justify-center items-center cursor-pointer">
                            <NuxtLink v-for="item in SocialImg" :key="item"><img :src="item.img" class="w-[40px]"></NuxtLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="flex justify-center items-center gap-4 flex-col-reverse xl:flex-row">
            <div class="flex justify-center items-center gap-4">
            <span><img src="/img/Copyright.png" alt="Copyright"></span>
            <p class="text-[14px] md:text-[16px] leading-[160%] text-txt5">کلیه حقوق این وبسایت متعلق به سرکار خانم رقیه رنجبری می باشد</p>
            </div>

            <div>
                <img src="../../assets/icons/Vector 2812.png">
            </div>
        </div>
    </div>
</template>