<script setup>
const props = defineProps({
    closeNewProject: {
        type: Function,
        required: true
    }
});
const isDisabled = ref(false);
const currentStep = ref(1);

const formData = ref({
    title: '',
    description: ''
});
const handleFileUpload = (event) => {
    // مدیریت بارگذاری عکس
    const file = event.target.files[0];
    console.log('Uploaded file:', file);
};

const submitForm = () => {
    // مدیریت ارسال فرم
    console.log('Form submitted:', formData.value);
    nextStep();
};

const nextStep = () => {
    if (currentStep.value < 3) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};

const publishProject = () => {
    // مدیریت انتشار نمونه کار
    console.log('Project published:', formData.value);
};

const keywords = ref(['']); // آرایه برای ذخیره کلمات کلیدی

const addKeyword = () => {
    keywords.value.push(''); // اضافه کردن یک input جدید
};

const removeKeyword = (index) => {
    keywords.value.splice(index, 1); // حذف input با ایندکس مشخص
};



</script>
<template>
    <div class="flex flex-col justify-center items-center w-full md:w-[707px] rounded-lg">
        <div class="flex justify-between items-start w-full bg-Bg/3 p-5 rounded-t-lg ">
            <div class="flex flex-col justify-start items-start gap-2 text-right">
                <h6 class="text-[18px] leading-[140%] text-txt1">نمونه کار های خود را به اشتراک بگذارید</h6>
                <p class="text-[14px] leading-[160%] text-txt6">بهم بگو روی چه چیزی کار میکردی ؟</p>
            </div>
        </div>

       <div class="flex justify-center items-center bg-white w-full p-6">
            <div v-if="currentStep === 1" class="step">
                <h2>بارگذاری عکس</h2>
                <input type="file" @change="handleFileUpload" />
            </div>
            <div v-if="currentStep === 2" class="step w-full">
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-10 sm:col-span-full">
                        <div class="sm:col-span-5 col-span-full grid gap-2">
                         <label for="name_Project" class="block text-[16px] leading-[160%] font-medium text-txt1">نام پروژه</label>
                         <div class="w-full">
                           <input type="text" name="name_Project" id="name_Project" placeholder="نام پروژه را وارد کنید" v-model="nameProject" autocomplete="given-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>
                   
                       <div class="sm:col-span-5 col-span-full grid gap-2">
                         <label for="type_Project" class="block text-[16px] leading-[160%] font-medium text-txt1">نوع پروژه</label>
                         <div>
                           <input type="text" name="type_Project" id="type_Project" placeholder="نوع پروژه خود را وارد کنید" v-model="typeProject" autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 placeholder:text-[14px] font-thin" />
                         </div>
                       </div>

                       <div class="sm:col-span-5 col-span-full grid gap-2">
                         <label for="context_Project" class="block text-[16px] leading-[160%] font-medium text-txt1">زمینه فعالیت پروژه</label>
                         <div>
                           <input type="text" name="context_Project" id="context_Project" placeholder="زمینه فعالیت پروژه خود را وارد کنید" v-model="contextProject" autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 placeholder:text-[14px] font-thin" />
                         </div>
                       </div>

                       <div class="sm:col-span-5 col-span-full grid gap-2">
                         <label for="time_Project" class="block text-[16px] leading-[160%] font-medium text-txt1">مدت زمان پروژه</label>
                         <div>
                           <input type="text" name="time_Project" id="time_Project" placeholder="مدت زمان پروژه خود را وارد کنید" v-model="timeProject" autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 placeholder:text-[14px] font-thin" />
                         </div>
                       </div>

                       <div class="sm:col-span-5 col-span-full grid gap-2">
                                    <label for="keywords">کلمات کلیدی پروژه:</label>
                            <div v-for="(keyword, index) in keywords" :key="index" class="flex justify-center items-center">
                                    <input 
                                        type="text" 
                                        class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 placeholder:text-[14px] font-thin"
                                        v-model="keywords[index]" 
                                        placeholder="کلمه کلیدی" 
                                        id="keywords" 
                                    />
                                 <button @click="removeKeyword(index)"><img src="../assets/icons/Icon pack - LinearX.svg"></button>
                            </div>
                                <button @click="addKeyword" class="flex justify-center items-center text-txt4 p-2 gap-2 rounded-lg border-2 border-Bg/7"><img src="../assets/icons/Icon pack - Linear+.svg">اضافه کن</button>
                        </div>


                </div>
            </div>
            
            <div v-if="currentStep === 3" class="step">
                    <h2>انتشار نمونه کار</h2>
                    <p>آیا مطمئن هستید که می‌خواهید نمونه کار را منتشر کنید؟</p>
                    <button @click="publishProject">انتشار نمونه کار</button>
            </div>
        </div>
                       
      

        <div class="flex justify-end items-start w-full bg-Bg/3 p-5 rounded-b-lg border-none">
            <div class="flex justify-center w-full sm:w-auto sm:justify-end items-start gap-4 text-[14px]">
                <button v-if="currentStep > 1" class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="prevStep">مرحله قبل</button>
                <button v-if="currentStep === 1" class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="closeNewProject">انصراف</button>
                <button v-if="currentStep < 3" class="px-6 py-2 text-white rounded-lg flex justify-center items-center text-[14px] gap-2" @click="nextStep" :class="isDisabled ? 'bg-Bg/4' : 'bg-Bg/2'" :disabled="isDisabled">مرحله بعد<IconsArrowLeftWhite style="width: 24px;"></IconsArrowLeftWhite></button>
                <button v-if="currentStep === 3" class="px-6 py-2 text-white rounded-lg bg-txt4" >انتشار نمونه کار</button>
            </div>
        </div>
    </div>
</template>