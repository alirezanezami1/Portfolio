<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

  const SeoList = [
    { title : 'اقدامات اولیه سئو' , answer : ['ادیت فایل robots.txt' , 'ادیت فایل سایت مپ Sitemap.xml و سابمیت آن در سرچ کنسول' , 'اتصال سایت به گوگل سرچ کنسول' , ' اتصال سایت به گوگل آنالیتیکس' , 'استفاده از سرویس Http2' , ' فعالسازی تگ HSTS Header'] },
    { title : 'اقدامات سئو تکنیکال' , answer : ['بررسی موبایل فرندلی بودن سایت و رفع ارورهای مربوط به آن' , 'بررسی ریسپانسیو بودن سایت' , 'بررسی تمام صفحات از نظر لود تایم، حجم صفحه و تعداد ریکوئست' , 'بررسی نحوه ایندکس صفحات و رفع ارورهای مربوط به بخش Coverage' , 'بررسی لینک های شکسته و صفحات 404' , 'بررسی ریدایرکت های 301 و 302' , 'بررسی لینک های اسپم با استفاده از Disavow tool' , 'بررسی ارورهای بخش Core web Vitals و Page Experience' , 'استفاده صحیح از تگ کنونیکال برای صفحات' , 'گذاشتن اسکیما و استفاده از ساختارهای داده یافته لوگو، ویدیو و ...' , 'تهیه بکاپ از سایت به صورت ماهانه']},
    { title : 'اقدامات سئو داخلی ' , answer : ['انجام کیورد ریسرچ و استخراج کلمات با حجم سرچ بالا' , 'بهینه سازی متاتایتل و متادسکریپشن صفحات' , 'بررسی هدینگ های صفحات' , 'لینک سازی داخلی و تقویت صفحات' , 'بررسی صفحات از نظر کنیبالیزیشن' , 'بررسی UX سایت برای تجربه کاربری بهتر' , 'بهینه سازی تصاویر و استفاده از تگ Alt برای تصاویر' , 'رعایت کامل موارد نگارشی در نوشتن مقالات' , 'بهینه سازی محتواهای قدیمی']},
    { title : ' اقدامات سئو خارجی' , answer : ['آنالیز بک لینک های رقبا با استفاده از ابزار Semrush و Moz' , 'ساخت بک لینک به صورت روزانه در سایت های web2.0 و بلاگ های معتبر ایرانی و خارجی' , 'رعایت سه فاکتور دامین اتوریتی، اسپم اسکور و محتوای مرتبط در ساخت بک لینک' , 'چیدن کمپین رپورتاژ']},
    { title : 'آنالیز سایت و میزان ورودی ها ' , answer : ['بررسی وضعیت کنونی سایت' , 'بررسی تعداد لینک های ورودی' , 'بررسی رتبه گوگل' , 'شناخت و آنالیز رقبای اصلی در زمینه کاری سایت مذکور' , 'بررسی اطلاعات و مشخص کردن نقاط ضعف و قوت سایت فعلی' , 'بررسی کلمات کلیدی ارائه شده و تعیین جایگاه فعلی هرکدام از کلمات' , 'آنالیز رقبای اصلی و کلمات کلیدی بکار رفته در این سایت ها' , 'ارائه گزارش از لیست نهایی کلمات کلیدی جهت تایید' , 'بررسی میزان بهبود وضعیت سئو شما و ایندکس صفحات در گوگل' , 'بررسی تغییرات رتبه شما برای کلمات کلیدی اصلی در نتایج گوگل' , 'آنالیز بازدیدکنندگان سایت' , 'بررسی صفحات پربازدید سایت' , 'بررسی میزان حضور بازدیدکنندگان در سایت' , 'بررسی مسیر ورود بازدیدکنندگان به سایت شما' , 'بررسی تعداد بازدیدکنندگان از گوگل و کلمات کلیدی موثر در آن']}
  ]

 const openIndexes = ref(SeoList.map(() => true)); // همه موارد به صورت پیش‌فرض باز هستند

// تابع برای تغییر وضعیت
const toggleAccordion = (index) => {
    openIndexes.value[index] = !openIndexes.value[index];
};
  </script>


<template>
    <div class="flex flex-col gap-4 justify-center items-center">
        <div v-for="item,index in SeoList" :key="index" class="w-[328px] md:w-full px-3 md:px-6 py-5 bg-Bg/3 rounded-xl">
            <Disclosure :defaultOpen="openIndexes[index]">
                <template #default="{open}">
                    <DisclosureButton class="flex justify-between items-center w-full md:px-4 py-2 text-right md:text-left bg-gray-200 rounded-lg focus:outline-none">
        <span class="text-[18px] leading-[140%] font-bold flex gap-[14px] md:gap-6 justify-center items-center"><span class="text-[14px] leading-[160%] md:text-[18px] md:leading-[140%]">0{{ index + 1 }}</span> {{ item.title }}</span>
        <img src="../assets/icons/Frame 124 (1).png" :class="['-ml-2' ,{ 'transform rotate-180': open }]">
        </DisclosureButton>
        <DisclosurePanel class="p-4 md:px-16 md:pt-6 pb-2 text-[16px] leading-[160%] font-thin text-txt2 text-right flex flex-col justify-start items-start gap-2 md:gap-4">
            <p v-for="txt in item.answer" :key="txt" class="text-[12px] md:text-[18px] leading-[160%] text-txt6 flex justify-start items-start"><span class="text-[20px] ml-1 -mt-1 md:hidden">.</span>{{ txt.trim() }}</p>
        </DisclosurePanel>
                </template>
        </Disclosure>

        </div>

    </div>
  </template>