<script setup>
import { ref, watch ,computed } from 'vue';
const hint = ['سئو  چیست ؟' , 'من چگونه می توانم به شما کمک کنم ؟' , 'اقدامات اولیه سئو ' , 'اقدامات سئو تکنیکال' , 'اقدامات سئو داخلی' , 'اقدامات سئو خارجی' , 'آنالیز سایت و میزان ورودی ها']

const videoPlayer = ref(null);
const isPlayingSeoVideo = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const isFullscreen = ref(false); 

const togglePlaySeo = () => {
  if (isPlayingSeoVideo.value) {
    videoPlayer.value.pause();
  } else {
    videoPlayer.value.play();
  }
  isPlayingSeoVideo.value = !isPlayingSeoVideo.value;
};

const resetVideo = () => {
    isPlayingSeoVideo.value = false; // Reset the play state when the video ends
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

      <div class="background1">
            <img src="/backgrounds/Services-Seo-Desktop.png" alt="background img">
        </div>

        <!-- //// لینک ها  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-[328px] md:w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <NuxtLink class="flex justify-center items-center gap-2 text-txt2 ">خدمات<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>سئوی سایت</span>
        </div>

        <!-- //// بنر  -->
        <div class="flex justify-center items-center w-[328px] md:w-full my-10">
            <img src="/img/seo/Frame 450.png" alt="banner" class="hidden md:block">
            <img src="/img/seo/Frame 450 (1).png" alt="banner" class="flex md:hidden">
        </div>

         <!-- //// مواردی که در این صفحه به آنها اشاره خواهد شد : -->
         <div class="flex flex-col justify-start gap-10 items-start rounded-2xl my-20 w-[328px] md:w-full border border-txt3 p-10">
            <h5 class="text-[20px] leading-[140%] text-txt1 font-bold">مواردی که در این صفحه به آنها اشاره خواهد شد :</h5>
            <div class="flex flex-col justify-start items-start gap-5">
                <p v-for="item,index in hint" :key="index" class="text-[14px] md:text-[16px] leading-[160%] text-txt4"><span>{{ index + 1 }}.</span>{{ item }}</p>
            </div>
         </div>

         <!-- //// ویدیو  -->
          <div class="flex justify-center items-center my-20 relative w-[328px] md:w-full ">

            <div class="background">
            <img src="/backgrounds/24px Cross.png" alt="background">
            </div>
            
            <div class="flex justify-center items-center rounded-[28px] w-fit p-3 md:p-6 h-fit bg-Bg/7 relative">
                <video src="/videos/seo/IMG_6117.MOV" poster="/videos/seo/whats-seo.jpg" class="w-fit h-fit rounded-xl" ref="videoPlayer" @ended="resetVideo" @timeupdate="updateProgress" ></video>
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

          <!-- //// سئو چیست  -->
          <div class="flex flex-col justify-start items-start w-[328px] md:w-full my-10 gap-4">
            <div class="flex flex-col justify-start items-start gap-6">
                <div class="flex flex-col justify-start items-start gap-6">
                    <div class="w-[61px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot>سئو</div>
                    <div class="flex justify-start items-start gap-2"><IconsStar></IconsStar><h6 class="text-[18px] leading-[140%] font-bold text-txt1">سئو چیست؟</h6></div>
                </div>

                <div>
                    <p class="text-txt6 text-[16px] leading-[60px] ">اگه یک کسب و کار فیزیکی داری اما دوست داری که یه سایت هم داشته باشی و محصولاتت رو به صورت آنلاین هم بفروشی، باید بتونی تو صفحه اول گوگل اون محصول و خدماتت رو به مشتری نشون بدی. <br>در حال حاضر اکثر افرادی که دنبال خرید محصول، پیدا کردن یه مرکز خوب واسه گرفتن خدمات و ... هستند اولین کاری که می کنند اینه که توی گوگل سرچ میزنن.<br>حالا وقتی سایت شما سئو شده باشه این فرصت رو خواهی داشت که با سرچ کاربر، بیای توی نتایج برتر گوگل و کاربر از بین هزار نتیجه، روی لینک شما کلیک کنه و وارد سایت شما بشه</p>
                </div>
            </div>

            <div>
                <p class="text-txt4 text-[16px] leading-[160%]">+ پس می تونیم بگیم که سئو، راز موفقیت کسب‌وکارهای آنلاینه و به فروش بهتر شما کمک میکنه</p>
            </div>
          </div>

          <!-- //// کمک به سئو -->
          <div class="flex flex-col justify-start items-start w-[328px] md:w-full my-20 gap-4">
            <div class="flex flex-col justify-start items-start gap-6">
                <div class="flex flex-col justify-start items-start gap-6">
                    <div class="flex justify-start items-start gap-2"><IconsStar></IconsStar><h6 class="text-[18px] leading-[140%] font-bold text-txt1">حالا من چطوری به کسب و کار شما کمک می کنم؟</h6></div>
                </div>

                <div>
                    <p class="text-txt6 text-[16px] leading-[60px] ">گوگل برای اینکه به یک سایت رتبه بده و اون رو توی نتایج برتر خودش نشون بده حدود 200 فاکتور رو بررسی می کنه.<br> حالا من به عنوان یک کارشناس سئو وظیفه دارم که این فاکتورها رو بررسی و بهینه کنم تا بتونم وبسایت شما رو توی 10 نتیجه برتر گوگل بالا بیارم.</p>
                </div>
            </div>

            <div>
                <p class="text-txt4 text-[16px] leading-[160%]">+ فرآیند سئو به 3 بخش اصلی تقسیم میشه:</p>
            </div>
          </div>

          <!-- //// تصاویر مراحل سئو  -->
           <div class="flex flex-col justify-center items-center my-10">
            <img src="/img/seo/Group 70.png" class="hidden md:flex">
            <img src="/img/seo/Group 144.png" class="flex md:hidden">
            </div>

            <!-- ////  -->
            <div class="relative flex justify-start items-start w-[328px] md:w-full rounded-lg p-2 pr-6 text-txt4 pointSection">
                <p class="text-[16px] leading-[160%] txtPoint">هر کدام از این بخش ها به تعداد زیادی تسک تقسیم میشه که ما توی فرآیند سئو کردن سایت همه رو با هم پیش می بریم.</p>
            </div>


            <!-- //// برای سئو یک سایت چه کارهایی انجام میدیم؟ -->
            <div class="flex flex-col justify-start items-start w-[328px] md:w-full my-20 gap-4">
            <div class="flex justify-start items-start ">
                <div class="flex flex-col justify-start items-start gap-6">
                    <div class="flex justify-start items-start gap-2"><IconsStar></IconsStar><h6 class="text-[18px] leading-[140%] font-bold text-txt1">برای سئو یک سایت چه کارهایی انجام میدیم؟</h6></div>
                </div>
            </div>
            <div>
                <p class="text-txt6 text-[16px] leading-[60px] "> برای نمونه تعدادی از خدماتی که من برای سئو کردن یک پروژه ارائه میدم رو واستون میارم:</p>
            </div>
            </div>


            <!-- //// موارد اشاره شده برای سئو -->
            <div class="flex justify-center items-center my-10 w-[328px] md:w-full">
                <DisclosureSeo></DisclosureSeo>
            </div>

            <!-- //// مشاوره -->
            <div class="flex flex-col justify-center items-center my-10 gap-16 w-full">
              <div class="w-[328px] md:w-[536px]">
                <img src="/img/seo/Group 71.png" alt="img" class="w-full">
              </div>

              <div class="flex flex-col justify-center items-center w-[328px] md:w-full gap-8">
                <div class="flex flex-col justify-center items-center gap-6 text-center">
                  <h3 class="text-[20px] md:text-[32px] leading-[140%] font-bold">قصد داری پروژه تو به من بسپاری یا هنوز شک داری؟</h3>
                  <p class="text-[16px] md:text-[18px] leading-[160%] opacity-80 text-txt6">اگه تا الان متقاعد شدی که سئو به کسب و کار آنلاینت کمک می کنه و قصد داری پروژه تو به من بسپاری، از طریق فرم مشخصاتت رو بذار تا باهات تماس بگیریم.</p>
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
  top: 10%;
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

.pointSection {
    background-color: rgba(19, 20, 78, .16);
}

.pointSection .txtPoint::before {
    content: '';
    position: absolute;
    top: 17%;
    width: 10px !important;
    height: 10px !important;
    border-radius: 12px;
    right: 8px;
    background-color: #13144E;
}

@media screen and (min-width : 970px) {
    .pointSection .txtPoint::before {
        top: 38%;
    }
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