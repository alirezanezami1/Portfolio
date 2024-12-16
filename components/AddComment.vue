<script setup>
const props = defineProps({
    closeComment: {
        type: Function,
        required: true
    }
});
</script>
<template>
    <div class="flex flex-col justify-center items-center w-full sm:w-[384px] rounded-lg">
        <div class="flex justify-between items-start w-full bg-Bg/3 p-5 rounded-t-lg ">
            <div class="flex flex-col justify-start items-start gap-2 text-right">
                <h6 class="text-[18px] leading-[140%] text-txt1">ثبت نظرات و توصیه نامه ها</h6>
                <p class="text-[14px] leading-[160%] text-txt6">برای ثبت نظرات ، اطلاعات و نظر فرد را وارد کنید</p>
            </div>
        </div>

        <div class="flex w-full gap-4 flex-col sm:flex-row justify-start items-start bg-white p-5">
         
            <div>

            </div>

            <div>
                <div class="w-full grid gap-1">
                         <label for="last-name" class="block text-[16px] leading-[160%] font-medium text-txt1">نام و نام خانوادگی</label>
                         <div class="w-full">
                           <input type="text" name="last-name" id="last-name" v-model="firstName" placeholder="نام و نام خانوادگی خود را وارد کنید"  autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                </div>

                <div class="w-full grid gap-1">
                         <label for="text" class="block text-[16px] leading-[160%] font-medium text-txt1">سمت</label>
                         <div class="w-full ">
                           <input id="text" name="text" type="text" dir="rtl" v-model="phoneNumber"  placeholder="شماره تلفن خود را وارد کنید" autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                </div>

                <div class="w-full grid gap-2">
                            <label for="about" class="block text-[16px] leading-[160%] font-medium text-txt1">نظر و توصیه </label>
                            <div>
                              <textarea name="about" id="about" rows="3" v-model="message" placeholder="متن ارسالی خود را وارد کنید" class="block w-full h-[185px] rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin resize-none" />
                            </div>
                </div>
            </div>
           
        </div>

        <div class="flex justify-end items-start w-full bg-Bg/3 p-5 rounded-b-lg border-none">
            <div class="flex justify-center w-full sm:w-auto sm:justify-end items-start gap-4 text-[14px]">
                <button class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="closeComment">انصراف</button>
                <button class="px-6 py-2 text-white rounded-lg bg-txt4" >ثبت نظر</button>
            </div>
        </div>
    </div>
</template>