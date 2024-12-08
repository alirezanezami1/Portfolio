<script setup>
const tools = [
  { img : '/img/about/tools/Frame 388.png'},
  { img : '/img/about/tools/Frame 390.png'},
  { img : '/img/about/tools/Frame 391.png'},
  { img : '/img/about/tools/Frame 392.png'},
]

const currentTools = ref(0)
const displayedItemsTools = ref(tools.slice(0,tools.length));

const isMobile = ref(window.innerWidth < 768);

const [container1, slider1] = useKeenSlider({
  loop: true,
  mode: "free",
  slides: {
    perView: 2, 
    spacing: 0,
    origin  : 'center'
  },
  initial: currentTools.value,
      slideChanged: (s) => {
        currentTools.value = s.track.details.rel
      },
});

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
  slider1.update(); // به‌روزرسانی اسلایدر
});

</script>

<template>
    <div class="flex flex-col justify-center items-center my-20">
          <!-- ////ابزارها-دسکتاپ -->
          <div class="hidden justify-center items-center gap-4 w-full min-[877px]:flex">
            <div v-for="item,index in tools" :key="index" class="w-[200px] lg:w-[250px] xl:w-auto">
              <img :src="item.img" class="w-full">
            </div>
          </div>

          <!-- //// ابزارها-موبایل  -->
          <div class="flex min-[877px]:hidden flex-col justify-center items-center gap-4">
            <div ref="container1" class="flex flex-row justify-center items-center keen-slider my-20 w-full">
              <div class="keen-slider__slide " v-for="item,index in tools" :key="index" >
                <img :src="item.img">
              </div>
            </div>
            <div class="flex gap-2" dir="ltr">
                <div v-if="slider1" class="dots">
                <button
                v-for="(_slide, idx) in displayedItemsTools"
                @click="slider1.moveToIdx(idx)"
                :class="{ dot: true, active: currentTools === idx }"
                :key="idx"
                ></button>
                </div>
            </div> 
          </div>
        </div>
</template>

<style scoped>
.keen-slider {
  display: flex;
  justify-content: center; /* مرکز کردن اسلایدها */
  align-items: center; /* مرکز کردن عمودی */
  overflow: hidden; /* جلوگیری از محو شدن اسلایدها */
  width: 100%;
}

.keen-slider__slide {
  min-width: 308px; /* اطمینان از اینکه هر اسلاید تمام عرض را بپوشاند */
  max-width: 308px;
  display: flex;
  justify-content: center; /* مرکز کردن محتوا در اسلاید */
  align-items: center; /* مرکز کردن عمودی محتوا */
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