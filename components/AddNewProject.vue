<script setup>
import Confirm from './Confirm.vue';

const props = defineProps({
    closeNewProject: {
        type: Function,
        required: true
    }
});

const currentStep = ref(1);


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


const keywords = ref(['']); 
const nameProject = ref('')
const typeProject = ref('')
const contextProject = ref('')
const timeProject = ref('')

const addKeyword = () => {
    keywords.value.push(''); 
};

const removeKeyword = (index) => {
    keywords.value.splice(index, 1); 
};

const image1 = ref(null);
const file1 = ref(null)

const image2 = ref(null);
const file2 = ref(null)

const image3 = ref(null);
const file3 = ref(null)

const image4 = ref(null);
const file4 = ref(null)

const uploadImage = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        if (index === 1) {
            file1.value = file
            image1.value = e.target.result;
        } else if (index === 2) {
            file2.value = file
            image2.value = e.target.result;
        } else if (index === 3) {
            file3.value = file
            image3.value = e.target.result;
        } else if (index === 4) {
            file4.value = file
            image4.value = e.target.result;
        }
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
};

const selectFile = () => {
    const fileInput = document.getElementById('comment-image');
    fileInput.click(); 
};
const selectFile2 = () => {
    const fileInput = document.getElementById('comment-image2');
    fileInput.click(); 
};
const selectFile3 = () => {
    const fileInput = document.getElementById('comment-image3');
    fileInput.click(); 
};
const selectFile4 = () => {
    const fileInput = document.getElementById('comment-image4');
    fileInput.click(); 
};

