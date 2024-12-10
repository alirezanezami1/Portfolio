<script setup>
const hint = ['سئو  چیست ؟' , 'من چگونه می توانم به شما کمک کنم ؟' , 'اقدامات اولیه سئو ' , 'اقدامات سئو تکنیکال' , 'اقدامات سئو داخلی' , 'اقدامات سئو خارجی' , 'آنالیز سایت و میزان ورودی ها']
</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20">

        <!-- //// لینک ها  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <NuxtLink class="flex justify-center items-center gap-2 text-txt2 ">خدمات<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>درباره من</span>
        </div>

        <!-- //// بنر  -->
        <div class="flex justify-center items-center w-[328px] md:w-full my-10">
            <img src="/img/seo/Frame 450.png" alt="banner" class="hidden md:block">
            <img src="/img/seo/Frame 450 (1).png" alt="banner" class="flex md:hidden">
        </div>


         <!-- //// مواردی که در این صفحه به آنها اشاره خواهد شد : -->
         <div class="flex flex-col justify-start gap-10 items-start rounded-2xl my-10 w-[328px] md:w-full border border-txt3 p-10">
            <h5 class="text-[20px] leading-[140%] text-txt1 font-bold">مواردی که در این صفحه به آنها اشاره خواهد شد :</h5>
            <div class="flex flex-col justify-start items-start gap-5">
                <p v-for="item,index in hint" :key="index" class="text-[14px] md:text-[16px] leading-[160%] text-txt4"><span>{{ index + 1 }}.</span>{{ item }}</p>
            </div>
         </div>


          <!-- //// سوشال مدیا -->
        <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
        </div>

    </div>
</template>