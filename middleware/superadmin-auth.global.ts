export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { loggedIn } = useUserSession();

  if (import.meta.server) {
    return;
  }

  if (to.path.startsWith("/super") && !to.path.startsWith("/super/auth")) {
    if (!loggedIn.value) {
      return "/super/auth/login";
    }
  }

  if (to.path === "/super/auth/login" && loggedIn.value) {
    return "/super";
  }
});
