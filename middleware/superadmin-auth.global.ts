export default defineNuxtRouteMiddleware(async (to, _from) => {
  if (import.meta.server)
    return;
  const { superadmin, setSuperadmin } = useMySuperadminAuthStore();
  if (to.path.startsWith("/super") && !to.path.startsWith("/super/auth")) {
    if (!superadmin) {
      try {
        const { message } = await $fetch("/api/superadmin/verify", {
          method: "POST",
        });

        if (message !== "success") {
          return "/super/auth/login";
        }

        setSuperadmin();
      }
      catch {
        return "/super/auth/login";
      }
    }
  }
});
