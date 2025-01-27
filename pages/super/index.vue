<script setup lang="ts">
const router = useRouter();
onMounted(() => {
  router.replace("/super/subjects");
});

definePageMeta({
  layout: false,
});
</script>

<template>
  <p>Super page</p>
</template>
