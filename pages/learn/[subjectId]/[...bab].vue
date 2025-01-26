<script lang="ts" setup>
definePageMeta({
  layout: "learn",
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <!-- <ContentDoc>
      <template #not-found>
        <h1>Materi Belum dibuatt, tunggu yaa🥺</h1>
      </template>
    </ContentDoc> -->
    <!-- <h1>Materi Belum dibuatt, tunggu yaa🥺</h1> -->
  </div>
</template>

<style>
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.6rem;
}

li {
  list-style-type: disc;
  list-style-position: inside;
}
li>p{
  list-style-position: outside;
}
</style>
