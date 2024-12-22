<template>
 <div class="flex flex-col justify-center items-center w-full my-16">
    <div ref="container" class="keen-slider">
      <div class="keen-slider__slide bg-Bg/3 rounded-xl gap-8" v-for="(comment, index) in comments" :key="index">
        <div class="flex justify-start items-center gap-4">
          <img src="" class="w-[58px] rounded-full">
          <div class="flex flex-col justify-start gap-1 items-start ">
            <h5 class="text-txt1 text-[20px] leading-[140%] font-bold">{{ comment.title }}</h5>
            <p class="text-txt5 text-[16px] leading-[160%]">{{ comment.title }}</p>
          </div>
        </div>
        <div>
          <p class="text-txt5 text-[14px] leading-[160%]">{{ comment.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useKeenSlider } from 'keen-slider/vue';
import axios from 'axios';

const comments = ref([
  {title : 'تست' , comment: 'تستتستتستتستتستتستتتستتستتستتستتست'},
  {title : 'تست' , comment: 'من از لحظه ای که کار سئو رو به شما دادم،با اطمینان تمام طی این دوسال تمام روند رودر سریعترین حالت ممکن طی کردید ،همیشه رتبه یک بودیم و تعهد ومسئولیت بالای شما ،نظم ودقت بالاتون برای من قابل تحسین بود. اینکه وقتی یک چالش پیش می اومد همگام با من دنبال ارائه راه حل وحل موضوع بودید وسر سری موضوع رو رد نمیکردیم واسم مهم بود. اینکه با افرادی در حوزه کارتون در ارتباط هستین که در سریعترین حالت خدمات مورد نظرم ون رو برای سایت اوکی میکنن خودش خیلی مهمه ودر وقت صرفه جویی میشه. حسی که دارم با آدم منصف ،خوش اخلاق وبا تجربه ودر مسیر پیشرفته دارم کار میکنم.'},
  {title : 'تست' , comment: 'تست'},
]);

const fetchComments = async () => {
  try {
            const response = await axios.get('http://127.0.0.1:8000/api/comments');
            // comments.value = response.data;
            console.log(response.data);
            
        } catch (error) {
            console.error('Error fetching comments:', error);
        }    
};



    
// onMounted(() => {
//   fetchComments();
// });

const [container] = useKeenSlider({
  loop: true,
  slides: {
    perView: 1.2,
    // origin: 'center',
    spacing: 10,
  },
});

</script>

<style scoped>
.keen-slider {
  display: flex;
  justify-content: center; 
  align-items: start; 
  height: 35vh;
  width: 90vw;
}
@media screen and (max-width: 768px) {
  .keen-slider {
    height: 50vh;
  }
}
@media screen and (max-width: 500px) {
  .keen-slider {
    height: 65vh;
  }
}
.keen-slider__slide {
  width: 50% !important; 
  height: 100%;
  padding: 24px;
}
</style>