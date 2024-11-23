<script setup lang="ts">
const socialMediaList = [
    {name : 'لینکدین' , url : '' , img : '/img/Linkedin.svg' , ellipse : '#1476B1'},
    {name : 'واتساپ' , url : '' , img : '/img/Whatsapp.svg' , ellipse : '#54CB62'},
    {name : 'اینستاگرام' , url : '' , img : '/img/Instagram (1).svg' , ellipse : '#D1397A'},
    {name : 'تلگرام' , url : '' , img : '/img/Telegram.svg' , ellipse : '#0E89C7'},
]

const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

</script>

<template>
    <!-- <div class="flex flex-col gap-8 justify-center items-center">
        <div class="flex gap-4 justify-center items-center">
           
        </div>



        <div></div>
    </div> -->

    <div>
        <ClientOnly>
    <swiper-container ref="containerRef">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: rgb(32, 233, 70); color: white;"
      >
        Slide {{ idx + 1 }}
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <button @click="swiper.prev()">
    Prev
  </button>
  <!-- Go forward one slide -->
  <button @click="swiper.next()">
    Next
  </button>

    </div>
</template>


<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>
