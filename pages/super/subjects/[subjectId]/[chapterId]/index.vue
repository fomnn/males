<script lang="ts" setup>
const route = useRoute("super-subjects-subjectId-chapterId");
const router = useRouter();

const { data: chapter, refresh: refreshChapter } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}`);
const { data: subChapters } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters`);

const isEditing = ref(false);

const chapterName = ref("");

function handleUpdateChapter() {
  $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}`, {
    method: "PUT",
    body: {
      title: chapterName.value,
      index: chapter.value?.index,
    },
    onResponse: async () => {
      await refreshChapter();
      isEditing.value = false;
    },
  });
}

async function handleDeleteChapter() {
  await $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}`, {
    method: "DELETE",
    onResponse: () => {
      router.replace(`/super/subjects/${route.params.subjectId}`);
    },
  });
}

watch(chapter, () => {
  chapterName.value = chapter.value?.title || "";
});

onMounted(() => {
  if (chapter.value) {
    chapterName.value = chapter.value.title;
  }
});

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div class="">
    <button @click="$router.back()">
      back
    </button>
    <button class="block" @click="isEditing = !isEditing">
      {{ isEditing ? "cancel" : "edit" }}
    </button>
    <button class="block" @click="handleDeleteChapter">
      delete
    </button>
    <div v-if="chapter">
      <p v-if="!isEditing">
        chapter name: {{ chapter.title }}
      </p>
      <p v-else>
        chapter name: <input v-model="chapterName" type="text"><button type="button" @click="handleUpdateChapter">
          save
        </button>
      </p>
      <p>sub chapters:</p>
      <NuxtLink :to="`/super/subjects/${route.params.subjectId}/${route.params.chapterId}/create-subChapter`">
        create sub chapter
      </NuxtLink>
      <div class="grid grid-cols-5 gap-3">
        <NuxtLink v-for="subChapter of subChapters" :key="subChapter.id" :to="`/super/subjects/${route.params.subjectId}/${route.params.chapterId}/${subChapter.id}`" class="bg-white p-3">
          <p>{{ subChapter.title }}</p>
        </NuxtLink>
      </div>
    </div>
    <p v-else>
      loading chapter ...
    </p>
  </div>
</template>
