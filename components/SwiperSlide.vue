<script setup lang="ts">
const socialMediaList = [
    {name : 'لینکدین' , url : '' , img : '/img/Linkedin.svg' , ellipse : '#1476B1'},
    {name : 'واتساپ' , url : '' , img : '/img/Whatsapp.svg' , ellipse : '#54CB62'},
    {name : 'اینستاگرام' , url : '' , img : '/img/Instagram (1).svg' , ellipse : '#D1397A'},
    {name : 'تلگرام' , url : '' , img : '/img/Telegram.svg' , ellipse : '#0E89C7'},
]

const containerReff = ref(null)
const slides1 = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerReff)

</script>

<template>
    <!-- <div class="flex flex-col gap-8 justify-center items-center">
        <div class="flex gap-4 justify-center items-center ">
         
        </div>



        <div></div>
    </div> -->

    <div class="w-[500px]">
      <ClientOnly>
    <swiper-container ref="containerReff" :spaceBetween="-300" :slidesPerView="1.2">
      <swiper-slide 
        v-for="(slide, index) in slides1"
        :key="index"
        style="background-color: rgb(32, 233, 70); color: white;"
      >
        Slide {{ index + 1 }}
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
    </div>

</template>
