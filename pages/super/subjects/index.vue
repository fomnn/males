<script lang="ts" setup>
const { loggedIn, fetch } = useUserSession();
const router = useRouter();

const { data: subjects, status } = await useFetch("/api/subjects");

async function handleLogout() {
  await $fetch("/api/superadmin/logout", {
    method: "POST",
  });
  await fetch();
  router.replace("/super/auth/login");
}

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-3xl">
        Content {{ loggedIn }}
      </h1>
      <div class="flex items-center gap-3">
        <NuxtLink to="/super/subjects/create" class="px-4 py-2 rounded-md bg-white">
          Add Subject
        </NuxtLink>
        <button class="px-4 py-2 rounded-md bg-white" @click="handleLogout">
          Logout
        </button>
      </div>
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
