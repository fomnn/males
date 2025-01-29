<script lang="ts" setup>
const props = defineProps<{
  article: {
    index: number;
    title: string;
    id: number;
    sub_chapter_id: number;
    imageCoverName: string | null;
  };
}>();

const route = useRoute("subjects-subjectId-chapterId-subChapterId");
</script>

<template>
  <NuxtLink :to="`/subjects/${route.params.subjectId}/${route.params.chapterId}/${route.params.subChapterId}/${props.article.id}`" class="flex flex-col px-5 py-3 rounded-lg border cursor-pointer shadow-md">
    <h4 class="text-xl text-start font-medium line-clamp-1">
      {{ props.article.title }}
    </h4>
  </NuxtLink>
</template>
