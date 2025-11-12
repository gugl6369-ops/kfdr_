<script setup lang="ts">
    import NewFullPost from '@/components/NewFullPost.vue';
    import {useCommentsStore} from '@/stores/comments';

    const store = useCommentsStore();

    const props = defineProps<{id:number}>();
    store.setStoryId(props.id);

</script>
<template>
    <div>
        <NewFullPost />  
    </div>
</template>
<style>

</style>
