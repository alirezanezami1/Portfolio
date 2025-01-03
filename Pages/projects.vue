<script setup>
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

const selectedType = ref('all');


const uniqueTypes = computed(() => {
  const types = slides.value.map(slide => slide.type_project);
  return [...new Set(types)];
});


const filteredSlides = computed(() => {
  if (selectedType.value === 'all') {
    return slides.value;
  }
  return slides.value.filter(slide => slide.type_project === selectedType.value);
});


const filterProjects = (type) => {
  selectedType.value = type;
};

const showNewProject = ref(false)

const closeNewProject = () => {
  showNewProject.value = false;
}

let checkUser = ref('')

onMounted(async () => {
    await fetchProjects();

    const getItem = localStorage.getItem('adminTokenLogin')
    if(getItem){
        checkUser.value = getItem
    }
});
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
                        <button class="flex justify-center items-center gap-[5px] rounded-full bg-btn2 py-[6px] px-3 text-[14px] text-txt4" v-if="checkUser" @click="showNewProject = true"><img src="../assets/icons/Add Circle.svg">نمونه کار جدید</button>
                    </div>

            </div>

            <div class="flex justify-center items-center flex-wrap gap-3 text-black">
                <button @click="filterProjects('all')" :class="['px-3 py-2 rounded-lg bg-white border border-txt3' ,{ active: selectedType === 'all' }]">همه</button>
                <button class="px-3 py-2 rounded-lg bg-white border border-txt3" v-for="type in uniqueTypes" :key="type" @click="filterProjects(type)" :class="{ active: selectedType === type }">
                  {{ type }}
                </button>
            </div>

            <ProjectsComponent :showCount="slides.length" :slides="filteredSlides"></ProjectsComponent>


        </div>

        <!-- /// Social Media  -->
        <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
        </div>


        <div v-if="showNewProject" class="overlay" @click="closeNewProject">
            <div class="error-container rounded-lg" @click.stop> <!-- جلوگیری از بستن هنگام کلیک روی کامپوننت خطا -->
                <AddNewProject :closeNewProject="closeNewProject" />
            </div>
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
  background-color: #13144E; 
  color: white; 
}

.overlay {
    position: fixed; 
    bottom: 0;
    left: 0; 
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.24); 
    display: flex; 
    justify-content: center; 
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(8px);
}

@media screen and (max-width:640px) {
  .error-container {
    position: fixed;
    bottom: 0;
  }
}
</style>