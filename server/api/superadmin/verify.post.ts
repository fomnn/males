import { verifyJWT } from "@cross/jwt";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token_superadmin");

  if (!token) {
    throw createError({ statusCode: 401 });
  }
  const payload = await verifyJWT(token, "e666422a-6190-485b-8060-bbee6063f7e8");

  if (payload.type !== "super") {
    throw createError({ statusCode: 401 });
  }

  return {
    message: "success",
  };
});
