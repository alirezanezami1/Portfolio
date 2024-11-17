<script setup>
    const openMenu = ref(false)
const receivedOpcao =  () => {
    openMenu.value = false
    console.log(openMenu.value);
    return openMenu.value
}
</script>

<template>
    <div class="font-customFont relative text-txt1 overflow-x-hidden" @click="receivedOpcao">
        <div>
            <Header @opcao-emit="receivedOpcao"></Header>
        </div>
        <div class="mx-20" >
            <slot></slot>
        </div>
    </div>
</template>