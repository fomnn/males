<script lang="ts" setup>
const route = useRoute("super-subjects-subjectId-chapterId-subChapterId");
const router = useRouter();

const { data: subChapter, refresh: refreshSubChapter } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}`);
const { data: articles } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles`);

const isEditing = ref(false);

const subChapterName = ref("");

function handleUpdateSubChapter() {
  $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}`, {
    method: "PUT",
    body: {
      title: subChapterName.value,
      index: subChapter.value?.index,
    },
    onResponse: () => {
      isEditing.value = false;
      refreshSubChapter();
    },
  });
}

function handleDeleteSubChapter() {
  $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}`, {
    method: "DELETE",
    onResponse: () => {
      router.replace(`/super/subjects/${route.params.subjectId}/${route.params.chapterId}`);
    },
  });
}

watch(() => subChapter, () => {
  subChapterName.value = subChapter.value?.title || "";
});

onMounted(() => {
  if (subChapter.value) {
    subChapterName.value = subChapter.value.title;
  }
});

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div>
    <button @click="$router.back()">
      back
    </button>
    <button class="block" @click="isEditing = !isEditing">
      {{ isEditing ? "cancel" : "edit" }}
    </button>
    <button class="block" @click="handleDeleteSubChapter">
      delete
    </button>
    <p v-if="!isEditing">
      sub chapter name: {{ subChapter?.title }}
    </p>
    <p v-else>
      sub chapter name:
      <input v-model="subChapterName" type="text">
      <button type="button" @click="handleUpdateSubChapter">
        save
      </button>
    </p>
    <!-- <p>sub chapter description: {{ subChapter?.description }}</p> -->
    <p>articles:</p>
    <NuxtLink :to="`/super/subjects/${route.params.subjectId}/${route.params.chapterId}/${route.params.subChapterId}/create-article`" class="bg-white">
      create new article
    </NuxtLink>
    <div class="grid grid-cols-5 gap-3">
      <NuxtLink v-for="article of articles" :key="article.id" :to="`/super/subjects/${route.params.subjectId}/${route.params.chapterId}/${route.params.subChapterId}/${article.id}`" class="">
        <img v-if="article.imageCoverName" :src="useGetImageCoverLink(article.id, article.imageCoverName)" alt="">
        <p>{{ article.title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
