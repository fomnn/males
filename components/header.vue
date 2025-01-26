<script setup lang="ts">
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);

const useShowNav = useMyShowNavStore();

const { showNav } = storeToRefs(useShowNav);

const target = ref(null);
const targetIgnore = ref(null);

const { toggleNav, closeNav } = useShowNav;

onClickOutside(target, () => {
  closeNav();
}, { ignore: [targetIgnore] });

const { y } = useWindowScroll({ behavior: "smooth" });

watch(y, () => {
  closeNav();
});
</script>

<template>
  <div
    class="flex justify-between items-center gap-24 px-[2rem] md:px-[6rem] border h-[4rem] w-full backdrop-blur-sm bg-opacity-15 bg-white"
  >
    <NuxtLink to="/" class="cursor-pointer">
      <img src="/logo.svg" alt="">
    </NuxtLink>

    <div v-show="isMobile" class="relative z-[51]">
      <button ref="targetIgnore" class="flex flex-col gap-1" @click="toggleNav()">
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md" />
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md" />
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md" />
      </button>
      <div
        ref="target"
        class="flex flex-col absolute bg-white space-y-1 w-[12rem] shadow-lg rounded-md overflow-hidden py-2 px-2 transition-all duration-300 ease-in-out top-14 z-[51]" :class="showNav ? 'right-1' : 'right-[-20rem]'"
      >
        <button
          class="py-2 w-full text-center rounded-md hover:bg-slate-100"
          @click="[
            navigateTo('/'),
            closeNav(),
          ]"
        >
          Home
        </button>
        <button
          class="py-2 w-full text-center rounded-md hover:bg-slate-100"
          @click="[
            navigateTo('/subjects'),
            closeNav(),
          ]"
        >
          Mata Pelajaran
        </button>
        <button
          class="py-2 w-full text-center rounded-md hover:bg-slate-100"
          @click="[
            navigateTo('/about-us'),
            closeNav(),
          ]"
        >
          Tentang kami
        </button>
      </div>
    </div>

    <div v-show="!isMobile" class="flex gap-8">
      <button class="" @click="navigateTo('/')">
        Home
      </button>
      <button class="" @click="navigateTo('/subjects')">
        Mata Pelajaran
      </button>
      <button class="" @click="navigateTo('/about-us')">
        Tentang Kami
      </button>
    </div>
  </div>
</template>
