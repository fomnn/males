<template>
  <div class="flex relative justify-center items-center h-screen">
    <div class="bg-default h-[103vh] absolute w-screen -z-10" />
    <div class="flex flex-col lg:w-3/5 w-5/6 items-center gap-[2rem]">
      <div class="flex flex-col gap-3 w-fit">
        <img src="/logo.svg" alt="">
        <h2 class="text-2xl text-center sm:text-3xl">
          <span class="font-semibold text-primary">Ma</span>teri Pe<span
            class="font-semibold text-primary"
          >le</span>ngkap <span class="font-semibold text-primary">S</span>ekolah
        </h2>
      </div>
      <p class="text-lg text-center">
        Kami menyediakan lingkungan belajar lengkap, mendalam, dan menyenangkan untuk meningkatkan pemahaman dan prestasi Anda.
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-default {
  background-color: #ffffff;
  opacity: 0.05;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 16px), repeating-linear-gradient(#6A65FF55, #6A65FF);
}
</style>
