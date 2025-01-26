import { defineStore } from "pinia";

export const useMyShowNavStore = defineStore("showNav", () => {
  const showNav = ref(false);

  function toggleNav() {
    showNav.value = !showNav.value;
    console.log(showNav.value);
  }

  function closeNav() {
    showNav.value = false;
  }

  return {
    showNav,
    toggleNav,
    closeNav,
  };
});
