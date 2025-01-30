export default defineEventHandler(async (event) => {
  const superadminPassword = useRuntimeConfig(event).superadminPassword;

  const { password } = await readBody(event);

  if (password !== superadminPassword)
    throw createError({ statusCode: 401 });

  const payload = {
    user: {
      name: "superadmin001",
      type: "superadmin",
    },
  };

  const session = await setUserSession(event, payload, {
    maxAge: 60 * 60 * 3,
  });

  return {
    message: "success",
    session,
  };
});
