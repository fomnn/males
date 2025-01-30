export default defineEventHandler(async (event) => {
  const session = await getUserSession(event);

  if (!session && event.method !== "GET" && event.method !== "OPTIONS" && event.method !== "HEAD") {
    throw createError({ statusCode: 401 });
  }
});
