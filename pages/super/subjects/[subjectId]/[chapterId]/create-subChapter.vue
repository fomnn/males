<script lang="ts" setup>
const route = useRoute("super-subjects-subjectId-chapterId");
const router = useRouter();

const newSubChapterData = reactive({
  title: "",
});

async function handleCreateSubChapter() {
  await $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters`, {
    method: "POST",
    body: newSubChapterData,
    onResponse: () => {
      router.back();
    },
  });
}

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div>
    <button @click="$router.back()">
      back
    </button>
    <form @submit.prevent="handleCreateSubChapter">
      <div class="">
        <label>title</label>
        <input v-model="newSubChapterData.title" type="text">
      </div>
      <button type="submit">
        create
      </button>
    </form>
  </div>
</template>
