<template>
  <div class="mt-[4rem] py-6 space-y-2 px-[1rem] sm:px-[6rem] min-h-[83vh]">
    <NuxtLink to="/daftar-mata-pelajaran" class="flex items-center gap-3 border w-fit px-5 py-1.5 rounded-md *:text-slate-500">
      <Icon name="material-symbols:arrow-back-rounded" class="text-xl cursor-pointer" />
      <h1 class="text-base">Daftar Mata Pelajaran</h1>
    </NuxtLink>
    <div class="flex flex-col gap-3 md:flex-row md:items-center">
      <Icon :name="(curMapel?.icon! as string)" class="md:size-[8rem] size-[5rem]" :style="{ color: curMapel.tailwind_color }"
        v-if="curMapel" />
      <div class="space-y-2">
        <h1 class="text-4xl font-semibold">{{ curMapel?.nama }}</h1>
        <p class="w-10/12">{{ curMapel?.deskripsi }}</p>
      </div>
    </div>
    <div class="flex gap-3">
      <button 
        v-for="(i) in kelas" 
        class="px-8 py-1.5 rounded-md border bg-slate-100"
        :class="{ 'bg-slate-200 border-slate-400': i == curKelas }"
        @click="curKelas = i"
        >
        kelas {{ i }}
      </button>
    </div>
    <div class="grid grid-cols-1 gap-y-3 gap-x-5 pt-3 lg:grid-cols-3 md:grid-cols-2" v-if="curBab?.length !== 0">
      <button 
        @click="navigateTo(`/belajar/${curMapel?.nama.toLowerCase()}/${replaceSpacesWithDash(mupel.judul.toLowerCase())}`)" 
        class="flex flex-col px-5 py-3 rounded-lg border cursor-pointer shadow-m" 
        v-for="mupel of curBab" 
        :key="mupel.id"
        >
        <h4 class="text-xl font-medium">{{ mupel.judul }}</h4>
        <div class="flex flex-col items-start">
          <p 
            v-for="subBab of mupel.sub_bab"
            class="text-sm text-gray-500"
          >- {{ subBab.judul }}</p>
        </div>
      </button>
    </div>
    <p v-else class="py-[3rem] text-2xl">
      Yahh belum ada muatan pelajaran untuk kelas {{ curKelas }} 😢
    </p>
  </div>
</template>

<script lang="ts" setup>
import { replaceSpacesWithDash } from '~/utils/replaceSpacesWithDash';

const route = useRoute()

const curBab = ref<Bab[] | undefined>()
const curMapel = ref<Mapel | undefined>()

const getDetailMapel = async () => {
  try {
    const { data, error } = await client.from('mata_pelajaran').select().eq('path_text', route.params.mapel).limit(1).single()
    if (error) throw error
    curMapel.value = data
  } catch (error) {
    console.log(error)
  }
}
const getMuatanPelajaran = async (mataPelajaranId: Number) => {
  try {
    const { data, error } = await client
      .from('bab')
      .select(`
        id,
        judul,
        kelas,
        mata_pelajaran_id,
        sub_bab (
          judul
        )
      `)
      .eq('mata_pelajaran_id', mataPelajaranId).eq('kelas', curKelas.value)
    if (error) throw error
    curBab.value = data
  } catch (error) {
    console.log(error)
  }
}

const kelas = [
  10, 11, 12
]

const curKelas = ref<number>(10)

onMounted(async () => {
  await getDetailMapel()
  await getMuatanPelajaran(curMapel.value?.id!)

  useHead({
    title: curMapel?.value?.nama + ' | Males'
  })
})

watch(curKelas, () => {
  getMuatanPelajaran(curMapel.value?.id!)
})

interface Mapel {
  deskripsi: string;
  icon: string | null;
  id: number;
  nama: string;
  path_text: string | null;
  tailwind_color: string;
}
interface Bab {
  id: number;
  judul: string;
  kelas: "10" | "11" | "12";
  mata_pelajaran_id: number;
  sub_bab: {
    judul: string;
  }[];
}
</script>