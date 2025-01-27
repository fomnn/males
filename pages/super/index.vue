<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const { data: subjects, status } = useFetch("/api/subjects");
</script>

<template>
  <div class="px-16 py-16 min-h-screen bg-slate-200">
    <div class="flex justify-between">
      <h1 class="text-3xl">
        Content
      </h1>
      <button class="px-4 py-2 rounded-md bg-white">
        Add Subject
      </button>
    </div>
    <div class="grid grid-cols-5 gap-3 mt-6">
      <template v-if="status !== 'pending'">
        <div v-for="subject in subjects" :key="subject.id" class="bg-white p-8 rounded-lg">
          <h2 class="text-2xl">
            {{ subject.name }}
          </h2>
        </div>
      </template>
      <p v-else>
        Loading subjects ...
      </p>
    </div>
    
  </div>
</template>
