<script setup>
import { ref, watch } from 'vue';
import 'vidstack/bundle';

const videoPlayer = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

// تابع برای پخش و توقف ویدیو
const togglePlay = () => {
  if (isPlaying.value) {
    videoPlayer.value.pause();
  } else {
    videoPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

// تابع برای بازنشانی وضعیت ویدیو
const resetVideo = () => {
  isPlaying.value = false; // Reset the play state when the video ends
  currentTime.value = 0; // Reset the current time
};

// تابع برای به‌روزرسانی خط زمان
const updateProgress = () => {
  currentTime.value = videoPlayer.value.currentTime;
  duration.value = videoPlayer.value.duration;
};

// تابع برای جستجو در ویدیو
const seekVideo = () => {
  videoPlayer.value.currentTime = currentTime.value;
};

// تابع برای فرمت کردن زمان
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// نظارت بر تغییرات زمان ویدیو
watch(currentTime, (newTime) => {
  if (newTime >= duration.value) {
    resetVideo();
  }
});
</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20">

        <!-- //// links  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>درباره من</span>
        </div>

        <!-- //// intro and video  -->
        <div class="flex justify-between items-center my-10 gap-14">

            <!-- //// right  -->
            <div class="flex flex-col justify-center items-start gap-16">

                <div class="w-[91px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot> درباره من</div>

                <div class="text-right flex flex-col gap-4">
                    <p class="text-[16px] leading-[120%] font-normal">سلام 👋 دوستان ، من </p>
                    <h1 class="text-[44px] leading-[140%] lg:text-[56px] lg:leading-[120%] font-bold">رقیه رنجبری ام </h1>
                </div>

                <div class="flex flex-col justify-center items-center gap-[22px] text-txt6 text-[16px] leading-[160%]">
                    <p>سلام! من رقیه رنجبری هستم، یک کارشناس سئو با 8 سال تجربه در بهینه سازی وبسایت‌ها برای موتورهای جستجو. علاقه من به دنیای دیجیتال و کمک به کسب‌وکارها برای رشد آنلاین، انگیزه‌ای قوی برای من بوده تا در این حوزه فعالیت کنم.</p>
                    <p>من به عنوان یک کارشناس سئو، به طور مداوم در حال یادگیری آخرین الگوریتم‌ها و بهترین روش‌های سئو هستم. با استفاده از دانش و تجربه خود، به کسب‌وکارها کمک می‌کنم تا در نتایج جستجوی گوگل رتبه بالاتری کسب کنند و ترافیک ارگانیک خود را افزایش دهند.</p>
                    <p>در حال حاضر تجربه سئو بیش از 50 پروژه مختلف در حوزه های پزشکی، بازرگانی، حسابداری، فروشگاهی، خدماتی و ..... دارم و موفق شدم به ده ها کسب و کار در زمینه مشاوره سئو خدمات داده و مشکلات سایت هاشون رو حل کنم.</p>
                </div>

            </div>


            <!-- //// left  -->
             <div class="flex flex-col justify-center items-center gap-6">

                <video src="../Public/videos/aboutMe/IMG_6111.MOV" type="video/mp4" class="w-[416px] h-[416px]" ref="videoPlayer" @ended="resetVideo" @timeupdate="updateProgress"></video>

                <button @click="togglePlay" class="bg-btn1 p-3 text-white rounded-lg">
                  {{ isPlaying ? 'متوقف کردن' : 'پخش' }}
                </button>

                <div class="flex items-center w-full">
        <span >{{ formatTime(currentTime) }}</span>
        <input type="range" ref="progressBar" class="w-full mx-2" min="0" :max="duration" v-model="currentTime" @input="seekVideo" />
        <span>{{ formatTime(duration) }}</span>
                </div>
      

             </div>

        </div>

        

        <!-- //// social media -->
        <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
        </div>

    </div>
</template>
<style scoped>
.time-text {
  color: #fff;
  font-size: 14px;
  margin: 0 10px;
}

.progress-bar {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

.progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
}

.progress-bar::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
}

.progress-bar::-ms-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
}

.progress-bar::-webkit-slider-runnable-track {
  background: #ddd;
  border-radius: 5px;
}

.progress-bar::-moz-range-track {
  background: #ddd;
  border-radius: 5px;
}

.progress-bar::-ms-track {
  background: #ddd;
  border-radius: 5px;
  height: 8px;
}
</style>