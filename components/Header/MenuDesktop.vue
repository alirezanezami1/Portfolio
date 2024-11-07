<script setup>
const list = ArrayMenu()
</script>

<template>

<div class="flex gap-12">
    <NuxtLink v-for="item in list" :key="item" class="text-sm cursor-pointer">
        {{ item.title }}
    </NuxtLink>
</div>

</template>