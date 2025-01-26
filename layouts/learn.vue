<template>
  <div class="flex overflow-hidden flex-col">
    <div class="flex flex-col min-h-screen md:flex-row">
      <div class="w-screen md:w-fit">
        <BelajarSidebar class="md:w-[18rem] sticky top-0 w-screen" />
      </div>
      <!-- <div class="w-full">p</div> -->
      <div class="w-full px-[2rem] py-[1rem] min-h-[92vh]">
        <slot />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
