<script setup>
const props = defineProps({
    closeComment: {
        type: Function,
        required: true
    }
});


const imageSrc = ref('/img/Avatar.png'); 
const base64Image = ref(null);

const onImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // base64Image.value = e.target.result; 
            imageSrc.value = e.target.result;
        };
        reader.readAsDataURL(file);
        base64Image.value = file
    } else {
        imageSrc.value = '/img/Avatar.png'; 
    }
};

const selectFile = () => {
    const fileInput = document.getElementById('comment-image');
    fileInput.click(); 
};

const firstName = ref('')
const position = ref('')
const message = ref('')


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

const token = ref(null)

const submitComment = async () => {

    const formData = new FormData();
    formData.append('title', firstName.value);
    formData.append('company_name', position.value);
    formData.append('comment', message.value);
    formData.append('company_image', base64Image.value);
    formData.append('users', 1);

    

    try {
        const response = await fetch('http://127.0.0.1:8000/api/comments', {
            method: 'POST', 
            headers: {
                'Authorization': `Bearer ${token.value}`
            },
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
        console.error('Error sending data:', error);
        triggerError()
    }
   
};

onMounted(async () => {
     token.value = localStorage.getItem('adminToken');
    console.log(token.value);
    
});



</script>
<template>
    <div class="flex flex-col justify-center items-center w-full md:w-[672px] rounded-lg">
        <div class="flex justify-between items-start w-full bg-Bg/3 p-5 rounded-t-lg ">
            <div class="flex flex-col justify-start items-start gap-2 text-right">
                <h6 class="text-[18px] leading-[140%] text-txt1">ثبت نظرات و توصیه نامه ها</h6>
                <p class="text-[14px] leading-[160%] text-txt6">برای ثبت نظرات ، اطلاعات و نظر فرد را وارد کنید</p>
            </div>
        </div>

        <div class="flex w-full gap-4 flex-col md:flex-row justify-start items-start bg-white p-5">
         
            <div class="flex w-full md:w-auto h-auto md:h-[370px] pb-2 md:pl-2 flex-row justify-between md:flex-col md:justify-start md:items-start border-b-2 md:border-b-0 md:border-l-2 border-Bg/7">
                <div class="w-[102px] grid gap-1">
                <img :src="imageSrc" alt="Comment Image" class="w-full h-auto rounded-lg mt-4 md:mt-2" />
                </div>

                <div class="w-[102px] mt-4 grid gap-1">
                <div class="w-full">
                    <input type="file" id="comment-image" @change="onImageChange" accept="image/*" class="hidden" />
                    <button @click="selectFile" class="bg-btn3 text-txt4 text-[14px] px-3 py-2 h-[48px] md:h-auto rounded-full"><span>+ عکس جدید</span></button>
                </div>
                </div>
            </div>

            <div class="flex flex-col w-full justify-center gap-2 items-center">
                <div class="w-full grid gap-1">
                         <label for="last-name" class="block text-[16px] leading-[160%] text-txt1">نام و نام خانوادگی</label>
                         <div class="w-full">
                           <input type="text" name="last-name" id="last-name" v-model="firstName" placeholder="نام و نام خانوادگی خود را وارد کنید"  autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                </div>

                <div class="w-full grid gap-1">
                         <label for="text" class="block text-[16px] leading-[160%] text-txt1">سمت</label>
                         <div class="w-full ">
                           <input id="text" name="text" type="text" dir="rtl" v-model="position"  placeholder="مدیر سایت..." autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                </div>

                <div class="w-full grid gap-2">
                            <label for="about" class="block text-[16px] leading-[160%] font-medium text-txt1">نظر و توصیه </label>
                            <div>
                              <textarea name="about" id="about" rows="3" v-model="message" placeholder="متن ارسالی خود را وارد کنید" class="block w-full h-[100px] md:h-[185px] rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin resize-none" />
                            </div>
                </div>
            </div>
           
        </div>

        <div class="flex justify-end items-start w-full bg-Bg/3 p-5 rounded-b-lg border-none">
            <div class="flex justify-center w-full sm:w-auto sm:justify-end items-start gap-4 text-[14px]">
                <button class="px-6 py-2 text-txt1 rounded-lg bg-Bg/3 border-2 border-btn3" @click="closeComment">انصراف</button>
                <button class="px-6 py-2 text-white rounded-lg bg-txt4" @click="submitComment">ثبت نظر</button>
            </div>
        </div>


        <div v-if="showError || showConfirm" class="overlay" @click="closeError">
            <div class="error-container" @click.stop> <!-- جلوگیری از بستن هنگام کلیک روی کامپوننت خطا -->
                <ErrorComponent v-if="showError" :closeComment2="closeError"/>
                <ConfirmComment v-if="showConfirm"></ConfirmComment>
            </div>
        </div>
    </div>
</template>

<style scoped>

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