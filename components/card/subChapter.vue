<script lang="ts" setup>
const props = defineProps<{
  subChapter: {
    index: number;
    id: number;
    title: string;
    chapter_id: number;
  };
}>();

const route = useRoute("subjects-subjectId-chapterId");
</script>

<template>
  <NuxtLink :to="`/subjects/${route.params.subjectId}/${route.params.chapterId}/${props.subChapter.id}`" class="flex flex-col px-5 py-3 rounded-lg border cursor-pointer shadow-md">
    <h4 class="text-xl text-start font-medium line-clamp-1">
      {{ props.subChapter.title }}
    </h4>
    <!-- <div class="flex flex-col items-start">
      <ul class="list-disc list-inside">
        <li v-for="subChapter in subChapters" :key="subChapter.id" class="list-item text-start text-sm">
          {{ subChapter.title }}
        </li>
      </ul>
    </div> -->
  </NuxtLink>
</template>
