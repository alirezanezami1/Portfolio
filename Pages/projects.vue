<script setup>
const slides = ArrayProject()
const selectedType = ref('all');

// محاسبه نوع‌های منحصر به فرد
const uniqueTypes = computed(() => {
  const types = slides.map(slide => slide.type);
  return [...new Set(types)];
});

// فیلتر کردن پروژه‌ها
const filteredSlides = computed(() => {
  if (selectedType.value === 'all') {
    return slides;
  }
  return slides.filter(slide => slide.type === selectedType.value);
});

// تابع فیلتر کردن
const filterProjects = (type) => {
  selectedType.value = type;
};
</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20 gap-8">

        <div class="background">
            <img src="/backgrounds/Project-Desktop (1).png">
        </div>

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

                    <div>
                        <button class="flex justify-center items-center gap-[5px] rounded-full bg-btn2 py-[6px] px-3 text-[14px] text-txt4"><img src="../assets/icons/Add Circle.svg">نمونه کار جدید</button>
                    </div>

            </div>

            <div class="flex justify-center items-center flex-wrap gap-3 text-black">
                <button @click="filterProjects('all')" :class="['px-3 py-2 rounded-lg bg-white border border-txt3' ,{ active: selectedType === 'all' }]">همه</button>
                <button class="px-3 py-2 rounded-lg bg-white border border-txt3" v-for="type in uniqueTypes" :key="type" @click="filterProjects(type)" :class="{ active: selectedType === type }">
                  {{ type }}
                </button>
            </div>

            <ProjectsComponente :showCount="slides.length" :slides="filteredSlides"></ProjectsComponente>


        </div>

        <!-- /// Social Media  -->
        <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
        </div>

    </div>
</template>

<style scoped>
.background {
  position: absolute;
  background-size: cover; 
  background-position: center; 
  top: 2%;
  left: -5%;
  width: 100vw;
  z-index: -1000 ; 
}

@media screen and (max-width : 760px) {
    .background {
        display: none;
    }
}
.active {
  background-color: #13144E; /* رنگ پس‌زمینه فعال */
  color: white; /* رنگ متن فعال */
}
</style>