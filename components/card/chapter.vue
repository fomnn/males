<script lang="ts" setup>
import type { $Enums } from "@prisma/client";

const props = defineProps<{
  chapter: {
    title: string;
    class: $Enums.classes;
    id: number;
    index: number;
    subject_id: number;
  };
}>();

const { data: subChapters } = await useFetch(`/api/subjects/${props.chapter.subject_id}/chapters/${props.chapter.id}/subChapters`);
</script>

<template>
  <NuxtLink :to="`/subjects/${props.chapter.subject_id}/${props.chapter.id}`" class="flex flex-col px-5 py-3 rounded-lg border cursor-pointer shadow-md">
    <h4 class="text-xl text-start font-medium line-clamp-1">
      {{ props.chapter.title }}
    </h4>
    <div class="flex flex-col items-start">
      <ul class="list-disc list-inside">
        <li v-for="subChapter in subChapters" :key="subChapter.id" class="list-item text-start text-sm">
          {{ subChapter.title }}
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