const removeImage = (index) => {
    if (index === 1) {
        image1.value = null;
    } else if (index === 2) {
        image2.value = null;
    } else if (index === 3) {
        image3.value = null;
    } else if (index === 4) {
        image4.value = null;
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



const publishProject = async () => {
    
    const formData = new FormData();
    formData.append('image_one', file1.value);
    formData.append('image_three', file2.value);
    formData.append('image_four', file3.value);
    formData.append('image_five', file4.value);
    formData.append('project_name', nameProject.value);
    formData.append('type_project', typeProject.value);
    formData.append('timer_project', timeProject.value);
    formData.append('field_project', contextProject.value);
    formData.append('key_words', keywords.value.join(','));    

    try {
        const response = await fetch('http://127.0.0.1:8000/api/portfolio', {
            method: 'POST', 
            body: formData 
        });

        
        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error('Error response:', errorMessage); 
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`)
        }
        const responseData = await response.json();         
        triggerConfirm()
       
    } catch (error) {
        triggerError()
    }


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

       <div class="flex justify-center items-center bg-white w-full p-4">
            <div v-if="currentStep === 1" class="step w-full flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img src="/img/Group 132.png" class="w-full hidden sm:block">
                    <img src="/img/Group 149.png" class="w-full block sm:hidden">
                </div>
                <div class="flex flex-col justify-center gap-2 items-center w-full">
                    <div class="flex justify-center items-center gap-1 w-full sm:pr-20">
                        <div class="w-full">
                        <input type="file" id="comment-image" @change="(e) => uploadImage(e, 1)" accept="image/*" class="hidden" />
                        <button @click="selectFile" class="bg-btn3 text-txt4 text-[14px] px-3 py-2 h-[48px] md:h-auto rounded-full"><span>عکس 1</span></button>
                        </div>
                        <div class="w-full">
                        <input type="file" id="comment-image2" @change="(e) => uploadImage(e, 2)" accept="image/*" class="hidden" />
                        <button @click="selectFile2" class="bg-btn3 text-txt4 text-[14px] px-3 py-2 h-[48px] md:h-auto rounded-full"><span>عکس 2</span></button>
                        </div>
                        <div class="w-full">
                        <input type="file" id="comment-image3" @change="(e) => uploadImage(e, 3)" accept="image/*" class="hidden" />
                        <button @click="selectFile3" class="bg-btn3 text-txt4 text-[14px] px-3 py-2 h-[48px] md:h-auto rounded-full"><span>عکس 3</span></button>
                        </div>
                        <div class="w-full">
                        <input type="file" id="comment-image4" @change="(e) => uploadImage(e, 4)" accept="image/*" class="hidden" />
                        <button @click="selectFile4" class="bg-btn3 text-txt4 text-[14px] px-3 py-2 h-[48px] md:h-auto rounded-full"><span>عکس 4</span></button>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 justify-center items-center gap-2 flex-wrap">
                        <div class="image-wrapper" v-if="image1">
                            <img :src="image1" alt="Image 1"/>
                            <button @click="removeImage(1)" class="remove-button">حذف<img src="../assets/icons/Icon pack - Linear.r.svg"></button>
                        </div>
                        <div class="image-wrapper" v-if="image2">
                            <img :src="image2" alt="Image 2"/>
                            <button @click="removeImage(2)" class="remove-button">حذف<img src="../assets/icons/Icon pack - Linear.r.svg"></button>
                        </div>
                        <div class="image-wrapper" v-if="image3">
                            <img :src="image3" alt="Image 3"/>
                            <button @click="removeImage(3)" class="remove-button">حذف<img src="../assets/icons/Icon pack - Linear.r.svg"></button>
                        </div>
                        <div class="image-wrapper" v-if="image4">
                            <img :src="image4" alt="Image 4"/>
                            <button @click="removeImage(4)" class="remove-button">حذف<img src="../assets/icons/Icon pack - Linear.r.svg"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="currentStep === 2" class="step w-full flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img src="/img/Group 132.2.png" class="w-full hidden sm:block">
                    <img src="/img/Group 149.2.png" class="w-full block sm:hidden">
                </div>
                <div class="grid gap-4 grid-cols-2 w-full sm:grid-cols-10 sm:col-span-full">
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
            
            <div v-if="currentStep === 3" class="step w-full flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img src="/img/Group 132.3.png" class="w-full hidden sm:block">
                    <img src="/img/Group 149.3.png" class="w-full block sm:hidden">
                </div>

                <div class="flex flex-col justify-center items-center gap-2 w-full">
                    <img src="/img/Group 147.png">
                    <div class="flex flex-col justify-center text-center items-center gap-3">
                        <h6 class="text-[18px] leading-[140%] font-bold text-txt1">مراحل با موفقیت طی شدند! آماده انتشار نمونه کار خود هستید؟</h6>
                        <p class="text-[14px] leading-[160%] text-txt6">مراحل قبلی با موفقیت طی شده‌اند. حالا فقط کافیست تأیید کنید تا پروژه شما به نمایش درآید و دیگران هم کار ارزشمندتان را ببینند.</p>
                    </div>
                </div>
            </div>
        </div>
                       
      

        <div class="flex justify-end items-start w-full bg-Bg/3 p-5 rounded-b-lg border-none">
            <div class="flex justify-center w-full sm:w-auto sm:justify-end items-start gap-4 text-[14px]">
                <button v-if="currentStep > 1" class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="prevStep">مرحله قبل</button>
                <button v-if="currentStep === 1" class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="closeNewProject">انصراف</button>
                <button v-if="currentStep < 3" class="px-6 py-2 text-white rounded-lg flex justify-center items-center text-[14px] gap-2 bg-Bg/2" @click="nextStep">مرحله بعد<IconsArrowLeftWhite style="width: 24px;"></IconsArrowLeftWhite></button>
                <button v-if="currentStep === 3" class="px-6 py-2 text-white rounded-lg bg-txt4" @click="publishProject">انتشار نمونه کار</button>
            </div>
        </div>

        <div v-if="showError || showConfirm" class="overlay" @click="closeError">
            <div class="error-container" @click.stop>
                <ErrorComponent v-if="showError" :closeComment2="closeError"/>
                <Confirm v-if="showConfirm" :closeNewProject="closeNewProject" :closeConfirm="closeConfirm"></Confirm>
            </div>
        </div>

    </div>
</template>

<style scoped>
.image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper img {
    width: 150px; /* اندازه عکس */
    height: 150px; /* اندازه عکس */
    object-fit: cover; /* حفظ نسبت ابعاد */
}

.remove-button {
    display: none; 
}
.remove-button img {
    width: 24px !important;
    height: 24px !important;
}

.image-wrapper:hover .remove-button {
    display: flex; 
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    background-color: #13144E;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 8px;
    cursor: pointer;
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