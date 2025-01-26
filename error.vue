<script setup lang="ts">
const props = defineProps({
  error: Object,
});

// const handleError = () => clearError({ redirect: "/" });

const errorStatusCode = ref("");

onMounted(() => {
  errorStatusCode.value = props.error!.statusCode;
});
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center items-center min-h-screen">
    <div class="bg-default h-[103vh] absolute w-screen -z-10" />
    <Header class="fixed top-0 z-50" />
    <ErrorPageNotFound v-if="errorStatusCode === '404'" />
    <Footer class="fixed bottom-0" />
  </div>
</template>

<style scoped>
.bg-default {
  background-color: #ffffff;
  opacity: 0.05;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 16px), repeating-linear-gradient(#6A65FF55, #6A65FF);
}
</style>
