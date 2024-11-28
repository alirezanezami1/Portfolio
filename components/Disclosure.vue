<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

  const FaqList = [
    {question : ' کلمات کلیدی ما چند ماهه بالا میان؟' , answer : 'مدت زمانی که طول میکشه یک کلمه کلیدی به صفحه اول گوگل برسه، خیلی به سختی حوزه و میزان فعالیت رقبا بستگی داره و نمیشه واسه همه پروژه ها یک نسخه ثابت رو پیچید. اما معمولا در حوزه های با سختی متوسط، بین 3 تا 6 ماه می توان کلمه کلیدی موردنظر را بالا آورد.'},
    {question : 'چطور از فرآیند انجام سئو روی پروژه خودم مطلع بشم؟' , answer : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'},
    {question : 'سئو برای چه کسب و کارهایی جواب میده؟' , answer : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'}
  ]

  const openIndex = ref(0);

  </script>


<template>
    <div class="flex flex-col gap-4 justify-center items-center">
        <div v-for="item,index in FaqList" :key="index" class="w-[1280px] px-6 py-5 bg-Bg/3 rounded-xl">
            <Disclosure :defaultOpen="openIndex === index">
                <template #default="{open}">
                    <DisclosureButton class="flex justify-between items-center w-full px-4 py-2 text-left bg-gray-200 rounded-lg focus:outline-none">
        <span class="text-[18px] leading-[140%] font-bold flex gap-6 justify-center items-center"><span class="text-[24px] leading-[160%]">0{{ index + 1 }}</span> {{ item.question }}</span>
        <img src="../assets/icons/Frame 124 (1).png" :class="{ 'transform rotate-180': open }">
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-[16px] leading-[160%] font-thin text-txt2">
        {{ item.answer }}.
        </DisclosurePanel>
                </template>
        </Disclosure>
        </div>
    </div>
  </template>
  
  
  
  <style scoped>
  /* استایل‌های اضافی را اینجا اضافه کنید */
  </style>