<script lang="ts" setup>
definePageMeta({
  layout: "superadmin",
});

const { data: subjects, status } = useFetch("/api/subjects");

// const image = ref<File>();

// function onImageChange(event: Event) {
//   image.value = (event.target as any).files[0] as File;
// }

// async function handleUpload() {
//   const formData = new FormData();

//   formData.append("image", image.value!);

//   await $fetch("/api/r2", {
//     method: "POST",
//     body: formData,
//   });
// }
</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-3xl">
        Content
      </h1>
      <NuxtLink to="/super/subjects/create" class="px-4 py-2 rounded-md bg-white">
        Add Subject
      </NuxtLink>
    </div>
    <div class="grid grid-cols-5 gap-3 mt-6">
      <template v-if="status !== 'pending'">
        <NuxtLink v-for="subject in subjects" :key="subject.id" :to="`/super/subjects/${subject.id}`" class="bg-white p-8 rounded-lg">
          <h2 class="text-2xl">
            {{ subject.name }}
          </h2>
        </NuxtLink>
      </template>
      <p v-else>
        Loading subjects ...
      </p>
    </div>
  </div>
</template>
