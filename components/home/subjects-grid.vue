<script setup lang="ts">
// const semuaMataPelajaran = async () => {
//   try {
//     const { data, error } = await client.from('mata_pelajaran').select('*').order('id', { ascending: true });
//     if (error) throw error;
//     return data
//   } catch (error) {
//     console.log(error);
//   }
// }
// const semuaMapel = await semuaMataPelajaran()

const { data: subjects } = await useFetch("/api/subjects");
</script>

<template>
  <div class="py-[10rem] flex flex-col md:flex-row sm:flex-col items-center justify-start relative gap-6">
    <div class=" w-[90%] md:w-[45%] lg:w-[35%] transition-all text-center sm:text-start">
      <h2 class="text-3xl">
        Daftar Mata Pelajaran
      </h2>
      <p>Apa yang kamu sukai? Apakah kamu tertarik pada ilmu alam, matematika, bahasa, seni, atau olahraga?</p>
    </div>
    <div class="grid z-40 grid-cols-2 gap-2 p-5 whitespace-nowrap md:grid-cols-3 lg:grid-cols-5">
      <NuxtLink
        v-for="subject of subjects"
        :key="subject.id"
        class="flex flex-col items-center px-5 py-3 w-full bg-white rounded-2xl border transition-shadow duration-300 cursor-pointer shadow-m hover:shadow-md"
        :to="`/subjects/${subject.id}`"
      >
        <Icon v-if="subject.icon" :name="subject.icon" class="mb-1 text-4xl" :style="{ color: subject.color! }" />
        <h4 class="text-xl font-medium">
          {{ subject.name }}
        </h4>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

#slideLeft {
  bottom: 15%;
  position: absolute;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}

@keyframes run {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-4px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
