<script setup lang="ts">
const slides = ArrayProject()
const services = [
        {title : 'منتورینگ سئو', path: '/services/seo-mentoring' , description : 'اگه هنوز اعتماد به نفس گرفتن پروژه سئو نداری، حتما از یه منتورسئو کمک بگیر' , img : '/img/2.png'},
        {title : 'مشاوره سئو' , path: '/services/seo-consulting' , description : 'با گرفتن مشاوره سئو، عیب و ایرادهای فعلی سایتت رو برطرف کن' , img : '/img/4.png'},
        {title : 'سئو سایت' , path: '/services/seo' , description : 'با سئو در گوگل دیده شو و فروشت رو چند برابر کن' , img : '/img/10.png'},
        {title : 'گوگل ادز', path: '/services/google-Ads' , description : 'اگه خیلی عجله داری که سایتت به رتبه 1 گوگل برسه، گوگل ادز رو امتحان کن' , img : '/img/9.png'},
        {title : 'طراحی سایت', path: '/services/website-design' , description : 'اگه دنبال یه سایت شیک و حرفه ای واسه خودت هستی، خوب جایی اومدی' , img : '/img/12.png'},
        {title : 'تدوین استراتژی محتوا' , path : '/services/seo-strategy' , description : 'اگه نمیدونی معماری و چیدمان صفحات سایتت چطور باید باشه، نیاز به تدوین استراتژی داری' , img : '/img/3.png'}
    ]

// const containerRefTwo = ref(null)

// const swiperTwo = useSwiper(containerRefTwo)

</script>

