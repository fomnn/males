<script lang="ts" setup>
const router = useRouter();

const { session, loggedIn } = useUserSession();
const password = ref("hehe");

async function handleLogin() {
  try {
    const { session: newUserSession } = await $fetch("/api/superadmin/login", {
      method: "POST",
      body: {
        password: password.value,
      },
    });

    if (newUserSession) {
      session.value = newUserSession;
    };

    return router.replace("/super/subjects");
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
    <p>{{ loggedIn }}</p>
    <form @submit.prevent="handleLogin">
      <input v-model="password" type="text">
      <button type="submit">
        login
      </button>
    </form>
  </div>
</template>
