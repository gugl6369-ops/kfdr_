<script setup lang="ts"></script>
<template>
    <div class="loading">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>
<style>
.loading{
    display: flex;
    width: 250px;
    height: 500px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    
}
.circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(43, 43, 198);
    transform-origin: 50%;
    animation: circle .5s alternate infinite ease;
}
.circle:nth-child(2){
    animation-delay: .2s;
}
.circle:nth-child(3){
    animation-delay: .3s;
}
@keyframes circle {
    0%{
        transform: translateY(60px);
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
    }
    40%{
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
    }
    100%{
        transform: translateY(0px);
    }
}
</style>