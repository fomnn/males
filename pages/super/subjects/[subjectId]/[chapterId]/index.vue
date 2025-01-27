<script lang="ts" setup>
const route = useRoute("super-subjects-subjectId-chapterId");
const { data: chapter } = useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}`);
const { data: subChapters } = useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters`);

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div v-if="chapter">
    <p>chapter name: {{ chapter.title }}</p>
    <p>sub chapters:</p>
    <div class="grid grid-cols-5 gap-3">
      <div v-for="subChapter of subChapters" :key="subChapter.id" class="bg-white p-3">
        <p>{{ subChapter.title }}</p>
      </div>
    </div>
  </div>
  <p v-else>
    loading chapter ...
  </p>
</template>