<template>
    <div class="flex flex-col justify-center items-center text-txt1">

        <div class="background">
            <img src="/backgrounds/Home page - Desktop (1).png" alt="background img">
        </div>

        <!-- //// معرفی -->
        <div class="flex grid-cols-3 flex-col-reverse lg:flex-row justify-center items-center my-11 mx-5 lg:mx-20 gap-8 lg:gap-3">
            
            <div class="flex lg:flex-col justify-center items-center gap-[37px] lg:gap-[84px] w-[350px] h-[81px] lg:h-auto lg:w-[146px]" dir="ltr">
    
                <div class="flex flex-col justify-center items-center gap-1 w-1/3 lg:w-full h-[116px]">
                    <h1 class="text-[32px] lg:text-[56px] leading-[120%] font-bold">+ 88</h1>
                    <p class="text-[20px] lg:text-[32px] font-medium leading-[160%] lg:leading-[140%] text-txt2">نمونه کار</p>
                </div>
    
                <div class="flex flex-col justify-center items-center gap-1 w-1/3 lg:w-full h-[116px]">
                    <h1 class="text-[32px] lg:text-[56px] leading-[120%] font-bold">+ 8</h1>
                    <p class="text-[20px] lg:text-[32px] font-medium leading-[160%] lg:leading-[140%] text-txt2">سال سابقه</p>
                </div>
    
                <div class="flex flex-col justify-center items-center gap-1 w-1/3 lg:w-full h-[116px]">
                    <h1 class="text-[32px] lg:text-[56px] leading-[120%] font-bold">+ 94</h1>
                    <p class="text-[20px] lg:text-[32px] font-medium leading-[160%] lg:leading-[140%] text-txt2">رضایتمندی</p>
                </div>
    
            </div>
    
            <div class="flex justify-center items-center">
                <img src="../assets/adminPhoto/Main image and text container.png" alt="mainPhoto" class="object-cover w-[328px] lg:w-[606.89px] h-[420px] lg:h-[664px]">
            </div>
    
            <div class="text-center lg:text-right flex flex-col justify-center items-center lg:items-start gap-[48px] w-[524px] max-[768px]:w-[328px]">
                <div class="flex flex-col gap-[40px]">
                    <p class="text-[16px] leading-[160%] font-normal">سلام  👋 من رقیه رنجبری هستم، یه </p>
                <h1 class="text-[44px] lg:text-[64px] font-bold leading-[140%] lg:leading-[120%]">کارشناس سئو </h1>
                <p class="text-txt2 text-[14px] lg:text-[16px] leading-[160%] font-normal">سؤالات زیادی توی ذهنت هست که دوست داری جواب دقیقشون رو بدونی؟ 😎 کافیه شماره‌ت رو بذاری تا با هم صحبت کنیم و کسب‌وکارت رو بررسی کنیم. ببینیم که آیا سئو برای رشد و موفقیت کار تو مناسب هست یا نه. 🔍📈</p>
                </div>
               <div>
                <button class="bg-btn1 p-3 flex text-white justify-center items-center gap-3 rounded-lg">
                    <img src="../assets/icons/Icon pack - Linear.png" alt="icon" class="w-[32px]">
                    <span class="text-[18px] leading-[120%] font-medium">مشاوره رایگان</span>
                </button>
               </div>
            </div>
    
        </div>

        <!-- //// خدمات -->
         <div class="flex flex-col justify-center items-center text-center gap-10 w-[958px] max-[768px]:w-[328px] my-12 mx-5 lg:mx-20">

            <div class="flex flex-col gap-6 justify-center items-center">

                <div class="w-[80px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot> خدمات</div>

                <div class="flex flex-col gap-4 justify-center items-center">
                    <h6 class="text-[18px] leading-[140%] font-bold">از سئو تا طراحی سایت ؛ خدمات کامل برای موفقیت دیجیتال شما</h6>

                    <p class="text-[16px] leading-[160%] font-medium text-txt2 text-center">از بهینه‌سازی سئو و مشاوره‌های تخصصی تا تدوین استراتژی محتوا و تبلیغات هدفمند گوگل ادز، تمامی ابزارهای لازم برای موفقیت دیجیتال شما را در یک پکیج جامع ارائه می‌دهیم</p>
                </div>

            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
                <NuxtLink class="flex flex-col justify-center items-center gap-[14px] text-center w-[308px] h-[284px] bg-Bg/3 p-6 rounded-2xl" v-for="item,index in services" :key="index" :to="item.path">
                    <img :src="item.img" alt="img">
                    <div class="grid gap-4">
                        <h5 class="text-[20px] leading-[140%] font-bold">{{ item.title }}</h5>
                        <p class="text-[16px] leading-[160%] font-normal text-txt2">{{ item.description }}</p>
                    </div>
                </NuxtLink>
            </div>

         </div>

         <!-- //// درباره من  -->
          <div class="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-8 lg:gap-[307px] my-16 mx-5 lg:mx-20 h-[570px] lg:h-auto">

            <!-- //// right  -->
             <div class="flex flex-col items-center lg:items-start gap-6 w-[343px] ">

                <div class="w-[91px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full"><IconsDot></IconsDot> درباره من</div>

                <div class="text-center lg:text-right flex flex-col gap-4">
                    <p class="text-[16px] leading-[120%] font-normal">سلام 👋 دوستان ، من </p>
                    <h1 class="text-[44px] leading-[140%] lg:text-[56px] lg:leading-[120%] font-bold">رقیه رنجبری ام </h1>
                </div>

             </div>


            <!-- //// left  -->
            <div class="flex flex-col gap-6 w-fit lg:w-[630px]">
                <!-- //// top  -->
                <div class="flex flex-col justify-between items-center text-[16px] leading-[160%] font-thin text-txt2 text-center lg:text-right">
                    <p><span class="text-txt1">یک کارشناس سئو با 8 سال تجربه در بهینه سازی وبسایت‌ها برای موتورهای جستجو.</span> علاقه من به دنیای دیجیتال و کمک به کسب‌وکارها برای رشد آنلاین، انگیزه‌ای قوی برای من بوده تا در این حوزه فعالیت کنم.</p>

                    <p>من به عنوان یک کارشناس سئو، <span class="text-txt1">به طور مداوم در حال یادگیری آخرین الگوریتم‌ها و بهترین روش‌های سئو هستم.</span> با استفاده از دانش و تجربه خود، <span class="text-txt1">به کسب‌وکارها کمک می‌کنم تا در نتایج جستجوی گوگل رتبه بالاتری کسب کنند</span> و ترافیک ارگانیک خود را افزایش دهند.</p>
                </div>

                <!-- //// bottom  -->
                <div class="flex justify-center lg:justify-start items-center w-full">
                    <NuxtLink to="/about">
                    <button class="flex justify-center items-center p-3 gap-3 text-txt4 rounded-lg border-2 border-btn1 cursor-pointer"> با من بیشتر آشنا شوید<IconsArrowLeft class="w-[32px]"></IconsArrowLeft></button>
                    </NuxtLink>
                </div>

             </div>

          </div>

          <!-- //// تماس  -->
           <div class="flex justify-center flex-col min-[1140px]:flex-row gap-10 items-center pt-14 min-[1140px]:pt-0 text-white bg-Bg/2 w-full h-auto min-[1140px]:h-[290px] mb-16 mt-48 ">

            <div class="flex flex-col gap-6 justify-center items-center text-center w-fit min-[1140px]:w-[739px] h-[192px]">

                <div class="flex flex-col gap-6 justify-center items-center">
                    <p class="text-[28px] leading-[160%] font-medium">سؤالی دارید؟ تماس بگیرید</p>

                    <p class="text-[18px] leading-[160%] opacity-80 font-thin">برای دریافت مشاوره تخصصی در زمینه سئو، شروع همکاری یا هرگونه پرسش، با من تماس بگیرید و با راهکارهای مؤثر به کسب‌وکار آنلاین خود رونق ببخشید</p>
                </div>

                <div>
                    <NuxtLink class="text-[32px] leading-[140%] font-bold cursor-pointer" to="tel:+989380286230">
                        ۰۹۳۸۰۲۸۶۲۳۰
                    </NuxtLink>
                </div>

            </div>

            <div class="relative min-[1140px]:bottom-[103px]">
                <img src="../assets/adminPhoto/5792119494850758350 2.png" alt="admin">
            </div>

           </div>


           <!-- //// نمونه کار  -->
            <div class="flex flex-col justify-center items-center gap-20 my-20 mx-5 lg:mx-20">

                <div class="flex flex-col gap-6 justify-center items-center w-[328px] min-[1303px]:w-[753px]">
                    <div class="w-[101px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full">
                        <IconsDot></IconsDot>نمونه کارها
                    </div>

                    <div class="flex flex-col justify-center items-center gap-4 text-center">
                        <h6 class="text-[18px] leading-[140%] font-bold">پروژه‌های سئو که به رتبه‌های برتر رسیده‌اند</h6>
                        <p class="text-[16px] leading-[160%] font-medium text-txt2">نگاهی جامع به پروژه‌های موفق سئو که با بهبود رتبه‌بندی، افزایش ترافیک ارگانیک و رشد فروش، کسب‌وکارهای مختلف را به سطح بالاتری رسانده‌اند</p>
                    </div>

                </div>


                <ProjectsComponente :showCount="3" :slides="slides"></ProjectsComponente>

                <div>
                    <NuxtLink to="/projects">
                        <button class="flex justify-center items-center gap-3 p-3 text-white bg-Bg/2 rounded-lg cursor-pointer">
                           مشاهده نمونه کارها <img src="../assets/icons/Icon pack - Linear 2.svg">
                        </button>
                    </NuxtLink>
                </div>
            </div>

            <!-- //// لینک حساب ها -->
            <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
            </div>

            <!-- //// کامنت ها  -->
            <div class="flex flex-col justify-center items-center gap-8 m-20">

                <div class="flex flex-col justify-center items-center text-center gap-6 w-[328px] md:w-[753px]">
                    <div class="flex gap-[5px] justify-center items-center px-3 py-2 rounded-full bg-Bg/3">
                        <IconsDot></IconsDot> <span class="text-[14px] leading-[24%] font-thin">نظرات و توصیه نامه ها</span>
                    </div>

                    <div class="flex flex-col gap-4 justify-center items-center">
                        <h6 class="text-[18px] leading-[140%] font-bold">آنچه همکاران و کارفرمایان درباره تعهد و حرفه‌ای‌ بودن من می‌گویند</h6>
                        <p class="text-[16px] leading-[160%] font-light text-txt2 text-center">از زبان کارفرمایان، همکاران و رهبران پروژه؛ آنچه درباره همکاری با من و تأثیرگذاری بر نتایج کسب‌وکار می‌گویند، از تجربه‌های موفق تا توصیه‌های ارزشمند</p>
                    </div>

                    <div>
                        <button class="flex justify-center items-center gap-[5px] rounded-full bg-btn2 py-[6px] px-3 text-[14px] text-txt4"><img src="../assets/icons/Add Circle.svg">نظرات جدید</button>
                    </div>
                </div>

                <div>
                    <ClientOnly>
                        <CommentSlider></CommentSlider>
                    </ClientOnly>
                </div>

            </div>


            <!-- //// faq -->
             <div class="flex flex-col gap-16 justify-center items-center my-20 mx-5 lg:mx-20">

                <div class="flex flex-col justify-center items-center gap-6 w-[328px] md:w-[753px]">
                    <div class="flex gap-[5px] justify-center items-center px-3 py-2 rounded-full bg-Bg/3">
                        <IconsDot></IconsDot> <span class="text-[14px] leading-[24%] font-thin">سوالات متداول</span>
                    </div>

                    <div class="flex flex-col gap-4 justify-center items-center text-center md:text-right">
                        <h6 class="text-[18px] leading-[140%] font-bold">پاسخ به سوالاتی که ممکن است در ذهن شما باشد</h6>
                        <p class="text-[16px] leading-[160%] font-light text-txt2 text-center">در اینجا به تمامی سوالات مهم شما پاسخ داده شده است تا بتوانید به راحتی تصمیم‌گیری کنید و از روند همکاری مطلع شوید؛ شفاف‌سازی هر آنچه که برای شما اهمیت دارد</p>
                    </div>
                </div>

                <div>
                    <!-- <FAQ></FAQ> -->
                     <ClientOnly>
                         <!-- <Tooltip></Tooltip> -->
                          <Disclosure></Disclosure>
                     </ClientOnly>
                </div>

             </div>

             
           

    </div>
    
</template>

<style lang="css" scoped>
.background {
  position: absolute;
  background-size: cover; 
  background-position: center; 
  top: -.65%;
  left: -5%;
  width: 100vw;
  /* height: 200px !important; */
  z-index: -1000 ; 
}
</style>