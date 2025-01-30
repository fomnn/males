import { signJWT } from "@cross/jwt";

export default defineEventHandler(async (event) => {
  const superadminPassword = useRuntimeConfig(event).superadminPassword;

  const { password } = await readBody(event);

  if (password !== superadminPassword)
    throw createError({ statusCode: 401 });

  const payload = {
    type: "super",
  };

  const token = await signJWT(payload, "e666422a-6190-485b-8060-bbee6063f7e8", { expiresIn: "4h" });

  setCookie(event, "token_superadmin", token, {
    maxAge: 60 * 60 * 4,
    httpOnly: true,
    sameSite: "strict",
  });

  return {
    message: "success",
  };
});
