<script lang="ts" setup>
definePageMeta({
  layout: "superadmin",
});

const subjectData = reactive({
  name: "",
  description: "",
});

async function handleSubmit() {
  const subject = await $fetch("/api/subjects", {
    method: "POST",
    body: subjectData,
  });
}
</script>

<template>
  <div>
    <button type="button" @click="$router.back()">
      Back
    </button>

    <form @submit.prevent="handleSubmit">
      <div class="">
        <label>Title</label>
        <input v-model="subjectData.name" type="text">
      </div>
      <div class="">
        <label>Description</label>
        <textarea v-model="subjectData.description" type="text" />
      </div>
      <button type="submit">
        create
      </button>
    </form>
  </div>
</template>
