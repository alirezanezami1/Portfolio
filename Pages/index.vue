<script setup lang="ts">
const services = [
        {title : 'منتورینگ سئو' , description : 'اگه هنوز اعتماد به نفس گرفتن پروژه سئو نداری، حتما از یه منتورسئو کمک بگیر' , img : '/img/2.png'},
        {title : 'مشاوره سئو' , description : 'با گرفتن مشاوره سئو، عیب و ایرادهای فعلی سایتت رو برطرف کن' , img : '/img/4.png'},
        {title : 'سئو سایت' , description : 'با سئو در گوگل دیده شو و فروشت رو چند برابر کن' , img : '/img/10.png'},
        {title : 'گوگل ادز' , description : 'اگه خیلی عجله داری که سایتت به رتبه 1 گوگل برسه، گوگل ادز رو امتحان کن' , img : '/img/9.png'},
        {title : 'طراحی سایت' , description : 'اگه دنبال یه سایت شیک و حرفه ای واسه خودت هستی، خوب جایی اومدی' , img : '/img/12.png'},
        {title : 'تدوین استراتژی محتوا' , description : 'اگه نمیدونی معماری و چیدمان صفحات سایتت چطور باید باشه، نیاز به تدوین استراتژی داری' , img : '/img/3.png'}
    ]

const containerRefTwo = ref(null)

const slides = [
    {title : 'همراه ایران' , type : 'فروشگاهی' , field : 'فروشگاه لوازم جانبی موبایل', time : '6ماه' , subtitle : 'لوازم جانبی یسیدو - لینک ۱' , images : ['/img/Component 10.png' , '/img/Component 10.png' , '/img/Component 10.png'] },
    {title : 'همراه ایران' , type : 'فروشگاهی' , field : 'فروشگاه لوازم جانبی موبایل', time : '6ماه' , subtitle : 'لوازم جانبی یسیدو - لینک ۱' , images : ['/img/Component 10.png' , '/img/Component 10.png' , '/img/Component 10.png'] },
    {title : 'همراه ایران' , type : 'فروشگاهی' , field : 'فروشگاه لوازم جانبی موبایل', time : '6ماه' , subtitle : 'لوازم جانبی یسیدو - لینک ۱' , images : ['/img/Component 10.png' , '/img/Component 10.png' , '/img/Component 10.png'] }
]

const accordionOpen = ref(null)

const swiperTwo = useSwiper(containerRefTwo)

const toggleAccordion = function (index) {
    accordionOpen.value = accordionOpen.value === index ? null : index
}

</script>

