<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20">
        <!-- //// لینک ها  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-full">
            <NuxtLink to="/" class="flex justify-center items-center gap-2 text-txt2 ">صفحه اصلی<IconsLinearGray></IconsLinearGray></NuxtLink>
            <span>ارتباط با من</span>
        </div>

        <!-- //// فرم -->
         <div class="flex flex-col justify-center items-center gap-10 my-20">
            <div class="flex flex-col justify-center items-center gap-16">

                <!-- //// متن فوقانی فرم -->
                <div class="flex flex-col justify-center items-center gap-11">
                    <div class="flex flex-col justify-center items-center gap-6 w-[328px] md:w-[753px] text-center">
                        <div class="w-[104px] h-[36px] bg-Bg/3 flex gap-[5px] justify-center items-center text-[14px] leading-[24] font-medium rounded-full text-txt1"><IconsDot></IconsDot>ارتباط با من</div>

                        <div class="flex flex-col gap-4 justify-center items-center">
                          <h6 class="text-[18px] leading-[140%] font-bold">هر زمان که آماده بودید، من منتظر تماس شما هستم</h6>
                          <p class="text-[16px] leading-[160%] text-txt2">هر سوالی دارید یا نیاز به اطلاعات بیشتری دارید، همین حالا از طریق فرم تماس با من در میان بگذارید؛ من با دقت به پیام شما رسیدگی خواهم کرد و در کنار شما خواهم بود</p>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center w-full opacity-80">
                        <div class="flex justify-center text-[16px] leading-[160%] text-txt7 gap-6"><div class="flex justify-center items-center gap-4"><img src="../assets/icons/Phone.png">شماره همراه :</div>۰۹۳۸۰۲۸۶۲۳۰</div>
                        <div class="flex justify-center text-[16px] leading-[160%] text-txt7 gap-6"><div class="flex justify-center items-center gap-4"><img src="../assets/icons/Letter.png">ایمیل :</div> r.ranjbari67@gmail.com </div>
                    </div>
                </div>

                <!-- //// فرم ارتباط با من  -->
                <div class="w-full">
                     <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10 w-[848px]">

                      <div class="grid gap-4 grid-cols-1 sm:grid-cols-10 sm:col-span-full">
                        <div class="sm:col-span-5 grid gap-2">
                         <label for="first-name" class="block text-[18px] leading-[160%] font-medium text-txt1">نام</label>
                         <div class="mt-2">
                           <input type="text" name="first-name" id="first-name" placeholder="نام خود را وارد کنید" autocomplete="given-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>
                   
                       <div class="sm:col-span-5 grid gap-2">
                         <label for="last-name" class="block text-[18px] leading-[160%] font-medium text-txt1">نام خانوادگی</label>
                         <div class="mt-2">
                           <input type="text" name="last-name" id="last-name" placeholder="نام خانوادگی خود را وارد کنید" autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>
                      </div>
                   
                       <div class="sm:col-span-full grid gap-2">
                         <label for="number" class="block text-[18px] leading-[160%] font-medium text-txt1">تلفن همراه</label>
                         <div class="mt-2">
                           <input id="number" name="number" type="number" placeholder="شماره تلفن خود را وارد کنید" autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>

                       <div class="sm:col-span-full grid gap-2">
                         <label for="email" class="block text-[18px] leading-[160%] font-medium text-txt1">ایمیل</label>
                         <div class="mt-2">
                           <input id="email" name="email" type="email" placeholder="ایمیل خود را وارد کنید" autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>

                        <div class="col-span-full grid gap-2">
                            <label for="about" class="block text-[18px] leading-[160%] font-medium text-txt1">متن ارسالی</label>
                            <div class="mt-2">
                              <textarea name="about" id="about" rows="3" placeholder="متن ارسالی خود را وارد کنید" class="block w-full h-[325px] rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                            </div>
                        </div>
                   
                     </div>
                </div>

            </div>

            <div class="w-full p-3 bg-Bg/2 rounded-lg text-white flex justify-center items-center">
                <button class="flex justify-center items-center gap-3 text-center"><span class="text-[18px] leading-[120%]">ارسال پیام</span><IconsArrowLeftWhite></IconsArrowLeftWhite></button>
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

<style scoped>
input:focus,
textarea:focus {
    outline: none; /* حذف outline پیش‌فرض */
    border: 0px solid transparent; /* یا رنگ دلخواه خود را اینجا قرار دهید */
}
</style>