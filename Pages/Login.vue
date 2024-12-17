<script setup>
import axios from 'axios';
const username = ref('')
const password = ref('')

const loginAdmin = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/token/', {
            username,
            password
        });
        
        const token = response.data.access; // فرض بر این است که توکن در اینجا برگردانده می‌شود
        console.log(response.data);
        
        localStorage.setItem('adminToken', token); // ذخیره توکن در localStorage
        localStorage.setItem('idUser' , response.data.id)
        localStorage.setItem('userName' , response.data.username)
        return token;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};


const sendInfo = async () => {
    try {
    const token = await loginAdmin(username.value, password.value); // نام کاربری و رمز عبور ادمین را وارد کنید
  } catch (error) {
    console.error('Login failed:', error);
  }
}


</script>
<template>
    <div class="flex flex-col gap-3 justify-center items-center m-20">
        <input type="text" class="block w-3/5 rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" placeholder="username" v-model="username">
        <input type="password" class="block w-3/5 rounded-xl bg-Bg/3 px-3 p-3 text-[14px] leading-[160%] text-txt7 sm:text-sm/6 placeholder:text-txt2 font-thin" placeholder="password" v-model="password">
        <button @click="sendInfo" class="w-3/5 p-3 bg-Bg/2 rounded-lg text-white flex justify-center items-center">send</button>
    </div>
</template>