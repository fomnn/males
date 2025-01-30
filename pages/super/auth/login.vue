<script lang="ts" setup>
const password = ref("");
const { setSuperadmin } = useMySuperadminAuthStore();

async function handleLogin() {
  try {
    await $fetch("/api/superadmin/login", {
      method: "POST",
      body: {
        password: password.value,
      },
    });
    setSuperadmin();

    navigateTo("/super");
  }
  catch (e) {
    console.error(e);
  }
}

definePageMeta({
  layout: "superadmin",
});
</script>

<!-- TODO: implement login -->

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input v-model="password" type="text">
      <button type="submit">
        login
      </button>
    </form>
  </div>
</template>
