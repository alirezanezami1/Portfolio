<script setup>
const list = ArrayMenu()
</script>

<template>

<div class="gap-12 hidden md:flex items-center ">
    <NuxtLink v-for="item in list" :to="item.path" :key="item" class="text-sm text-[#050D05] cursor-pointer flex gap-1 text-[16px] text-right font-medium leading-[19.2px]">
        {{ item.title }} <img v-if="item.title === 'خدمات' " src="../../assets/icons/Size=16px, Icon=Arrows-Down (1).svg" alt="icon"  class="w-[16px]">
    </NuxtLink>
</div>

</template>