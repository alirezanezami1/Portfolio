<script setup>
const list = ArrayMenu()


const selected = ref(list[0]);
const underlineWidth = ref(0);
const underlineLeft = ref(0);
const router = useRouter();

const selectItem = (item) => {
  selected.value = item;
  const itemElement = document.querySelector('.nav-item.active');
  if (itemElement) {
    underlineWidth.value = itemElement.offsetWidth;
    underlineLeft.value = itemElement.offsetLeft;
  }
  router.push(item.path);
};

onMounted(() => {
  const itemElement = document.querySelector('.nav-item.active');
  if (itemElement) {
    underlineWidth.value = itemElement.offsetWidth;
    underlineLeft.value = itemElement.offsetLeft;
  }
});


</script>

<template>
    <div class="flex flex-col items-center w-full h-dvh">

        <div class="bg-Bg/3 flex flex-col items-start text-right gap-5 p-3 pt-8 pl-10">

            <div class="w-[40px] h-[40px]">
                <img src="../../assets/adminPhoto/c82378950ce20a11d88ae82cc904617a.png" class="object-cover rounded-full w-full h-full" >
            </div>

            <div class="flex flex-col gap-1">
                <p class="font-normal text-[16px] leading-[25.6px]">رقیه رنجبری</p>
                <p class="font-normal text-[12px] leading-[19.2px] text-txt2">کارشناس سئو و بازاریاب دیجیتال</p>
            </div>

        </div>

        <div class="bg-Bg/1 flex flex-col gap-3 items-start text-right w-[208px] p-3 pt-6">
            <p class="text-[10px] font-light leading-[17.58px] text-txt3">منو</p>
            <NuxtLink v-for="item in list" :key="item" class="text-sm text-txt1 cursor-pointer flex flex-col gap-1 mb-3 text-[16px] text-right font-medium leading-[19.2px]" @click="selectItem(item)" :class="['cursor-pointer' , 'relative', selected === item ? 'text-blue-500' : 'text-gray-700']" >
             <div class="flex gap-1">
                   {{ item.title }} <img v-if="item.title === 'خدمات' " src="../../assets/icons/Size=16px, Icon=Arrows-Down (1).svg" alt="icon"  class="w-[16px]">
             </div>
             <!-- <div class="w-[69px] h-[4px] bg-[#13144E] rounded-full"></div> -->
             <div
          v-if="selected === item"
          class="absolute left-0 right-0 h-1 bg-blue-500 transition-all duration-300"
          :style="{ width: underlineWidth + 'px', transform: `translateX(${underlineLeft}px)` }"
        ></div>
            </NuxtLink>
        </div>
       
        <div class="bg-Bg/1 w-[208px] flex items-center justify-center pt-20">
            <NuxtLink>
                <img src="../../assets/mediaIcons/whatsapp.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
            <NuxtLink>
                <img src="../../assets/mediaIcons/instagram.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
            <NuxtLink>
                <img src="../../assets/mediaIcons/Telegram.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
            <NuxtLink>
                <img src="../../assets/mediaIcons/Linkedin.png" alt="socialMedia" class="w-[40px] h-[40px] cursor-pointer">
            </NuxtLink>
        </div>


    </div>
</template>