<script setup>
const slides = ArrayProject()
</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20 gap-8">

        <!-- //// Links -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>نمونه کارها</span>
        </div>

        <!-- //// Projects  -->
        <div class="flex flex-col justify-center items-center gap-20 my-10 mx-5 lg:mx-20">

            <div class="flex flex-col gap-6 justify-center items-center w-[328px] min-[1303px]:w-[753px]">
    <div class="w-[101px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full">
        <IconsDot></IconsDot>نمونه کارها
    </div>

    <div class="flex flex-col justify-center items-center gap-4 text-center">
        <h6 class="text-[18px] leading-[140%] font-bold">پروژه‌های سئو که به رتبه‌های برتر رسیده‌اند</h6>
        <p class="text-[16px] leading-[160%] font-medium text-txt2">نگاهی جامع به پروژه‌های موفق سئو که با بهبود رتبه‌بندی، افزایش ترافیک ارگانیک و رشد فروش، کسب‌وکارهای مختلف را به سطح بالاتری رسانده‌اند</p>
    </div>

            </div>


            <ProjectsComponente :showCount="slides.length"></ProjectsComponente>


        </div>

        <!-- /// Social Media  -->
        <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
        </div>

    </div>
</template>