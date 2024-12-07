<script setup>
import { ref, watch ,computed } from 'vue';

const videoPlayer = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const isFullscreen = ref(false); 

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

const skills = [
  {title: 'ساختار وبسایت ' , description: 'بهبود ساختار وبسایت برای افزایش خزش و ایندکس شدن صفحات توسط موتور جستجو' , img: '/img/about/skill/Frame 323.png'},
  {title: 'گزارش دهی و تحلیل ' , description: 'ارائه گزارش های دقیق از عملکرد سئو و تحلیل نتایح برای بهبود مستمر ' , img: '/img/about/skill/Email ads.png'},
  {title: 'کیبورد ریسرچ و کیبورد تارگتینگ' , description: 'شناسایی کلمات کلیدی مرتبط با کسب و کار شما و تعیین استراتژی مناسب برای هدف گذاری آن' , img: '/img/about/skill/Frame 323 (1).png'},
  {title: 'بهینه سازی محتوا' , description: 'تولید و بهینه سازی محتوا با کیفیت بالا برای موتور های جستجو و کاربران' , img: '/img/about/skill/Frame 323 (2).png'},
  {title: 'آنالیز رقبا ' , description: 'بررسی رقبا و شناسایی فرصت های جدید برای پیشی گرفتن از آن ها ' , img: '/img/about/skill/Frame 323 (3).png'},
  {title: 'توسعه بک لینک ' , description: 'ایحاد پروفایل بک لینک قوی و طبیعی برای افزایش اعتبار دامنه' , img: '/img/about/skill/Frame 323 (4).png'},
  {title: 'چیدن پلن آف پیج ' , description: 'توانایی چیدن کمپین رپورتاژ آگهی اصولی' , img: '/img/about/skill/Frame 323 (5).png'},
]

const showAll = ref(false);

const displayedSkills = computed(() => {
  return showAll.value ? skills : skills.slice(0, 4);
});

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

const currentAbout = ref(0)
const displayedItemsAbout = ref(skills.slice(0,skills.length));


const [container, slider] = useKeenSlider({
  loop: true,
  mode: "free",
  slides: {
    perView: window.innerWidth < 1000 ? 2 : 3,
    spacing: 25,
    origin  : 3
  },
  initial: currentAbout.value,
      slideChanged: (s) => {
        currentAbout.value = s.track.details.rel
      },
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
        <div class="flex justify-between items-center my-20 gap-52">

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
             <div class="flex flex-col justify-center items-center gap-8">

              <div class="relative w-[416px] h-[416px]">
                <video src="../Public/videos/aboutMe/IMG_6111.MOV" type="video/mp4" class="w-[416px] h-[416px] rounded-lg" ref="videoPlayer" @ended="resetVideo" @timeupdate="updateProgress"></video>

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
         <div class="flex flex-col justify-center items-center gap-24 my-20">

          <div class="flex flex-col justify-center items-center gap-6 w-[328px] md:w-[753px] text-center">
            <div class="w-[123px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full text-txt1"><IconsDot></IconsDot>مهارت های من</div>

            <div class="flex flex-col gap-4 justify-center items-center">
              <h6 class="text-[18px] leading-[140%] font-bold">مهارت‌های کلیدی من در دنیای سئو؛ از تحلیل داده‌ها تا بهبود رتبه سایت</h6>
              <p class="text-[16px] leading-[160%] text-txt2">با به‌کارگیری طیف وسیعی از ابزارها و تکنیک‌های تخصصی در سئو، مهارت‌های من از بهینه‌سازی ساختار سایت تا بهبود تجربه کاربری، همه آنچه برای موفقیت در دنیای دیجیتال نیاز دارید را فراهم می‌کند</p>
            </div>
          </div>

          <!-- //// اسلایدر مهارت ها-دسکتاپ -->
          <div class="hidden md:flex flex-col gap-6 justify-center items-center">
              <div ref="container" class="keen-slider flex justify-center items-center">
                    <div class="flex justify-start items-start text-txt1 keen-slider__slide bg-Bg/3 rounded-xl px-6 py-5 h-[205px]" v-for="(item,index) in skills" :key="index" :class="`number-slide${index + 1}`">
                          <div class="flex flex-col justify-center items-start gap-6">
                            <img :src="item.img">
                            <div class="flex flex-col gap-4 justify-start items-start">
                              <h6 class="text-[18px] leading-[140%] font-bold">{{ item.title }}</h6>
                              <p class="text-[16px] leading-[160%] text-txt6">{{ item.description }}</p>
                            </div>
                          </div>
                    </div>
              </div>

              <div class="flex gap-2" dir="ltr">
                <div v-if="slider" class="dots">
                <button
                v-for="(_slide, idx) in displayedItemsAbout"
                @click="slider.moveToIdx(idx)"
                :class="{ dot: true, active: currentAbout === idx }"
                :key="idx"
                ></button>
                </div>
              </div>
          </div>

          <!-- //// مهارت ها-موبایل -->
          <div class="flex md:hidden flex-col justify-center gap-6 items-center ">
            <div class="flex justify-start items-start text-txt1 bg-Bg/3 rounded-xl px-6 py-5 h-[231px] w-[328px]" v-for="(item,index) in displayedSkills" :key="index" >
                          <div class="flex flex-col justify-center items-start gap-6">
                            <img :src="item.img">
                            <div class="flex flex-col gap-4 justify-start items-start">
                              <h6 class="text-[18px] leading-[140%] font-bold">{{ item.title }}</h6>
                              <p class="text-[16px] leading-[160%] text-txt6">{{ item.description }}</p>
                            </div>
                          </div>
            </div>
            <button @click="toggleShowAll" class="flex justify-center items-center gap-2 text-txt4">
              مشاهده سایر خدمات <IconsAltArrowDown :class="{'rotate-180' : showAll}"></IconsAltArrowDown>
            </button>
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
  bottom: 0;
}

.fullScreen {
  position: absolute;
  bottom: 6%;
  right: 2%;
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

.dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.dot {
  border: none;
  width: 16px;
  height: 16px;
  background: #CDCFCD;
  border-radius: 50%;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  width: 30px;
  height: 16px;
  border-radius: 15px;
  background-color: #13144E;
}
</style>