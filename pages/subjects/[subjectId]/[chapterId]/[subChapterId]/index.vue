<script lang="ts" setup>
const route = useRoute("subjects-subjectId-chapterId-subChapterId");

const { data: chapter } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}`);
const { data: subChapter } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}`);
const { data: articles } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles`);
</script>

<template>
  <div class="mt-[4rem] py-6 space-y-2 px-[1rem] sm:px-[6rem] min-h-[83vh]">
    <NuxtLink class="flex items-center gap-3 border w-fit px-5 py-1.5 rounded-md *:text-slate-500" :to="`/subjects/${route.params.subjectId}/${chapter?.id}`">
      <Icon name="material-symbols:arrow-back-rounded" class="text-xl cursor-pointer" />
      <h1 class="text-base">
        Daftar sub bab untuk bab {{ chapter?.title }}
      </h1>
    </NuxtLink>
    <div class="flex flex-col gap-3 md:flex-row md:items-center">
      <div class="space-y-2">
        <h1 class="text-4xl font-semibold">
          {{ subChapter?.title }}
        </h1>
        <!-- <p class="w-10/12">
          {{ subject?.name }}
        </p> -->
      </div>
    </div>
    <div class="grid grid-cols-1 gap-y-3 gap-x-5 pt-3 lg:grid-cols-3 md:grid-cols-2">
      <template v-if="articles && articles?.length > 0">
        <CardArticle v-for="article of articles" :key="article.id" :article />
      </template>
      <p v-if="articles && articles?.length === 0" class="text-2xl">
        Yahh belum ada article
      </p>
    </div>
  </div>
</template>
