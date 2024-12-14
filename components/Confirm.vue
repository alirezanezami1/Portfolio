<template>
    <div class="flex flex-col justify-center items-center gap-7 pb-6 p-6 w-full sm:w-[400px] bg-white rounded-lg">
        <img src="/img/Frame 579.png" alt="confirm">

        <div class="flex flex-col justify-center items-center gap-6">
            <div class="flex flex-col justify-center items-center gap-3 text-center">
                <h6 class="text-[18px] leading-[140%] font-bold text-txt1">درخواست شما ارسال شد</h6>
                <p class="text-[14px] leading-[160%] text-txt6">درخواست شما با موفقیت ارسال شد! تا پاسخ نهایی می توانید نمونه کار ها و عملکرد من را مشاهده کنید</p>
            </div>

            <div class="flex justify-center items-center">
                <NuxtLink to="/projects" class="flex justify-center text-txt4 border border-btn3 rounded-lg items-center gap-2 p-2 pr-4 cursor-pointer text-[14px] leading-[24%]">
                    مشاهده نمونه کارها <IconsArrowLeft></IconsArrowLeft>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>