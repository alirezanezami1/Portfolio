<script setup>
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
    مشاهده سایر خدمات <IconsAltArrowDown v-if="!showAll"></IconsAltArrowDown><IconsAltArrowUp v-if="showAll"></IconsAltArrowUp>
  </button>
</div>
</div>
</template>

<style scoped>
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