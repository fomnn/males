import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subjectId = getRouterParam(event, "subjectId")!;
  

  const subject = await prisma.subjects.delete({
    where: {
      id: Number.parseInt(subjectId),
    },
  });

  return subject;
});
