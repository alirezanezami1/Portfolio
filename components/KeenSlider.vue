<script setup>
const socialMediaList = [
    {name : 'لینکدین' , url : '' , img : '/img/Linkedin.png' , ellipse : '/img/Ellipse 8 (1).svg'},
    {name : 'واتساپ' , url : '' , img : '/img/Whatsapp.png' , ellipse : '/img/Ellipse 8 (3).svg'},
    {name : 'اینستاگرام' , url : '' , img : '/img/Instagram (1).png' , ellipse : '/img/Ellipse 8 (2).svg'},
    {name : 'تلگرام' , url : '' , img : '/img/Telegram.png' , ellipse : '/img/Ellipse 8.svg'},
]

const current = ref(0)
const displayedItems = ref(socialMediaList.slice(2));


const [container, slider] = useKeenSlider({
  loop: true,
  mode: "free",
  slides: {
    perView: 3.5,
    spacing: 35,
    origin  : window.innerWidth < 768 ? 'center' : 'auto'
  },
  initial: current.value,
      slideChanged: (s) => {
        current.value = s.track.details.rel
      },
});

</script>

<template>
    <div class="flex flex-col gap-8 justify-center items-center">
      <div ref="container" class="keen-slider flex justify-center items-center">
            <div class="flex justify-between items-start text-txt1 keen-slider__slide bg-Bg/3 rounded-2xl w-[416px] h-[203px]" v-for="(item,index) in socialMediaList" :key="index" :class="`number-slide${index + 1}`">
                  <div class="flex flex-col items-start pr-5 socialLink">
                    <div class="flex flex-col relative -top-10 gap-2 justify-center items-start w-[221px]">
                      <p class="text-[14px] leading-[160%] font-thin">برای دریافت آخرین نکات سئو ،</p>
                      <p class="text-[16px] leading-[160%] font-extrabold">{{ item.name }} من را دنبال کنید</p>
                    </div>

                    <div class="flex gap-2 justify-center items-center text-[14px] leading-[160%] cursor-pointer">با ما در ارتباط باشید<IconsAltArrowLeft></IconsAltArrowLeft></div>
                  </div>

                  <div class="w-full socialImg">
                    <img :src="item.img" alt="image">
                  </div>
                  <div class="absolute bottom-0">
                    <img :src="item.ellipse" alt="ellipse">
                  </div>
            </div>
      </div>


      <div class="flex gap-2">
        <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in displayedItems"
        @click="slider.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
    </div>
      </div>

    </div>

</template>

<style scoped>
[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 416px !important;
  height: 203px !important;
  cursor: pointer;
}
.keen-slider {
    position: relative;
}
.keen-slider__slide {
    min-width: unset !important;
    max-width: none !important;
    /* min-height: unset !important;
    max-width: none !important; */
}

.keen-slider .socialImg {
  width: 181px !important;
  height: 181px !important;
}
.keen-slider .socialImg img{
  position: relative;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  transform: unset !important;
  top: 25px;
  left: -10px;
  transform: rotate(-24deg) !important;
  transition: all .3s linear !important;
}

.keen-slider__slide:hover .socialImg img {
  transform: rotate(12deg) !important;
}

@media screen and (max-width : 550px) {
  .keen-slider__slide {
    width: 328px !important;
  }
  .keen-slider .socialImg {
  width: 136px !important;
  height: 136px !important;
  position: absolute;
  left: 0;
  }
  .keen-slider .socialImg img{
    object-fit: cover;
    width: 136px !important;
    height: 136px !important;
  }
  .socialLink {
    position: relative;
    right: -44px;
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