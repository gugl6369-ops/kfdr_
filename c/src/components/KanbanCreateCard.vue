<script setup lang="ts">

</script>
<template>
     <article class="card w-full max-w-120 flex flex-col gap-5 justify-center items-center p-8 bg-white">
        <form id="card-form">
            <div class="flex flex-row justify-between w-full items-center">
                <div class="flex items-center gap-2">
                    <input class="flex p-2 bg-pink-400/25 rounded-3xl ">
                    <img class="w-7 h-7 cursor-pointer" src="@/assets/pic/redact-icon.png"/>
                </div>
                <input class="text-gray-400">
            </div>
            <div class="flex flex-col gap-5 ">
                <input class="text-2xl">
                <div class="flex bg-gray-600/5 p-5 rounded-3xl">
                    <input class="max-w-80">
                </div>
            </div>
            <div class="flex w-full gap-2 items-start">
                <input class="bg-green-400/25 rounded-3xl p-2">
                <input class="bg-green-400/25 rounded-3xl p-2">
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="flex gap-2 items-center items-center">
                    <img class="w-8 h-8" src="@/assets/pic/flag.png"/>
                    <input class="items-end">
                </div>
                <div class="flex items-center gap-5">
                    <div> <!-- v-if="item.redact"-->
                        <input class="text-xl text-gray-400"> <!--изменить!!!!!!!!!!!!!!!!!!!!!!!!!!1-->
                    </div>
                    <div class="p-2 flex justify-center items-center bg-gray-400/25 rounded-3xl cursor-pointer">
                        <img class="w-6 h-6 " src="@/assets/pic/bask.png"/>
                    </div>
                </div>
            </div>
        </form>
    </article>
</template>
<style>

</style>