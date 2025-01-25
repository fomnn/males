<template>
  <div class="flex z-10 flex-col px-8 py-3 space-y-4 divide-y-2 bg-slate-100" :class="{ 'h-full': (showNavBelajar || !isMobile) }">
    <div class="flex flex-col gap-5 mt-3 md:flex-col md:mt-6">
      <NuxtLink to="/">
        <img src="/logo.svg" />
      </NuxtLink>
      <div class="flex gap-5 items-center">
        <button class="" @click="showNavBelajar = !showNavBelajar" v-if="isMobile">
          <Icon name="ci:hamburger-lg" class="text-lg" />
        </button>
        <div class="flex gap-1 items-center">
          <h1 class="text-base font-light">
            <span 
              class="cursor-pointer"
              @click="[
                navigateTo(`/daftar-mata-pelajaran/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}`),
                showNavBelajar = false,
                GetCurBaborSubbab()
              ]"
              >{{ curMapel?.nama }}
            </span>
            / 
            <span 
              :class="!curBaborSubbab![1] ? 'font-semibold' : 'cursor-pointer'"
              @click="[
                navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(curBaborSubbab![0].toLowerCase())}`),
                showNavBelajar = false,
                GetCurBaborSubbab()
              ]"
            > {{ curBaborSubbab![0] }}
            </span>
            <span v-if="curBaborSubbab![1]">
            / <br>
              <span class="font-semibold">
                {{ curBaborSubbab![1] }}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
    <div class="space-y-3 divide-y-2" v-show="(showNavBelajar || !isMobile)">
      <div class="">
        <h3 class="font-light">Kelas 10</h3>
        <div class="flex flex-col gap-2" v-if="babPerKelas['10']">
          <div class="" v-for="bab in babPerKelas['10']">
            <button 
              @click="[
                navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}`),
                showNavBelajar = false,
                GetCurBaborSubbab()
              ]"
              class="text-lg font-medium hover:text-primary" 
              :class="{ 'text-primary': route.params.bab[0] == replaceSpacesWithDash(bab!.judul.toLowerCase()) && route.params.bab.length == 1 }"
              >
              {{ bab.judul }}
            </button>
            <div class="flex flex-col gap-1 mt-0.5 ml-2">
              <button
                class="hover:text-primary text-start" 
                :class="{ 'text-primary': route.params.bab[1] == replaceSpacesWithDash(subbab.judul.toLowerCase()) }" 
                @click="[
                  navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}/${replaceSpacesWithDash(subbab.judul.toLowerCase())}`),
                  showNavBelajar = false,
                  GetCurBaborSubbab()
                ]" 
                v-for="subbab in bab.sub_bab" 
                :key="subbab.judul"
                >
                {{ subbab.judul }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h3 class="font-light">Kelas 11</h3>
        <div class="flex flex-col gap-2" v-if="babPerKelas['11']">
          <div class="" v-for="bab in babPerKelas['11']">
            <button 
              @click="[
                navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}`),
                showNavBelajar = false,
                GetCurBaborSubbab()
              ]"
              class="text-lg font-medium hover:text-primary" :class="{ 'text-primary': route.params.bab[0] == replaceSpacesWithDash(bab!.judul.toLowerCase()) && route.params.bab.length == 1 }">{{ bab.judul }}</button>
            <div class="flex flex-col gap-1 mt-0.5 ml-2">
              <button
                class="hover:text-primary text-start" 
                :class="{ 'text-primary': route.params.bab[1] == replaceSpacesWithDash(subbab.judul.toLowerCase()) }" 
                @click="[
                  navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}/${replaceSpacesWithDash(subbab.judul.toLowerCase())}`),
                  showNavBelajar = false,
                  GetCurBaborSubbab()
                ]" 
                v-for="subbab in bab.sub_bab" 
                :key="subbab.judul"
                >
                {{ subbab.judul }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h3 class="font-light">Kelas 12</h3>
        <div class="flex flex-col gap-2" v-if="babPerKelas['12']">
          <div class="" v-for="bab in babPerKelas['12']">
            <button 
              @click="[
                navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}`),
                showNavBelajar = false,
                GetCurBaborSubbab()
              ]"
              class="text-lg font-medium hover:text-primary" 
              :class="{ 'text-primary': route.params.bab[0] == replaceSpacesWithDash(bab!.judul.toLowerCase()) && route.params.bab.length == 1 }"
              >
              {{ bab.judul }}
            </button>
            <div class="flex flex-col gap-1 mt-0.5 ml-2">
              <button
                class="hover:text-primary text-start" 
                :class="{ 'text-primary': route.params.bab[1] == replaceSpacesWithDash(subbab.judul.toLowerCase()) }" 
                @click="[
                  navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}/${replaceSpacesWithDash(subbab.judul.toLowerCase())}`),
                  showNavBelajar = false,
                  GetCurBaborSubbab()
                ]" 
                v-for="subbab in bab.sub_bab" 
                :key="subbab.judul"
                >
                {{ subbab.judul }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { capitalizeFirstLetter } from '~/utils/capitalizeFirstLetter';
import { replaceSpacesWithDash } from '~/utils/replaceSpacesWithDash';

const route = useRoute() // alamat url
const { width } = useWindowSize()
const semuaBab = ref<Bab[] | undefined>() // daftar semua bab
const curMapel = ref<Mapel | undefined>() // mata pelajaran saat ini
const showNavBelajar = ref(false) // ref navigasi belajar
const isMobile = computed(() => width.value < 768) // mengecek apakah perangkat yang digunakan mobile atau bukan
const curBaborSubbab = ref<string[] | undefined>([]) // bab dan subbab saat ini

watch(route.params, async () => {
  await GetCurBaborSubbab()
})

const GetCurBaborSubbab = async () => {
  try {
    const { data: curBab, error } = await client.from('bab').select('judul').eq('path_text', route.params.bab[0]).limit(1).single()
    if (error) throw error
    if (route.params.bab.length > 1) {
      const { data: curSubbab, error } = await client.from('sub_bab').select('judul').eq('path_text', route.params.bab[1]).limit(1).single()
      if (error) throw error
      curBaborSubbab.value = [curBab.judul, curSubbab.judul]
      return
    }
    curBaborSubbab.value = [curBab.judul]
  } catch (error) {
    console.log(error)
  }
}

// membagi bab perkelas
const babPerKelas = ref<{ [kelas: string]: Bab[] }>({});

// fungsi untuk membagi bab perkelas
watch(semuaBab, () => {
  semuaBab.value?.forEach((item) => {
    if (!babPerKelas.value[item.kelas]) {
      babPerKelas.value[item.kelas] = [];
    }
    babPerKelas.value[item.kelas].push(item);
  });
})

// mengambil detail mata pelajaran saat ini
const getDetailMapel = async () => {
  try {
    const { data, error } = await client.from('mata_pelajaran').select().eq('nama', capitalizeFirstLetter(route.params.mapel as string)).limit(1).single()
    if (error) throw error
    curMapel.value = data
  } catch (error) {
    console.log(error)
  }
}

// mengambil bab-bab yang ada pada pelajaran saat ini
const getBab = async (mataPelajaranId: Number) => {
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
      `).eq('mata_pelajaran_id', mataPelajaranId)
    if (error) throw error
    semuaBab.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await getDetailMapel()
  await getBab(curMapel.value?.id!)
  await GetCurBaborSubbab()
  console.log(curBaborSubbab.value)
})

interface Mapel {
  deskripsi: string;
  icon: string | null;
  id: number;
  nama: string;
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