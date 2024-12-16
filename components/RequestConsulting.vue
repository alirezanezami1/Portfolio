<script setup>
import { defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
    closeForm: {
        type: Function,
        required: true
    }
});

const selectedOptions = ref([]); // برای ذخیره گزینه‌های انتخاب شده
const options = ref([
    { value: 'انجام پروژه سئو', text: 'انجام پروژه سئو' },
    { value: 'گوگل ادز', text: 'گوگل ادز' },
    { value: 'مشاوره سئو', text: 'مشاوره سئو' },
    { value: 'تدوین استراتژی محتوا', text: 'تدوین استراتژی محتوا' },
    { value: 'منتورینگ سئو', text: 'منتورینگ سئو' },
    { value: 'طراحی سایت', text: 'طراحی سایت' },
]);

const firstName = ref('');
const phoneNumber = ref('');

const submitFreeForm = async () => {

    const formData = {
        name: firstName.value,
        phone: Number(phoneNumber.value),
        choices_field: selectedOptions.value.join(', ')
    };
    

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/freeforms', formData);        
        // پاک کردن مقادیر فرم بعد از ارسال موفقیت‌آمیز
        firstName.value = '';
        phoneNumber.value = '';
        selectedOptions.value = []
        triggerConfirm()
        
        // می‌توانید پیغام موفقیت نمایش دهید
    } catch (error) {
      triggerError()
    }
};


const showError = ref(false); // وضعیت نمایش کامپوننت خطا
const showConfirm = ref(false); // وضعیت نمایش کامپوننت خطا

const triggerError = () => {
    showError.value = true; 
};

const triggerConfirm = () => {
  showConfirm.value = true; 
};


const closeError = () => {
    showError.value = false; 
};

const closeConfirm = () => {
  showConfirm.value = false; 
};

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full sm:w-[488px] rounded-lg">
        <div class="flex justify-between items-start w-full bg-Bg/3 p-5 rounded-t-lg ">
            <div class="flex flex-col justify-start items-start gap-2 text-right">
                <h6 class="text-[18px] leading-[140%] text-txt1">درخواست مشاوره رایگان</h6>
                <p class="text-[14px] leading-[160%] text-txt6">برای مشاوره با من ، اطلاعات تماس خود را وارد کنید  </p>
            </div>
        </div>

        <div class="flex w-full gap-4 flex-col justify-start items-start bg-white p-5">
            <div class="w-full grid gap-1">
                         <label for="last-name" class="block text-[18px] leading-[160%] font-medium text-txt1">نام و نام خانوادگی</label>
                         <div class="mt-1 w-full">
                           <input type="text" name="last-name" id="last-name" v-model="firstName" placeholder="نام و نام خانوادگی خود را وارد کنید"  autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
            </div>

            <div class="w-full grid gap-1">
                         <label for="number" class="block text-[18px] leading-[160%] font-medium text-txt1">تلفن همراه</label>
                         <div class="w-full mt-1">
                           <input id="number" name="number" type="tel" dir="rtl" v-model="phoneNumber"  placeholder="شماره تلفن خود را وارد کنید" autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
            </div>

            <div class="flex justify-start items-start flex-col gap-6 mt-4">
                <p class="text-[14px] leading-[160%] text-txt1">می خواهید مشاوره شما در چه زمینه ای باشد ؟</p>
                <div class="flex justify-start flex-wrap gap-2 items-start text-[14px] leading-[160%] text-txt6">
                <div v-for="option in options" :key="option.value" class="custom-checkbox flex justify-center items-center flex-wrap">
                <input 
                type="checkbox" 
                :id="option.value" 
                v-model="selectedOptions" 
                :value="option.value" 
                @change="handleCheckboxChange"
                />
                <label :for="option.value" class="checkbox-label">
                {{ option.text }}
                </label>
                </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end items-start w-full bg-Bg/3 p-5 rounded-b-lg border-none">
            <div class="flex justify-center w-full sm:w-auto sm:justify-end items-start gap-4 text-[14px]">
                <button class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="closeForm">انصراف</button>
                <button class="px-6 py-2 text-white rounded-lg bg-txt4" @click="submitFreeForm">ثبت درخواست</button>
            </div>
        </div>


        <div v-if="showError || showConfirm" class="overlay" @click="() => {closeError() ; closeConfirm()}">
            <div class="error-container" @click.stop> <!-- جلوگیری از بستن هنگام کلیک روی کامپوننت خطا -->
                <ErrorComponent v-if="showError" :closeErr="closeError"/>
                <Confirm v-if="showConfirm"></Confirm>
            </div>
        </div>
    </div>
</template>

<style scoped>

.custom-checkbox {
    display: flex;
    align-items: center; /* مرکز کردن عمودی */
    gap: 12px;
    margin-bottom: 10px; /* فاصله بین چک باکس‌ها */
}

.custom-checkbox input[type="checkbox"] {
    display: none; /* پنهان کردن چک باکس پیش‌فرض */
}

.checkbox-label {
    position: relative;
    padding-left: 30px; /* فاصله برای ایجاد فضای چک باکس */
    cursor: pointer; /* نشانگر ماوس به شکل اشاره‌گر */
    user-select: none; /* جلوگیری از انتخاب متن */
}

.checkbox-label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px; /* عرض چک باکس */
    height: 20px; /* ارتفاع چک باکس */
    border: 2px solid #ccc; /* حاشیه */
    border-radius: 4px; /* گرد کردن گوشه‌ها */
    background-color: white; /* رنگ پس‌زمینه */
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-label::before {
    background-color: #13144E; /* رنگ پس‌زمینه چک باکس انتخاب شده */
    border-color: #13144E; /* تغییر رنگ حاشیه */
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-label::after {
    content: '✔'; /* علامت تیک */
    position: absolute;
    left: 4px; /* موقعیت علامت تیک */
    top: 52%;
    transform: translateY(-50%);
    color: white; /* رنگ علامت تیک */
    font-size: 16px; /* اندازه علامت تیک */
}

.overlay {
    position: fixed; /* موقعیت ثابت */
    bottom: 0; /* از بالای صفحه */
    left: 0; /* از سمت چپ */
    width: 100%; /* عرض کامل صفحه */
    height: 100%; /* ارتفاع کامل صفحه */
    background-color: rgba(0, 0, 0, 0.24); /* رنگ تار */
    display: flex; /* استفاده از flexbox برای مرکز کردن */
    justify-content: center; /* مرکز کردن افقی */
    align-items: center; /* مرکز کردن عمودی */
    z-index: 1000; /* بالاتر از سایر محتوا */
    backdrop-filter: blur(8px);
}

@media screen and (max-width:640px) {
  .error-container {
    position: fixed;
    bottom: 0;
  }
}

.error-container {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* سایه برای زیبایی */
}
</style>