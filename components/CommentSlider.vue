<script setup>
// import { useKeenSlider } from 'keen-slider/vue';
import axios from 'axios';

const comments = ref([]);

const fetchComments = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/comments');
    comments.value = response.data;
    console.log(comments.value);
             
  } catch (error) {
    console.error('Error fetching comments:', error);
  }    
};

const containerRefComment = ref(null)

const swiperComment = useSwiper(containerRefComment)

const updateSwiper = () => {
  if (containerRefComment.value) {
    containerRefComment.value.swiper.update();
  }
};

onMounted(() => {
  fetchComments();
  window.addEventListener('resize', updateSwiper);
});

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full my-16">
    <ClientOnly>
      <swiper-container ref="containerRefComment" class="keen-slider" :spaceBetween="10" :slidesPerView="1">
        <swiper-slide class="keen-slider__slide bg-Bg/3 rounded-xl gap-8" v-for="(comment, index) in comments" :key="index">
          <div class="flex justify-start items-center gap-4">
            <img :src="comment.company_image" class="w-[58px] h-[58px] object-cover rounded-full">
            <div class="flex flex-col justify-start gap-1 items-start ">
              <h5 class="text-txt1 text-[20px] leading-[140%] font-bold">{{ comment.title }}</h5>
              <p class="text-txt5 text-[16px] leading-[160%]">{{ comment.company_name }}</p>
            </div>
          </div>
          <div>
            <p class="text-txt5 text-[14px] leading-[160%]">{{ comment.comment }}</p>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>

</template>


<style scoped>
.keen-slider {
  display: flex;
  justify-content: center; 
  align-items: start; 
  height: 35vh;
  width: 90vw;
}
.keen-slider__slide {
  width: 50% !important; 
  height: 100%;
  padding: 24px;
}
@media screen and (max-width: 768px) {
  .keen-slider {
    height: 50vh;
  }
  .keen-slider__slide {
    width: 100% !important;
    height: 100%;
  padding: 24px;
  }
}
@media screen and (max-width: 500px) {
  .keen-slider {
    height: 65vh;
  }
}

</style>