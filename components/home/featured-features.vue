<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col items-center py-[6rem] gap-6">
    <div class="flex flex-col gap-2.5 items-center text-3xl sm:flex-row sm:items-start">
      <span>Mengapa Memilih </span>
      <div class="flex gap-2">
        <img src="/logo.svg" class="h-8" alt=""><span>?</span>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-y-3 gap-x-5 lg:grid-cols-3 md:grid-cols-2">
      <div class="px-5 py-3 rounded-2xl border transition-shadow duration-300 cursor-default shadow-m hover:shadow-md">
        <Icon name="tabler:pig-money" class="mb-1 text-4xl text-green-500" />
        <h4 class="text-lg font-medium">
          Akses Gratis ke Konten Belajar
        </h4>
        <p>Kami bangga menyediakan akses gratis ke semua konten belajar di platform kami. </p>
      </div>
      <div class="px-5 py-3 rounded-2xl border transition-shadow duration-300 cursor-default shadow-m hover:shadow-md">
        <Icon name="material-symbols:alarm-on-outline-rounded" class="mb-1 text-4xl text-yellow-500" />
        <h4 class="text-lg font-medium">
          Tidak Ada Batasan Waktu
        </h4>
        <p>Di Beabai, tidak ada batasan waktu dalam mengakses materi belajar.</p>
      </div>
      <div class="px-5 py-3 rounded-2xl border transition-shadow duration-300 cursor-default shadow-m hover:shadow-md">
        <Icon name="material-symbols:ballot-outline-rounded" class="mb-1 text-4xl text-blue-500" />
        <h4 class="text-lg font-medium">
          Beragam Mata Pelajaran
        </h4>
        <p>Kami menawarkan beragam mata pelajaran yang meliputi matematika, bahasa Inggris, sains, sejarah, dan banyak lagi.</p>
      </div>
      <div class="px-5 py-3 rounded-2xl border transition-shadow duration-300 cursor-default shadow-m hover:shadow-md">
        <Icon name="ic:twotone-live-help" class="mb-1 text-4xl text-violet-500" />
        <h4 class="text-lg font-medium">
          Latihan Soal Interaktif
        </h4>
        <p>Kami menyediakan latihan soal interaktif yang membantu Anda menguji pemahaman dan keterampilan Anda.</p>
      </div>
    </div>
  </div>
</template>

<style></style>
