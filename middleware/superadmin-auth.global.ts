export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { loggedIn } = useUserSession();

  if (import.meta.server) {
    return;
  }

  if (to.path.startsWith("/super") && !to.path.startsWith("/super/auth")) {
    if (!loggedIn.value) {
      return navigateTo("/super/auth/login", { redirectCode: 301 });
    }
  }

  if (to.path === "/super/auth/login" && loggedIn.value) {
    return navigateTo("/super", { redirectCode: 301 });
  }
});
