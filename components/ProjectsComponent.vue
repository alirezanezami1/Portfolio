<script setup>
import { defineProps, ref } from 'vue';
import axios from 'axios';
const slides = ref([])

const fetchProjects = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/portfolio');         
        slides.value = response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};

const props = defineProps({
  showCount: {
    type: Number,
    default: 3, // 
  },
  slides: {
    type: Array,
    default: () => [],
  },
});

const containerRefTwo = ref(null)

const swiperTwo = useSwiper(containerRefTwo)

const accordionOpen = ref(0)
const toggleAccordion = function (index) {
    accordionOpen.value = accordionOpen.value === index ? null : index
}

const projectsToShow = computed(() => {
  return props.slides.slice(0, props.showCount);
});

onMounted(async () => {
    await fetchProjects()
})

</script>

<template>
     <div class="flex flex-col justify-center items-center w-[350px] min-[1303px]:w-[1281px] mx-20 gap-2" >
                    
                    <div class="flex flex-col w-full bg-Bg/3 rounded-2xl" v-for="(slide , index) in projectsToShow" :key="index" :v-if="index < props.showCount">

                        <div class="flex justify-between items-center p-4">

                            <div class="flex justify-center items-center gap-[153px]">

                                <div class="flex justify-start items-center gap-8 text-start">
                                
                                    <div class="text-[40px] font-medium leading-[160%] text-center">
                                        <span>0{{ index + 1 }}</span>
                                    </div>
                                
                                    <div class="flex flex-col gap-1">
                                        <p class="text-[16px] min-[1303px]:text-[20px] leading-[160%] font-medium">نام پروژه: {{ slide.project_name }}</p>
                                        <p class="text-[14px] min-[1303px]:text-[16px] leading-[160%] font-light text-txt2 hidden min-[1303px]:block">زمینه فعالیت : {{ slide.field_project }}</p>
                                    </div>
                                
                                </div>
                            
                                <div class="justify-center items-center gap-[10px] px-6 py-3 rounded-full border-2 border-Bg/2 text-txt4 hidden min-[1303px]:flex">
                                    نوع پروژه : <span>{{ slide.type_project }}</span>
                                </div>

                            </div>


                            <div class="cursor-pointer w-[48px] h-[48px] bg-Bg/2 rounded-full flex justify-center items-center" @click="() => toggleAccordion(index)">
                                <IconsDownBg v-if="accordionOpen !== index"></IconsDownBg>
                                <IconsUpBg  v-if="accordionOpen === index"></IconsUpBg>
                            </div>


                        </div>


                        <div class="flex flex-col gap-6 justify-center items-start w-[328px] min-[1303px]:w-full px-4 min-[1303px]:px-20 pt-2 pb-6 " v-if="accordionOpen === index">

                            <p class="text-[14px] min-[1303px]:text-[16px] leading-[160%] font-light text-txt2 block min-[1303px]:hidden ">زمینه فعالیت : {{ slide.field_project }}</p>

                            <div class="flex gap-2 text-[14px] min-[1303px]:text-[16px] leading-[160%] font-light text-txt2 text-start min-[1303px]:hidden">
                                نوع پروژه : <span>{{ slide.type_project }}</span>
                            </div>

                            <div class="flex gap-2 text-[14px] min-[1303px]:text-[16px] leading-[160%] font-light text-txt2 text-start">
                                <img src="../assets/icons/Clock Circle.svg" alt="time">
                                <p>مدت زمان : <span>{{ slide.timer_project }}</span></p>
                            </div>

                            <div class="w-[328px] min-[1303px]:w-[1121px] h-full sliderContainer">
                                            <ClientOnly>
                                                <swiper-container ref="containerRefTwo" :spaceBetween="20" :slidesPerView="1.2"  >
                                                  <swiper-slide
                                                    v-for="(img, idx) in slide.image"
                                                    :key="idx" 
                                                  >
                                                    <div class="flex flex-col gap-4">
                                                        <img :src="`http://127.0.0.1:8000/${img}`" class="w-fit h-[318px] min-[1303px]:h-auto min-[1303px]:w-[600px] object-cover rounded-xl"  style="width: 100%; height: auto;">
                                                        <div class="text-[16px] leading-[160%] font-thin text-txt1">
                                                            <p>{{ slide.key_words.split(',')[idx]?.trim() }}</p>
                                                        </div>
                                                    </div>
                                                  </swiper-slide>
                                                </swiper-container>
                                            </ClientOnly>
                            </div>

                        </div>

                    </div>


        </div>
</template>

<style>
@media screen and (max-width : 760px) {
    .background {
        display: none;
    }
}
@media (max-width: 640px) {
    .swiper-slide {
        width: 100% !important;
        height: auto !important; /* یا ارتفاع مشخص */
    }
    .sliderContainer {
        width: 328px;
        overflow: hidden;
        /* z-index: -100; */
    }
}
</style>