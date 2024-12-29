<script setup>
import { defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
    closeForm: {
        type: Function,
        required: true
    }
});

const selectedOptions = ref([]);
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
        phone: String(phoneNumber.value),
        choices_field: selectedOptions.value
    };
    

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/freeforms', formData);        
        firstName.value = '';
        phoneNumber.value = '';
        selectedOptions.value = []
        triggerConfirm()
    } catch (error) {
      triggerError()
    }
};


const showError = ref(false); 
const showConfirm = ref(false);

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
    align-items: center; 
    gap: 12px;
    margin-bottom: 10px; 
}

.custom-checkbox input[type="checkbox"] {
    display: none; 
}

.checkbox-label {
    position: relative;
    padding-left: 30px; 
    cursor: pointer;
    user-select: none; 
}

.checkbox-label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px; 
    height: 20px;
    border: 2px solid #ccc; 
    border-radius: 4px; 
    background-color: white; 
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-label::before {
    background-color: #13144E; 
    border-color: #13144E; 
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-label::after {
    content: '✔'; 
    position: absolute;
    left: 4px;
    top: 52%;
    transform: translateY(-50%);
    color: white; 
    font-size: 16px; 
}

.overlay {
    position: fixed; 
    bottom: 0;
    left: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.24); 
    display: flex; 
    justify-content: center; 
    align-items: center;
    z-index: 1000; 
    backdrop-filter: blur(8px);
}

@media screen and (max-width:640px) {
  .error-container {
    position: fixed;
    bottom: 0;
  }
}

.error-container {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>