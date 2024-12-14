<script setup>
import { ref, watch  } from 'vue';
const hint = ['گوگل ادز چه کمکی بهت می کنه ؟' , 'مراحل ایجاد یک کمپین گوگل ادز به چه صورت است ؟']
const ads = ['مشخص کردن هدف کمپین (گرفتن لید، ترافیک، برند اورنس یا فروش)' , ' مشخص کردن تاریخ و زمان نمایش تبلیغات' , 'مشخص کردن مخاطبین هدف' , 'تنظیمات قیمت گذاری کمپین' , 'تعیین بودجه روزانه، بید استراتژی و بید' , 'ساخت ادد گروپ و تعیین کلمات کلیدی']

const videoPlayer = ref(null);
const isPlayingSeoVideo = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const isFullscreen = ref(false); 

// تابع برای پخش و توقف ویدیو
const togglePlaySeo = () => {
  if (isPlayingSeoVideo.value) {
    videoPlayer.value.pause();
  } else {
    videoPlayer.value.play();
  }
  isPlayingSeoVideo.value = !isPlayingSeoVideo.value;
};

// تابع برای بازنشانی وضعیت ویدیو
const resetVideo = () => {
    isPlayingSeoVideo.value = false; // Reset the play state when the video ends
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

// تابع برای ورود و خروج از حالت تمام صفحه
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

// نظارت بر تغییرات زمان ویدیو
watch(currentTime, (newTime) => {
  if (newTime >= duration.value) {
    resetVideo();
  }
});
</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20">

        <div class="background1">
            <img src="/backgrounds/Services-Google Ads -Desktop.png" alt="background img">
        </div>

        <!-- //// لینک ها  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-[328px] md:w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <NuxtLink class="flex justify-center items-center gap-2 text-txt2 ">خدمات<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>گوگل ادز</span>
        </div>

         <!-- //// بنر  -->
         <div class="flex justify-center items-center w-[328px] md:w-full my-10">
            <img src="/img/seo-ads/Frame 450.png" alt="banner" class="hidden md:block">
            <img src="/img/seo-ads/Frame 450 (1).png" alt="banner" class="flex md:hidden">
        </div>

        <!-- //// مواردی که در این صفحه به آنها اشاره خواهد شد : -->
        <div class="flex flex-col justify-start gap-10 items-start rounded-2xl my-20 w-[328px] md:w-full border border-txt3 p-10">
            <h5 class="text-[20px] leading-[140%] text-txt1 font-bold">مواردی که در این صفحه به آنها اشاره خواهد شد :</h5>
            <div class="flex flex-col justify-start items-start gap-5">
                <p v-for="item,index in hint" :key="index" class="text-[14px] md:text-[16px] leading-[160%] text-txt4"><span>{{ index + 1 }}.</span>{{ item }}</p>
            </div>
        </div>

        <!-- //// ویدیو  -->
        <div class="flex justify-center items-center my-20 relative w-full">
            <div class="background">
            <img src="/backgrounds/24px Cross.png" alt="background">
            </div>

            <div class="flex justify-center items-center rounded-[28px] w-full md:w-fit p-3 md:p-6 h-fit bg-Bg/7 relative">
                <video src="/videos/Ads/IMG_6262.MOV" poster="/videos/Ads/google-ads.jpg" class="w-fit h-fit rounded-xl" ref="videoPlayer" @ended="resetVideo" @timeupdate="updateProgress" ></video>
                <img src="../../Public/img/videoPlayer/Vector 2820.png" class="absolute w-[72px] md:w-auto h-[75px] md:h-auto rotate-90 md:rotate-0 -right-0 -top-10 md:-right-24 md:-top-16">
                <img src="../../Public/img/videoPlayer/Vector 2821.png" class="absolute w-[72px] md:w-auto h-[75px] md:h-auto rotate-[30deg] md:rotate-0 -left-0 -top-10 md:-left-16 md:top-[85%]">
            
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
            
                <div class="flex justify-center items-center gap-5 absolute left-1/2 -translate-x-[75%]">
                <div class="w-[92px]">
                  <button @click="togglePlaySeo" class="bg-btn1 p-3 text-white rounded-full relative flex justify-center items-center">
                  <div class="wave-animation" v-if="isPlayingSeoVideo"></div>
                  <IconsPause  v-if="isPlayingSeoVideo" ></IconsPause>
                  <IconsPlay v-if="!isPlayingSeoVideo"></IconsPlay>
                </button>
                </div>
               </div>
           
            </div>
        </div>

        <!-- //// ادز  -->
        <div class="flex flex-col justify-start items-start w-[328px] md:w-full my-10 gap-4 ">
            <div class="flex flex-col justify-start items-start gap-6">
                <div class="flex flex-col justify-start items-start gap-6">
                    <div class="w-[171px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot>چه کمکی بهت می کنه ؟</div>
                    <div class="flex justify-start items-start gap-2"><IconsStar></IconsStar><h6 class="text-[18px] leading-[140%] font-bold text-txt1">گوگل ادز چه کمکی بهت می کنه ؟</h6></div>
                </div>

                <div class="flex flex-col justify-start items-start gap-4 text-txt6 text-[16px] leading-10">
                    <p>اگه سایتت تازه لانچ شده و تایم نداری که سئو کار کنی و سایت رو بالا بیاری می تونی با صرف هزینه از تبلیغات گوگل ادز استفاده کنی و بعد از چند ساعت، سایتت رو توی نتایج بالای سرپ گوگل ببینی!</p>
                    <p>درواقع گوگل ادز کمک میکنه که بدون نیاز به سئو و تنها با صرف هزینه، روی سایتت ترافیک ایجاد کنی. برخی اوقات برای اینکه بدونیم پتانسیل اون حوزه، چقدره و چه کلماتی بیشتر پولسازن، قبل از اینکه سئو رو استارت بزنیم، یه کمپین ادز روی سایت ران می کنیم تا بفهمیم بهتره تمرکزمون رو روی چه صفحات و چه کلماتی بذاریم.</p>
                </div>
            </div>
        </div>

        <!-- //// مراحل گوگل ادز  -->
        <div class="flex flex-col justify-start items-start w-[328px] md:w-full my-10 gap-4">
            <div class="flex flex-col justify-start items-start gap-8">
                <div class="flex flex-col justify-start items-start gap-6">
                    <div class="flex justify-start items-start gap-2"><IconsStar></IconsStar><h6 class="text-[18px] leading-[140%] font-bold text-txt1">مراحل ایجاد یه کمپین گوگل ادز به این صورته که : </h6></div>
                </div>

                <div class="flex flex-col justify-start items-start gap-4 text-txt6 text-[16px] leading-10">
                    <p v-for="item,index in ads" :key="index" class="text-[14px] md:text-[16px] leading-[160%]"><span>{{ index + 1 }}.</span>{{ item }}</p>
                </div>
            </div>
        </div>

         <!-- //// مشاوره -->
         <div class="flex flex-col justify-center items-center my-10 gap-16 w-full">
              <div class="w-[328px] md:w-[536px]">
                <img src="/img/seo/Group 71.png" alt="img" class="w-full">
              </div>

              <div class="flex flex-col justify-center items-center w-[328px] md:w-full gap-8">
                <div class="flex flex-col justify-center items-center gap-6 text-center">
                  <h3 class="text-[20px] md:text-[32px] leading-[140%] font-bold">من توی تیمم یه کمپین منیجر حرفه ای دارم</h3>
                  <p class="text-[16px] md:text-[18px] leading-[160%] opacity-80 text-txt6">من توی تیمم یه کمپین منیجر حرفه ای دارم که میتونه واستون یه کمپین رپورتاژ عالی با بالاترین بازدهی رو ران کنه. اگه تمایل دارید، شماره تماستون رو بگذارید تا در اسرع وقت با شما تماس بگیریم و جزئیات کار رو با هم بررسی کنیم.</p>
                </div>

                <NuxtLink to="/contact">
                  <button class="flex justify-center items-center gap-3 p-3 bg-Bg/2 text-white rounded-lg">فرم ارتباط با من<IconsArrowLeftWhite></IconsArrowLeftWhite></button>
                </NuxtLink>
              </div>
        </div>

    </div>
</template>

<style scoped>
.background1 {
  position: absolute;
  background-size: cover; 
  background-position: center; 
  top: 5%;
  left: -6%;
  width: 100vw;
  /* height: 200px !important; */
  z-index: -1000 ; 
}

.background {
  position: absolute;
  background-size: cover; 
  background-position: center; 
  top: 10%;
  left: -11%;
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
  background: #707076; /* رنگ پس‌زمینه نوار */
  border-radius: 5px;
  outline: none;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; /* عرض دکمه */
  height: 16px; /* ارتفاع دکمه */
  border-radius: 50%;
  background: #707076; /* رنگ دکمه */
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.custom-range::-moz-range-thumb {
  width: 16px; /* عرض دکمه */
  height: 16px; /* ارتفاع دکمه */
  border-radius: 50%;
  background: #707076; /* رنگ دکمه */
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.custom-range::-ms-thumb {
  width: 16px; /* عرض دکمه */
  height: 16px; /* ارتفاع دکمه */
  border-radius: 50%;
  background: #707076; /* رنگ دکمه */
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.custom-range::-webkit-slider-runnable-track {
  background: rgba(0,0, 0, .14); /* رنگ پس‌زمینه نوار */
  border-radius: 5px;
}

.custom-range::-moz-range-track {
  background: rgba(0,0, 0, .14); /* رنگ پس‌زمینه نوار */
  border-radius: 5px;
}

.custom-range::-ms-track {
  background: rgba(0,0, 0, .14); /* رنگ پس‌زمینه نوار */
  border-radius: 5px;
  height: 8px;
}

.custom-range:focus {
  outline: none; /* حذف حاشیه هنگام تمرکز */
}

.custom-range:focus::-webkit-slider-thumb {
  background: #707076; /* رنگ دکمه در حالت تمرکز */
}

.custom-range:focus::-moz-range-thumb {
  background: #707076; /* رنگ دکمه در حالت تمرکز */
}

.custom-range:focus::-ms-thumb {
  background: #707076; /* رنگ دکمه در حالت تمرکز */
}

.progress-container {
  position: relative;
  width: 100%;
}

.progress-bar {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: transparent; /* پس‌زمینه شفاف برای نوار */
  outline: none;
  position: relative;
  cursor: pointer;
  z-index: 2; /* قرار دادن نوار پیشرفت بالای پس‌زمینه */
}

.progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0px; /* عرض دکمه */
  height: 12px; /* ارتفاع دکمه */
  border-radius: 50%;
  background: #707076; /* رنگ دکمه */
  cursor: pointer;
  position: relative;
  right: -2px;
  z-index: 10; /* قرار دادن دکمه بالای نوار */
}

.progress-filled {
  position: absolute;
  height: 12px; /* ارتفاع نوار */
  background: #707076; /* رنگ سبز برای زمان سپری شده */
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  right: 0;
  z-index: 1; /* قرار دادن پس‌زمینه زیر دکمه */
  transition: width 0.1s; /* انیمیشن برای تغییر عرض */
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
  width: 65px; /* اندازه موج */
  height: 65px; /* اندازه موج */
  background: rgba(19, 20, 78, 1); /* رنگ موج */
  border-radius: 50%; /* گرد کردن موج */
  transform: translate(-50%, -50%); /* مرکز کردن موج */
  animation: wave 1.8s infinite; /* انیمیشن موج */
  opacity: 0; /* مخفی کردن موج */
}

@keyframes wave {
  0% {
    transform: translate(-50%, -50%) scale(0.5); /* شروع با اندازه کوچک */
    opacity: 1; /* شروع با وضوح کامل */
  }
  50% {
    transform: translate(-50%, -50%) scale(1); /* بزرگ شدن */
    opacity: 0; /* محو شدن */
  }
  100% {
    transform: translate(-50%, -50%) scale(0.5); /* بازگشت به اندازه کوچک */
    opacity: 0; /* محو شدن */
  }
}
</style>