<template>
    <div class="flex flex-col justify-center items-center text-txt1">

        <div class="background">
            <img src="/backgrounds/Home page - Desktop (1).png" alt="background img">
        </div>

        <!-- //// Introduction -->
        <div class="flex grid-flow-row grid-cols-3 gap-3 justify-center items-center my-11 mx-20">
            
            <div class="flex flex-col justify-center items-center gap-[84px] w-[146px]" dir="ltr">
    
                <div class="flex flex-col justify-center items-center gap-1 w-full h-[116px]">
                    <h1 class="text-[56px] leading-[120%] font-bold">+ 88</h1>
                    <p class="text-[32px] font-medium leading-[140%] text-txt2">نمونه کار</p>
                </div>
    
                <div class="flex flex-col justify-center items-center gap-1 w-full h-[116px]">
                    <h1 class="text-[56px] leading-[120%] font-bold">+ 8</h1>
                    <p class="text-[32px] font-medium leading-[140%] text-txt2">سال سابقه</p>
                </div>
    
                <div class="flex flex-col justify-center items-center gap-1 w-full h-[116px]">
                    <h1 class="text-[56px] leading-[120%] font-bold">+ 94</h1>
                    <p class="text-[32px] font-medium leading-[140%] text-txt2">رضایتمندی</p>
                </div>
    
            </div>
    
            <div class="w-[606.89px] h-[664px]">
                <img src="../assets/adminPhoto/Main image and text container.png" alt="mainPhoto" class="object-cover w-[606.89px] h-[664px]">
            </div>
    
            <div class="text-right grid gap-[48px] w-[524px]">
                <div class="flex flex-col gap-[40px]">
                    <p class="text-[16px] leading-[160%] font-normal">سلام  👋 من رقیه رنجبری هستم، یه </p>
                <h1 class="text-[64px] font-bold leading-[120%]">کارشناس سئو </h1>
                <p class="text-txt2 text-[16px] leading-[160%] font-normal">سؤالات زیادی توی ذهنت هست که دوست داری جواب دقیقشون رو بدونی؟ 😎 کافیه شماره‌ت رو بذاری تا با هم صحبت کنیم و کسب‌وکارت رو بررسی کنیم. ببینیم که آیا سئو برای رشد و موفقیت کار تو مناسب هست یا نه. 🔍📈</p>
                </div>
               <div>
                <button class="bg-btn1 p-3 flex text-white justify-center items-center gap-3 rounded-lg">
                    <img src="../assets/icons/Icon pack - Linear.png" alt="icon" class="w-[32px]">
                    <span class="text-[18px] leading-[120%] font-medium">مشاوره رایگان</span>
                </button>
               </div>
            </div>
    
        </div>

        <!-- //// Services -->
         <div class="flex flex-col justify-center items-center gap-10 w-[958px] my-12 mx-20">

            <div class="flex flex-col gap-6 justify-center items-center">

                <div class="w-[80px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot> خدمات</div>

                <div class="flex flex-col gap-4 justify-center items-center">
                    <h6 class="text-[18px] leading-[140%] font-bold">از سئو تا طراحی سایت ؛ خدمات کامل برای موفقیت دیجیتال شما</h6>

                    <p class="text-[16px] leading-[160%] font-medium text-txt2 text-center">از بهینه‌سازی سئو و مشاوره‌های تخصصی تا تدوین استراتژی محتوا و تبلیغات هدفمند گوگل ادز، تمامی ابزارهای لازم برای موفقیت دیجیتال شما را در یک پکیج جامع ارائه می‌دهیم</p>
                </div>

            </div>

            <div class="grid grid-cols-3 justify-center items-center gap-4">
                <div class="flex flex-col justify-center items-center gap-[14px] text-center w-[308px] h-[284px] bg-Bg/3 p-6 rounded-2xl" v-for="item,index in services" :key="index">
                    <img :src="item.img" alt="img">
                    <div class="grid gap-4">
                        <h5 class="text-[20px] leading-[140%] font-bold">{{ item.title }}</h5>
                        <p class="text-[16px] leading-[160%] font-normal text-txt2">{{ item.description }}</p>
                    </div>
                </div>
            </div>

         </div>

         <!-- //// about  -->
          <div class="flex justify-between gap-[307px] my-16 mx-20">

            <!-- //// right  -->
             <div class="flex flex-col gap-6 w-[343px]">

                <div class="w-[91px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot> درباره من</div>

                <div class="text-right flex flex-col gap-4">
                    <p class="text-[16px] leading-[120%] font-normal">سلام 👋 دوستان ، من </p>
                    <h1 class="text-[56px] leading-[120%] font-bold">رقیه رنجبری ام </h1>
                </div>

             </div>


            <!-- //// left  -->
            <div class="flex flex-col gap-6 w-[630px]">
                <!-- //// top  -->
                <div class="flex flex-col justify-between items-center text-[16px] leading-[160%] font-thin text-txt2 h-[182px]">
                    <p><span class="text-txt1">یک کارشناس سئو با 8 سال تجربه در بهینه سازی وبسایت‌ها برای موتورهای جستجو.</span> علاقه من به دنیای دیجیتال و کمک به کسب‌وکارها برای رشد آنلاین، انگیزه‌ای قوی برای من بوده تا در این حوزه فعالیت کنم.</p>

                    <p>من به عنوان یک کارشناس سئو، <span class="text-txt1">به طور مداوم در حال یادگیری آخرین الگوریتم‌ها و بهترین روش‌های سئو هستم.</span> با استفاده از دانش و تجربه خود، <span class="text-txt1">به کسب‌وکارها کمک می‌کنم تا در نتایج جستجوی گوگل رتبه بالاتری کسب کنند</span> و ترافیک ارگانیک خود را افزایش دهند.</p>
                </div>

                <!-- //// bottom  -->
                <div>
                    <button class="flex justify-center items-center p-3 gap-3 text-txt4 rounded-lg border-2 border-btn1 cursor-pointer"> با من بیشتر آشنا شوید<IconsArrowLeft class="w-[32px]"></IconsArrowLeft></button>
                </div>

             </div>

          </div>

          <!-- //// call  -->
           <div class="flex justify-center gap-10 items-center text-white bg-Bg/2 w-full h-[290px] mb-16 mt-48 ">

            <div class="flex flex-col gap-6 justify-center items-center text-center w-[739px] h-[192px]">

                <div class="flex flex-col gap-6 justify-center items-center">
                    <p class="text-[28px] leading-[160%] font-medium">سؤالی دارید؟ تماس بگیرید</p>

                    <p class="text-[18px] leading-[160%] opacity-80 font-thin">برای دریافت مشاوره تخصصی در زمینه سئو، شروع همکاری یا هرگونه پرسش، با من تماس بگیرید و با راهکارهای مؤثر به کسب‌وکار آنلاین خود رونق ببخشید</p>
                </div>

                <div>
                    <NuxtLink class="text-[32px] leading-[140%] font-bold cursor-pointer">
                        ۰۹۳۸۰۲۸۶۲۳۰
                    </NuxtLink>
                </div>

            </div>

            <div class="relative bottom-[103px]">
                <img src="../assets/adminPhoto/5792119494850758350 2.png" alt="admin">
            </div>

           </div>


           <!-- //// experience  -->
            <div class="flex flex-col justify-center items-center gap-20 my-20 mx-20">

                <div class="flex flex-col gap-6 justify-center items-center w-[753px]">
                    <div class="w-[101px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full">
                        <IconsDot></IconsDot>نمونه کارها
                    </div>

                    <div class="flex flex-col justify-center items-center gap-4 text-center">
                        <h6 class="text-[18px] leading-[140%] font-bold">پروژه‌های سئو که به رتبه‌های برتر رسیده‌اند</h6>
                        <p class="text-[16px] leading-[160%] font-medium text-txt2">نگاهی جامع به پروژه‌های موفق سئو که با بهبود رتبه‌بندی، افزایش ترافیک ارگانیک و رشد فروش، کسب‌وکارهای مختلف را به سطح بالاتری رسانده‌اند</p>
                    </div>

                </div>


                <div class="flex flex-col justify-center items-center w-[1281px] mx-20 gap-2" >
                    
                    <div class="flex flex-col w-full bg-Bg/3 rounded-2xl" v-for="(slide , index) in slides" :key="index" >

                        <div class="flex justify-between items-center p-4">

                            <div class="flex justify-center items-center gap-[153px]">

                                <div class="flex justify-start items-center gap-8 text-start">
                                
                                    <div class="text-[40px] font-medium leading-[160%] text-center">
                                        <span>0{{ index + 1 }}</span>
                                    </div>
                                
                                    <div class="flex flex-col gap-1">
                                        <p class="text-[20px] leading-[160%] font-medium">نام پروژه: {{ slide.title }}</p>
                                        <p class="text-[16px] leading-[160%] font-light text-txt2">زمینه فعالیت : {{ slide.field }}</p>
                                    </div>
                                
                                </div>
                            
                                <div class="flex justify-center items-center gap-[10px] px-6 py-3 rounded-full border-2 border-Bg/2 text-txt4">
                                    نوع پروژه : <span>{{ slide.type }}</span>
                                </div>

                            </div>


                            <div class="cursor-pointer w-[48px] h-[48px] bg-Bg/2 rounded-full flex justify-center items-center" @click="() => toggleAccordion(index)">
                                <IconsDownBg v-if="accordionOpen !== index"></IconsDownBg>
                                <IconsUpBg  v-if="accordionOpen === index"></IconsUpBg>
                            </div>


                        </div>


                        <div class="flex flex-col gap-6 justify-center items-start w-full px-20 pt-2 pb-6 " v-if="accordionOpen === index">

                            <div class="flex gap-2 text-[16px] leading-[160%] font-light text-txt2 text-start">
                                <img src="../assets/icons/Clock Circle.svg" alt="time">
                                <p>مدت زمان : <span>{{ slide.time }}</span></p>
                            </div>

                            <div class="w-[1121px]">
                                            <ClientOnly>
                                                <swiper-container ref="containerRefTwo" :spaceBetween="-300" :slidesPerView="1.2">
                                                  <swiper-slide
                                                    v-for="(img, idx) in slide.images"
                                                    :key="idx"
                                                  >
                                                    <div class="flex flex-col gap-4">
                                                        <img :src="img" class="w-[600px] rounded-xl" >
                                                        <div class="text-[16px] leading-[160%] font-thin text-txt1">
                                                            <p>{{ slide.subtitle }}</p>
                                                        </div>
                                                    </div>
                                                  </swiper-slide>
                                                </swiper-container>
                                            </ClientOnly>
                            </div>

                        </div>

                    </div>


                </div>

                <div>
                    <NuxtLink>
                        <button class="flex justify-center items-center gap-3 p-3 text-white bg-Bg/2 rounded-lg cursor-pointer">
                           مشاهده نمونه کارها <img src="../assets/icons/Icon pack - Linear 2.svg">
                        </button>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex justify-center items-center m-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
            </div>
           

    </div>
    
</template>

<style lang="css">
.background {
  position: absolute;
  background-size: cover; 
  background-position: center; 
  top: 0;
  left: -5%;
  width: 100vw;
  height: 100%;
  z-index: -1000 ; 
}
</style>