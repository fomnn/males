<script lang="ts" setup>
import type { classes as classesEnum } from "@prisma/client";

const classes = [
  "k10",
  "k11",
  "k12",
] as const;

const curClass = ref<classesEnum>("k10");

const route = useRoute("subjects-subjectId");

const { data: subject } = await useFetch(`/api/subjects/${route.params.subjectId}`);

const { data: chapters, refresh: refreshChapters } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters`, {
  params: {
    class: curClass,
  },
});

watch(() => curClass.value, async () => {
  await refreshChapters();
});

useHead({
  title: `${subject?.value?.name} | Males`,
});
</script>

<template>
  <div class="mt-[4rem] py-6 space-y-2 px-[1rem] sm:px-[6rem] min-h-[83vh]">
    <button type="button" class="flex items-center gap-3 border w-fit px-5 py-1.5 rounded-md *:text-slate-500" @click="$router.back()">
      <Icon name="material-symbols:arrow-back-rounded" class="text-xl cursor-pointer" />
      <h1 class="text-base">
        Daftar Mata Pelajaran
      </h1>
    </button>
    <div class="flex flex-col gap-3 md:flex-row md:items-center">
      <Icon
        v-if="subject?.icon" :name="subject?.icon" class="md:size-[8rem] size-[5rem]"

      />
      <div class="space-y-2">
        <h1 class="text-4xl font-semibold">
          {{ subject?.name }}
        </h1>
        <p class="w-10/12">
          {{ subject?.name }}
        </p>
      </div>
    </div>
    <div class="flex gap-3">
      <button
        v-for="(i) in classes"
        :key="i"
        class="px-8 py-1.5 rounded-md border bg-slate-100"
        :class="{ 'bg-slate-200 border-slate-400': i === curClass }"
        @click="curClass = i"
      >
        kelas {{ i }}
      </button>
    </div>
    <div class="grid grid-cols-1 gap-y-3 gap-x-5 pt-3 lg:grid-cols-3 md:grid-cols-2">
      <template v-for="cls in classes" :key="cls">
        <template v-if="cls === curClass && chapters && chapters?.length > 0">
          <button
            v-for="chapter of chapters"
            :key="chapter.id"
            class="flex flex-col px-5 py-3 rounded-lg border cursor-pointer shadow-m"
          >
            <h4 class="text-xl font-medium">
              {{ chapter.title }}
            </h4>
            <div class="flex flex-col items-start">
              <p>halo</p>
              <!-- <p
                  v-for="subBab of chapter."
                  class="text-sm text-gray-500"
                >
                  - {{ subBab.judul }}
                </p> -->
            </div>
          </button>
        </template>
      </template>
      <p v-if="chapters && chapters?.length === 0" class="text-2xl">
        Yahh belum ada muatan pelajaran untuk kelas {{ curClass }} 😢
      </p>
    </div>
  </div>
</template>
