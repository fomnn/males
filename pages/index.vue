<script setup>
useHead({
  title: "Males",
});
</script>

<template>
  <div class="px-[1rem] md:px-[3rem] lg:px-[6rem] ">
    <div class="">
      <img src="/bg/3d_1.png" alt="" class="slide-top z-20 drop-shadow-lg size-[12rem] lg:size-[20rem] absolute top-[17%] lg:top-[27%] right-[-12%]" @contextmenu.prevent>
      <img src="/bg/3d_2.png" alt="" class="slide-top z-20 drop-shadow-lg size-[10rem] lg:size-[22rem] absolute top-[0.1%] lg:top-[0.5%] left-[-14%]" @contextmenu.prevent>
      <img src="/bg/3d_3.png" alt="" class="slide-top z-20 drop-shadow-lg size-[8rem] absolute top-[19%] lg:top-[31%] left-[4%]" @contextmenu.prevent>
      <img src="/bg/3d_4.png" alt="" class="slide-top z-20 drop-shadow-lg size-[9rem] lg:size-[12rem] absolute top-[0%] right-[6%]" @contextmenu.prevent>
      <img src="/bg/3d_5.png" alt="" class="slide-top z-20 drop-shadow-lg size-[6rem] lg:size-[12rem] absolute top-[50%] lg:top-[57%] left-[6%]" @contextmenu.prevent>
      <img src="/bg/3d_6.png" alt="" class="slide-top z-20 drop-shadow-lg size-[9rem] lg:size-[12rem] absolute top-[67%] lg:top-[72%] right-[5%]" @contextmenu.prevent>
      <img src="/bg/3d_7.png" alt="" class="slide-top z-20 drop-shadow-lg size-[9rem] lg:size-[12rem] absolute top-[95.5%] lg:top-[93%] left-[12%]" @contextmenu.prevent>
    </div>

    <HomeIntroduction />
    <HomeFeaturedFeatures />
    <HomeInspirationalQuotes />
    <HomeSubjectsGrid />
  </div>
</template>

<style scoped>
.slide-top {
  animation: slide-top 4000ms infinite alternate both ;
}

@keyframes slide-top {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-23px);
  }
}
</style>
