<template>
  <div class="h-[580px]">
    <div
      data-hs-carousel="{
      &quot;loadingClasses&quot;: &quot;opacity-0&quot;,
      &quot;speed&quot;: 10000,
      &quot;isAutoPlay&quot;: true
    }"
      class="relative"
    >
      <div class="hs-carousel relative overflow-hidden w-full min-h-[560px] bg-white rounded-lg">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 *:*:px-[1rem] opacity-0"
        >
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-10"
            >
              <div class="w-full text-center h-fit sm:text-end">
                <p class="text-xl">
                  "Pendidikan adalah <span class="font-semibold text-primary">investasi terbaik</span>
                  untuk masa depan bangsa."
                </p>
                <p class="mt-2 text-sm italic font-semibold">
                  - Bacharuddin Jusuf Habibie
                </p>
              </div>
              <div class="overflow-hidden w-2/3 rounded-3xl shadow-lg">
                <img src="/images/bj_habibie.png" alt="" class="aspect-[7/5] object-cover object-center h-full">
              </div>
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-10"
            >
              <div class="w-full text-center h-fit sm:text-end">
                <p class="text-xl">
                  "Pendidikan adalah <span class="text-primary">proses yang berkelanjutan</span>. Ia
                  bukanlah <br>persiapan untuk hidup, melainkan <span class="text-primary">hidup itu sendiri</span>."
                </p>
                <p class="mt-2 text-sm italic font-semibold">
                  - John Dewey
                </p>
              </div>
              <div class="overflow-hidden w-2/3 rounded-3xl shadow-lg">
                <img src="/images/john_dewey.jpg" alt="" class="aspect-[7/5] object-cover object-center">
              </div>
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-10"
            >
              <div class="w-full text-center h-fit sm:text-end">
                <p class="text-xl">
                  "Tujuan pendidikan itu untuk mempertajam kecerdasan, memperkukuh kemauan serta
                  memperhalus perasaan."
                </p>
                <p class="mt-2 text-sm italic font-semibold">
                  - Tan Malaka
                </p>
              </div>
              <div class="overflow-hidden w-2/3 rounded-3xl shadow-lg">
                <img src="/images/tanmalaka.jpg" alt="" class="aspect-[7/5] object-cover object-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
