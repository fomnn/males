import { defineStore } from "pinia";

export const useMySuperadminAuthStore = defineStore("superadmin-auth", () => {
  const superadmin = ref(false);

  function setSuperadmin() {
    superadmin.value = true;
  }

  function removeSuperadmin() {
    superadmin.value = false;
  }

  return {
    superadmin,
    setSuperadmin,
    removeSuperadmin,
  };
});
