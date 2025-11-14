<script setup lang="ts">
    import NewFullPost from '@/components/NewFullPost.vue';
    import CommentsPost from '@/components/CommentsPost.vue';
    import {useCommentsStore} from '@/stores/comments';
import { onMounted } from 'vue';

    const store = useCommentsStore();
    const props = defineProps<{id:number}>();

    store.setStoryId(props.id);
    onMounted( async () => {
        await store.getPost();
        await store.getComment();
    })


</script>
<template>
    <div class="w-4/5 items-center justify-center">
        <NewFullPost />  
    </div>
    <div v-if="store.comment" class="w-full flex justify-center items-center">
        <div v-if="!store.isLoadingComments" class="flex flex-col gap-10 w-4/5">
            <h2 class="text-4xl">Комментарии:</h2>
            <CommentsPost v-for="comm in store.comment" :comm="comm"/>
        </div>
        <div v-else>
            <p>Загрузка комментариев ()</p>
        </div>
    </div>
</template>
<style>

</style>
