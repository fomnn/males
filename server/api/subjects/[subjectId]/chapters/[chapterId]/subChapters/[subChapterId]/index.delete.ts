import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subChapterId = getRouterParam(event, "subChapterId")!;

  const subChapter = await prisma.sub_chapters.delete({
    where: {
      id: Number.parseInt(subChapterId),
    },
  });

  return subChapter;
});
