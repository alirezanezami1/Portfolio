<script setup>
import { ref, watch ,computed } from 'vue';

const videoPlayer = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const isFullscreen = ref(false); 

const togglePlay = () => {
  if (isPlaying.value) {
    videoPlayer.value.pause();
  } else {
    videoPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const resetVideo = () => {
  isPlaying.value = false; // Reset the play state when the video ends
  currentTime.value = 0; // Reset the current time
};

const updateProgress = () => {
  currentTime.value = videoPlayer.value.currentTime;
  duration.value = videoPlayer.value.duration;
};

const seekVideo = () => {
  videoPlayer.value.currentTime = currentTime.value;
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const toggleFullscreen = () => {
  if (!isFullscreen.value) {
    if (videoPlayer.value.requestFullscreen) {
      videoPlayer.value.requestFullscreen();
    } else if (videoPlayer.value.mozRequestFullScreen) { // Firefox
      videoPlayer.value.mozRequestFullScreen();
    } else if (videoPlayer.value.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoPlayer.value.webkitRequestFullscreen();
    } else if (videoPlayer.value.msRequestFullscreen) { // IE/Edge
      videoPlayer.value.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
  isFullscreen.value = !isFullscreen.value; // تغییر وضعیت تمام صفحه
};

watch(currentTime, (newTime) => {
  if (newTime >= duration.value) {
    resetVideo();
  }
});


</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20">

      <div class="background">
            <img src="/backgrounds/About me-Desktop.png" alt="background img">
        </div>

        <!-- //// لینک ها  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>درباره من</span>
        </div>

        <!-- //// ویدیو معرفی  -->
        <div class="flex flex-col lg:flex-row justify-between items-center my-20 gap-20 xl:gap-52">

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
             <div class="flex flex-col justify-center items-center gap-0 lg:gap-8 w-[328px] lg:w-auto">

              <div class="relative w-[328px] lg:w-[416px] h-[416px]">
                <video src="/videos/aboutMe/IMG_6111.MOV" poster="/videos/aboutMe/about-me2.jpg" type="video/mp4" class="w-[328px] lg:w-[416px] h-[416px] rounded-lg" ref="videoPlayer" @ended="resetVideo" @timeupdate="updateProgress"></video>

                <div class="flex items-center w-full timeLine">
                  <span class="time-text">{{ formatTime(currentTime) }}</span>
                  <div class="progress-container w-full mx-2">
                    <input type="range" ref="progressBar" class="progress-bar custom-range" min="0" :max="duration" v-model="currentTime" @input="seekVideo" />
                    <div class="progress-filled" :style="{ width: (currentTime / duration) * 100 + '%' }"></div>
                  </div>
                  <span class="time-text">{{ formatTime(duration) }}</span>
                </div>
      
                <button @click="toggleFullscreen" class="text-white fullScreen">
                  <IconsFullScreen></IconsFullScreen>
                </button>
              </div>

               <div class="flex justify-center items-center gap-5">
                <p class="text-[16px] leading-[160%] text-txt6">نکته مثبت من در ارائه گزارش منظم و ماهانه و همچنین پیگیری و پاسخگویی سریع به کارفرماست.</p>
                <div class="w-[92px]">
                  <button @click="togglePlay" class="bg-btn1 p-3 text-white rounded-full relative flex justify-center items-center">
                  <div class="wave-animation" v-if="isPlaying"></div>
                  <IconsPause v-if="isPlaying"></IconsPause>
                  <IconsPlay v-if="!isPlaying"></IconsPlay>
                </button>
                </div>
               </div>

             </div>

        </div>


        <!-- //// مهارت ها  -->
        <AboutSkills></AboutSkills>

        <!-- //// ابزارها  -->
        <AboutTools></AboutTools>

        <!-- //// چرا من  -->
         <AboutWhyMe></AboutWhyMe>
         
         
         <!-- //// مدرک -->
          <div class="flex flex-col-reverse min-[1186px]:flex-row justify-center items-center my-20 w-[328px] md:w-full">
            <div class="flex justify-center items-center p-5 min-[1186px]:p-0 bg-Bg/2 rounded-2xl">
              <img src="/img/about/license/Frame 344.png">
            </div>
            <div class="flex justify-center items-center bg-Bg/1 min-[1186px]:bg-Bg/2 w-[328px] min-[1186px]:w-[620px] h-[384px] rounded-2xl ">
              <div class="flex flex-col justify-center items-center gap-5 min-[1186px]:gap-24 p-0 min-[1186px]:p-20">
                <div class="w-[160px] h-[36px] bg-Bg/3 min-[1186px]:bg-Bg/5 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full text-txt1 min-[1186px]:text-white"><IconsDot class="block min-[1186px]:hidden"></IconsDot>مدارک و گواهینامه ها</div>
                <div class="flex flex-col gap-4 justify-center items-center text-center">
                  <h6 class="text-[18px] leading-[140%] font-bold text-txt1 min-[1186px]:text-white">مدارک و گواهینامه‌های تخصصی: راه موفقیت من در سئو</h6>
                  <p class="text-[16px] leading-[160%] text-txt2 min-[1186px]:text-white opacity-60">نگاهی به دوره‌ها و گواهینامه‌هایی که به من کمک کرده‌اند تا در صنعت سئو به روز و توانمند بمانم</p>
                </div>
              </div>
            </div>
          </div>


        <!-- //// سوشال مدیا -->
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
  top: 1.5%;
  left: -6%;
  width: 100vw;
  /* height: 200px !important; */
  z-index: -1000 ; 
}

.time-text {
  color: white;
  font-size: 14px;
  margin: 0 10px;
  opacity: 1;
}

.custom-range {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #707076; 
  border-radius: 5px;
  outline: none;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #707076;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.custom-range::-moz-range-thumb {
  width: 16px; 
  height: 16px; 
  border-radius: 50%;
  background: #707076;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.custom-range::-ms-thumb {
  width: 16px; 
  height: 16px;
  border-radius: 50%;
  background: #707076; 
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.custom-range::-webkit-slider-runnable-track {
  background: rgba(0,0, 0, .14); 
  border-radius: 5px;
}

.custom-range::-moz-range-track {
  background: rgba(0,0, 0, .14); 
  border-radius: 5px;
}

.custom-range::-ms-track {
  background: rgba(0,0, 0, .14); 
  border-radius: 5px;
  height: 8px;
}

.custom-range:focus {
  outline: none; 
}

.custom-range:focus::-webkit-slider-thumb {
  background: #707076; 
}

.custom-range:focus::-moz-range-thumb {
  background: #707076; 
}

.custom-range:focus::-ms-thumb {
  background: #707076; 
}

.progress-container {
  position: relative;
  width: 100%;
}

.progress-bar {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: transparent; 
  outline: none;
  position: relative;
  cursor: pointer;
  z-index: 2; 
}

.progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0px;
  height: 12px;
  border-radius: 50%;
  background: #707076; 
  cursor: pointer;
  position: relative;
  right: -2px;
  z-index: 10;
}

.progress-filled {
  position: absolute;
  height: 12px; 
  background: #707076; 
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  right: 0;
  z-index: 1; 
  transition: width 0.1s; 
}

.timeLine {
  position: absolute;
  bottom: 7% ;
  width: 90%;
}

.fullScreen {
  position: absolute;
  bottom: 15%;
  right: 6% !important;
}

@media screen and (max-width : 1024px) {
  .timeLine {
  position: absolute;
  bottom: 10%;
  width: 90%;
}
.fullScreen {
  position: absolute;
  bottom: 20%;
  right: 2%;
}
}

.wave-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 65px;
  height: 65px;
  background: rgba(19, 20, 78, 1); 
  border-radius: 50%;
  transform: translate(-50%, -50%); 
  animation: wave 1.8s infinite; 
  opacity: 0;
}

@keyframes wave {
  0% {
    transform: translate(-50%, -50%) scale(0.5); 
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0; 
  }
  100% {
    transform: translate(-50%, -50%) scale(0.5); 
    opacity: 0;
  }
}
</style>