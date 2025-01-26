<script lang="ts" setup>
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
const roketHover = ref(false);
watch(roketHover, () => {
  setTimeout(() => {
    roketHover.value = false;
  }, 5000);
});
</script>

<template>
  <div class="mt-[16rem] md:mt-[8rem] min-h-[80%]">
    <img src="/images/arrow-lana.png" alt="" class="absolute top-[11.2rem] md:top-[9rem] w-[10.2rem] md:w-[16rem] left-[56%] md:left-[31%] rotate-[-12deg] hover:scale-110 transition-['scale']">
    <img src="/images/arrow-oman.png" alt="" class="absolute top-[6.5rem] w-[10.2rem] md:w-[16rem] left-[5%] rotate-[14deg] md:rotate-[8deg] hover:scale-110 transition-['scale']">
    <p class="absolute text-5xl top-[5rem] md:top-[7rem] left-[55%] md:left-[22%] transition-all" :class="{ rokettt: roketHover }" @mouseover="roketHover = true">
      🚀
    </p>
    <p class="absolute text-5xl top-[30rem] md:top-[26rem] left-[49%] md:left-[51%]">
      💕
    </p>
    <p class="absolute text-4xl md:text-5xl top-[11rem] md:top-[10rem] left-[5%] md:left-[46%] transition-all hover:scale-125 hover:rotate-[7deg] hover:translate-y-[-1rem]">
      😎
    </p>
    <p class="absolute text-4xl md:text-5xl top-[15.4rem] md:top-[16rem] rotate-[-18deg] left-[36%] md:left-[3%] transition-all hover:scale-125 hover:rotate-[12deg]">
      😶‍🌫️
    </p>
    <p class="absolute text-5xl top-[7.3rem] md:top-[16rem] rotate-12 left-[80%] md:left-[38%] transition-all hover:scale-125 hover:rotate-[0deg]">
      🐱
    </p>
    <p v-if="isMobile" class="luncurkan-roket absolute top-[4.7rem] left-[40%] text-nowrap text-[6px] text-center">
      Luncurkan roket <br>dengan menekannya🐱
    </p>
    <div class=" mt-0 md:mt-[2rem] flex flex-col md:flex-row gap-8 md:mr-[2rem]">
      <img src="/babyLana.jpg" alt="" class="aspect-video object-contain md:w-[55%] mt-[1rem] md:mt-[13rem] mb-[4rem] rounded-lg shadow-xl ">
      <div class="">
        <div class="text-7xl mb-14 mt-[-3rem] text-center md:text-start">
          <h2>Haloooo</h2>
          <h2>Salam kenalll</h2>
          <p class="mt-4">
            😁🙌
          </p>
        </div>
        <div class="px-8 mb-8 space-y-3 text-xl text-center md:px-5 md:mb-0" :class="{ deskripsi: isMobile }">
          <p class="">
            Kami adalah tim yang berdedikasi untuk memberikan informasi, bantuan, dan layanan terbaik kepada pengunjung kami.
          </p>
          <p>Kami percaya bahwa berkontribusi ke Bangsa dan Negara dapat dimulai dari hal-hal kecil, seperti website yang kami buat ini.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,.luncurkan-roket, .deskripsi {
  font-family: 'Gloria Hallelujah', cursive;
}

.rokettt {
  animation-name: roket;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  /* animation-iteration-count: 3s; */
}

@keyframes roket {
  0%, 100%   {
    transform: translateY(0) translateX(0);
    scale: 1;
  }
  18%  {
    transform: translateY(-15rem) translateX(15rem);
    scale: 10;
  }
  19%  {
    transform: translateY(-15rem) translateX(-30rem);
  }
  20%  {
    transform: translateY(30rem) translateX(-30rem);
    scale: 10;
  }
}
</style>
