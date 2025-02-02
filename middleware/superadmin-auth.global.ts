export default defineNuxtRouteMiddleware(async (to, _from) => {
  if (import.meta.server) {
    return;
  }

  const { loggedIn } = useUserSession();

  if (to.path.startsWith("/super") && !to.path.startsWith("/super/auth")) {
    if (!loggedIn.value) {
      return navigateTo("/super/auth/login");
    }
  }

  if (to.path.startsWith("/super/auth") && loggedIn.value) {
    return navigateTo("/super");
  }
});
