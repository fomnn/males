<script lang="ts" setup>
const route = useRoute("subjects-subjectId-chapterId-subChapterId-articleId");

const { data: subChapter } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}`);
const { data: article } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}`);
const { data: html } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}/html`);
</script>

<template>
  <div class="mt-[4rem] py-6 space-y-2 px-[1rem] sm:px-[6rem] min-h-[83vh]">
    <NuxtLink class="flex items-center gap-3 border w-fit px-5 py-1.5 rounded-md *:text-slate-500" :to="`/subjects/${route.params.subjectId}/${route.params.chapterId}/${route.params.subChapterId}`">
      <Icon name="material-symbols:arrow-back-rounded" class="text-xl cursor-pointer" />
      <h1 class="text-base">
        Daftar article untuk sub bab {{ subChapter?.title }}
      </h1>
    </NuxtLink>
    <div class="flex flex-col gap-3 md:flex-row md:items-center">
      <div class="space-y-2">
        <h1 class="text-4xl font-semibold">
          {{ article?.title }}
        </h1>
        <!-- <p class="w-10/12">
          {{ subject?.name }}
        </p> -->
      </div>
    </div>
    <img v-if="article?.imageCoverName" :src="useGetImageCoverLink(article?.id, article?.imageCoverName)" alt="">
    <div v-if="html" v-html="html" />
  </div>
</template>
