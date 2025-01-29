import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const chapterId = getRouterParam(event, "chapterId")!;

  const chapter = await prisma.chapters.delete({
    where: {
      id: Number.parseInt(chapterId),
    },
  });

  return chapter;
});
