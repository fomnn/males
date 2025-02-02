<script lang="ts" setup>
const route = useRoute("subjects-subjectId-chapterId-subChapterId-articleId");

const { data: subChapter } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}`);
const { data: article } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}`);
const { data: html } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}/html`);

const contentToShow = () => html.value?.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
</script>

<template>
  <div class="mt-[4rem] py-6 space-y-2 px-[1rem] sm:px-[6rem] min-h-[83vh]">
    <NuxtLink class="flex items-center gap-3 border w-fit px-5 py-1.5 rounded-md *:text-slate-500" :to="`/subjects/${route.params.subjectId}/${route.params.chapterId}/${route.params.subChapterId}`">
      <Icon name="material-symbols:arrow-back-rounded" class="text-xl cursor-pointer" />
      <h1 class="text-base">
        Daftar article untuk sub bab {{ subChapter?.title }}
      </h1>
    </NuxtLink>
    <div class="px-[18%]">
      <div class="flex flex-col gap-3 md:flex-row md:items-center mb-6">
        <div class="space-y-2">
          <h1 class="text-4xl font-semibold">
            {{ article?.title }}
          </h1>
        </div>
      </div>
      <img v-if="article?.imageCoverName" class="aspect-video w-full object-cover" :src="useGetImageCoverLink(article?.id, article?.imageCoverName)" alt="image cover">
      <div v-if="html" class="content" v-html="contentToShow()" />
    </div>
  </div>
</template>

<style>
.content p {
  width: 100%;
  /* text-wrap: balance; */
  text-align: justify;
  white-space: normal;
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>
