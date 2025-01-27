<script lang="ts" setup>
const route = useRoute("super-subjects-subjectId");

const { data: subject, status: statusSubject } = useFetch(`/api/subjects/${route.params.subjectId}`);
const { data: chapters, status: statusChapters } = useFetch(`/api/subjects/${route.params.subjectId}/chapters`);

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div>
    <p>Title: {{ subject?.name }}</p>
    <p>description: {{ subject?.description }}</p>
    <p>chapters:</p>
    <div class="grid grid-cols-5">
      <template v-if="statusChapters === 'success' && statusSubject === 'success'">
        <NuxtLink v-for="chapter of chapters" :key="chapter.id" :to="`/super/subjects/${subject?.id}/${chapter.id}`" class="bg-white px-3 py-3">
          <h2>{{ chapter.title }}</h2>
          <p>{{ chapter.class }}</p>
        </NuxtLink>
      </template>
      <p v-else>
        loading chapters
      </p>
    </div>
  </div>
</template>
