<script lang="ts" setup>
const classes = {
  k10: "k10",
  k11: "k11",
  k12: "k12",
};

const route = useRoute("super-subjects-subjectId-create-chapter");
const router = useRouter();

const newChapterData = reactive({
  title: "",
  classq: classes.k10,
});

async function handleCreateChapter() {
  await $fetch(`/api/subjects/${route.params.subjectId}/chapters`, {
    method: "POST",
    body: newChapterData,
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
    <form @submit.prevent="handleCreateChapter">
      <div class="">
        <label>name</label>
        <input v-model="newChapterData.title" type="text">
      </div>
      <div class="">
        <label>class</label>
        <select v-model="newChapterData.classq">
          <option v-for="[c] in Object.entries(classes)" :key="c" :value="c">
            {{ c.substring(1) }}
          </option>
        </select>
      </div>
      <button type="submit">
        create
      </button>
    </form>
  </div>
</template>
