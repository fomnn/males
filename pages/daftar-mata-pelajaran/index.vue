<script setup lang="ts">
useHead({
  title: 'Mata Pelajaran | Males',
})

const semuaMataPelajaran = async () => {
  try {
    const { data, error } = await client.from('mata_pelajaran').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data
  } catch (error) {
    console.log(error);
  }
}
const semuaMapel = await semuaMataPelajaran()

</script>

<template>
  <div class="flex flex-col py-[1rem] gap-4 mt-[4rem] min-h-[83vh] px-[1rem] sm:px-[6rem] ">
    <div class="">
      <h2 class="mb-2 text-2xl">Daftar Mata Pelajaran</h2>
      <p>Pilih mata pelajaran yang menarik dan bermanfaat untuk masa depanmu!</p>
    </div>
    <div class="grid grid-cols-1 gap-y-3 gap-x-5 lg:grid-cols-3 md:grid-cols-2">
      <div 
        class="px-5 py-3 rounded-2xl border cursor-pointer shadow-m" 
        v-for="mapel of semuaMapel" 
        :key="mapel.id" 
        @click="navigateTo(`/daftar-mata-pelajaran/${replaceSpacesWithDash(mapel.nama.toLowerCase())}`)"
        >
        <Icon :name="mapel.icon!" class="mb-1 text-4xl" :style="{'color': mapel.tailwind_color!}" />
        <h4 class="text-xl font-medium">{{ mapel.nama }}</h4>
        <p class="text-sm">{{ mapel.deskripsi }}</p>
      </div>
    </div>
  </div>
</template>