<script setup lang="ts">
useHead({
  title: "Mata Pelajaran | Males",
});

const { data: subjects } = useFetch("/api/subjects");
</script>

<template>
  <div class="flex flex-col py-[1rem] gap-4 mt-[4rem] min-h-[83vh] px-[1rem] sm:px-[6rem] ">
    <div class="">
      <h2 class="mb-2 text-2xl">
        Daftar Mata Pelajaran
      </h2>
      <p>Pilih mata pelajaran yang menarik dan bermanfaat untuk masa depanmu!</p>
    </div>
    <div class="grid grid-cols-1 gap-y-3 gap-x-5 lg:grid-cols-3 md:grid-cols-2">
      <NuxtLink
        v-for="subject of subjects"
        :key="subject.id"
        class="px-5 py-3 rounded-2xl border cursor-pointer shadow-m"
        :to="`/subjects/${subject.id}`"
      >
        <Icon v-if="subject.icon" :name="subject.icon" class="mb-1 text-4xl" />
        <h4 class="text-xl font-medium">
          {{ subject.name }}
        </h4>
        <p class="text-sm">
          {{ subject.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
