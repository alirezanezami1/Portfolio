<script setup>
import { ref } from 'vue';

const firstName = ref('');
const phoneNumber = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');
const errors = ref({});

const validateForm = () => {
    errors.value = {}; 

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
        errors.value.phoneNumber = 'شماره تلفن نامعتبر است.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errors.value.email = 'ایمیل نامعتبر است.';
    }

    return Object.keys(errors.value).length === 0;
};

const clearErrors = () => {
    errors.value = {}; 
};

const submitForm = async () => {
    if (!validateForm()) {
      setTimeout(clearErrors, 3000)
        return;
    }

    const formData = {
      Name: firstName.value,
      last_name: lastName.value,
      phone: Number(phoneNumber.value),
      email: email.value,
      person_text: message.value,
    };

   await fetch('http://127.0.0.1:8000/api/forms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      firstName.value = '';
        lastName.value = '';
        phoneNumber.value = '';
        email.value = '';
        message.value = '';
        triggerConfirm()
    })
    .catch((error) => {
      triggerError()
    });
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

const handleClickOutside = (event) => {
  const dropdown = document.getElementsByClassName('overlay');
  if (dropdown) {
    closeError();
    closeConfirm()
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
    <div class="flex flex-col justify-center items-center my-10 mx-20">

        <div class="background">
            <img src="/backgrounds/Contact me - Desktop.png" alt="background img">
        </div>

        <!-- //// لینک ها  -->
        <div class="flex justify-start items-start text-[12px] leading-[160%] gap-2 w-[328px] md:w-full">
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
                     <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10 w-[328px] md:w-[848px]">

                      <div class="grid gap-4 grid-cols-1 sm:grid-cols-10 sm:col-span-full">
                        <div class="sm:col-span-5 grid gap-2">
                         <label for="first-name" class="block text-[18px] leading-[160%] font-medium text-txt1">نام</label>
                         <div class="mt-2">
                           <input type="text" name="first-name" id="first-name" placeholder="نام خود را وارد کنید" v-model="firstName" autocomplete="given-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>
                   
                       <div class="sm:col-span-5 grid gap-2">
                         <label for="last-name" class="block text-[18px] leading-[160%] font-medium text-txt1">نام خانوادگی</label>
                         <div class="mt-2">
                           <input type="text" name="last-name" id="last-name" placeholder="نام خانوادگی خود را وارد کنید" v-model="lastName" autocomplete="family-name" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                         </div>
                       </div>
                      </div>
                   
                       <div class="sm:col-span-full grid gap-2">
                         <label for="number" class="block text-[18px] leading-[160%] font-medium text-txt1">تلفن همراه</label>
                         <div class="mt-2">
                           <input id="number" name="number" type="tel" dir="rtl" v-model="phoneNumber" placeholder="شماره تلفن خود را وارد کنید" autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                           <span v-if="errors.phoneNumber" class="error text-error text-[14px]">{{ errors.phoneNumber }}</span>
                         </div>
                       </div>

                       <div class="sm:col-span-full grid gap-2">
                         <label for="email" class="block text-[18px] leading-[160%] font-medium text-txt1">ایمیل</label>
                         <div class="mt-2">
                           <input id="email" name="email" type="email" v-model="email" placeholder="ایمیل خود را وارد کنید" autocomplete="email" class="block w-full rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" />
                           <span v-if="errors.email" class="error text-error">{{ errors.email }}</span>
                         </div>
                       </div>

                        <div class="col-span-full grid gap-2">
                            <label for="about" class="block text-[18px] leading-[160%] font-medium text-txt1">متن ارسالی</label>
                            <div class="mt-2">
                              <textarea name="about" id="about" rows="3" v-model="message" placeholder="متن ارسالی خود را وارد کنید" class="block w-full h-[325px] rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin resize-none" />
                            </div>
                        </div>
                   
                     </div>
                </div>

            </div>

            <div class="w-full p-3 bg-Bg/2 rounded-lg text-white flex justify-center items-center">
                <button @click="submitForm" class="flex justify-center items-center gap-3 text-center"><span class="text-[18px] leading-[120%]">ارسال پیام</span><IconsArrowLeftWhite></IconsArrowLeftWhite></button>
            </div>

         </div>


         <!-- //// سوشال مدیا -->
        <div class="flex justify-center items-center my-20 mx-5 lg:mx-20">
                <ClientOnly>
                    <KeenSlider></KeenSlider>
                </ClientOnly>
        </div>

        <div v-if="showError || showConfirm" class="overlay" @click="closeError">
            <div class="error-container" @click.stop> 
                <ErrorComponent v-if="showError" />
                <Confirm v-if="showConfirm"></Confirm>
            </div>
        </div>
    </div>
</template>

<style scoped>
input:focus,
textarea:focus {
    outline: none; 
    border: 0px solid transparent; 
}

.background {
  position: absolute;
  background-size: cover; 
  background-position: center; 
  top: 1.5%;
  left: -6%;
  width: 100vw;
  z-index: -1000 ; 
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