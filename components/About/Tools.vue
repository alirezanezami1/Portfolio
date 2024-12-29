<script setup>
const tools = [
  { img : '/img/about/tools/Frame 388.png'},
  { img : '/img/about/tools/Frame 390.png'},
  { img : '/img/about/tools/Frame 391.png'},
  { img : '/img/about/tools/Frame 392.png'},
]

const currentTools = ref(0)
const displayedItemsTools = ref(tools.slice(0,tools.length));

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

</script>

<template>
    <div class="flex flex-col justify-center items-center gap-16 my-20">

      <div class="flex flex-col justify-center items-center gap-6 w-[328px] md:w-[753px] text-center">
        <div class="w-[76px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full text-txt1"><IconsDot></IconsDot>ابزارها</div>

        <div class="flex flex-col gap-4 justify-center items-center">
          <h6 class="text-[18px] leading-[140%] font-bold">استفاده از تکنولوژی برای بهبود سئو: ارتباط عمیق و توانایی کار با ابزار ها</h6>
          <p class="text-[16px] leading-[160%] text-txt2">از نرم‌افزارهای قدرتمند برای تحلیل دقیق عملکرد سایت، شناسایی فرصت‌ها و بهبود رتبه در موتورهای جستجو استفاده می‌کنم؛ ابزارهایی که به شما کمک می‌کنند در رقابت دیجیتال برنده باشید</p>
        </div>
      </div>

          <!-- ////ابزارها-دسکتاپ -->
          <div class="hidden justify-center items-center gap-4 w-full min-[877px]:flex">
            <div v-for="item,index in tools" :key="index" class="w-[200px] lg:w-[250px] xl:w-auto">
              <img :src="item.img" class="w-full">
            </div>
          </div>

          <!-- //// ابزارها-موبایل  -->
          <div class="flex min-[877px]:hidden flex-col justify-center items-center gap-4">
            <div ref="container1" class="flex flex-row justify-center items-center keen-slider w-full">
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
  justify-content: center; 
  align-items: center; 
  overflow: hidden; 
  width: 100%;
}

.keen-slider__slide {
  min-width: 308px; 
  max-width: 308px;
  display: flex;
  justify-content: center; 
  align-items: center; 
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