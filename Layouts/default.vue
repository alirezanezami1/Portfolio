<script setup>

</script>

<template>
    <div class="font-customFont relative text-txt1 overflow-x-hidden" @click="receivedOpcao">
        <div>
            <Header @opcao-emit="receivedOpcao"></Header>
        </div>
        <div>
            <slot></slot>
        </div>
        <div class="mt-24">
            <Footer></Footer>
        </div>
    </div>
</template>