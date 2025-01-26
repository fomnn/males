import prisma from "~/lib/prisma";

export default defineEventHandler(async (_event) => {
  const subjects = await prisma.subjects.findMany();

  return subjects;
});
