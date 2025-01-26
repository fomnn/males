import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subjectId = getRouterParam(event, "subjectId");

  if (!subjectId)
    throw createError({ statusCode: 404 });

  const subject = await prisma.subjects.findFirst({
    where: {
      id: Number.parseInt(subjectId),
    },
  });

  return subject;
});
