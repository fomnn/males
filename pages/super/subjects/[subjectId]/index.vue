<script lang="ts" setup>
const route = useRoute("super-subjects-subjectId");
const router = useRouter();
const { data: subject, status: statusSubject, refresh: refreshSubject } = await useFetch(`/api/subjects/${route.params.subjectId}`);
const { data: chapters, status: statusChapters } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters`);

const isEditing = ref(false);

const subjectUpdateData = reactive({
  name: "",
  description: "",
});

async function handleUpdateSubject() {
  await $fetch(`/api/subjects/${route.params.subjectId}`, {
    method: "PUT",
    body: subjectUpdateData,
    onResponse: () => {
      refreshSubject();
      isEditing.value = false;
    },
  });
}

async function handleDeleteSubChapter() {
  await $fetch(`/api/subjects/${route.params.subjectId}/`, {
    method: "DELETE",
    onResponse: () => {
      router.replace("/super/subjects");
    },
  });
}

watch(subject, () => {
  subjectUpdateData.name = subject.value?.name || "";
  subjectUpdateData.description = subject.value?.description || "";
});

onMounted(() => {
  if (subject.value) {
    subjectUpdateData.name = subject.value.name;
    subjectUpdateData.description = subject.value.description;
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
      Title: {{ subject?.name }}
    </p>
    <p v-else>
      Title: <input v-model="subjectUpdateData.name" type="text">
    </p>
    <p v-if="!isEditing">
      description: {{ subject?.description }}
    </p>
    <p v-else>
      description: <textarea v-model="subjectUpdateData.description" />
    </p>
    <button v-if="isEditing" type="button" @click="handleUpdateSubject">
      save
    </button>
    <p>chapters:</p>
    <NuxtLink :to="`/super/subjects/${subject?.id}/create-chapter`">
      create chapter
    </NuxtLink>
    <div class="grid grid-cols-5 gap-3">
      <template v-if="statusChapters === 'success' && statusSubject === 'success' && chapters && chapters.length > 0">
        <NuxtLink v-for="chapter of chapters" :key="chapter.id" :to="`/super/subjects/${subject?.id}/${chapter.id}`" class="bg-white px-3 py-3">
          <h2>{{ chapter.title }}</h2>
          <p>{{ chapter.class }}</p>
        </NuxtLink>
      </template>
      <p v-else-if="statusChapters === 'success' && statusSubject === 'success' && chapters && chapters.length === 0">
        no chapters
      </p>
      <p v-else>
        loading chapters
      </p>
    </div>
  </div>
</template>
