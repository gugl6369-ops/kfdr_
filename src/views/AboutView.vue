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
    <div>
        <NewFullPost />  
    </div>
    <div v-if="store.comment">
        <CommentsPost v-for="comm in store.comment" :comm="comm"/>
    </div>
</template>
<style>

</style>
