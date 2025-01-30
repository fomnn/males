export default defineEventHandler(async (event) => {
  deleteCookie(event, "token_superadmin");
});
