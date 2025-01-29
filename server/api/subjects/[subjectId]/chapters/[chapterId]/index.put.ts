import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const chapterId = getRouterParam(event, "chapterId")!;

  const { title, index } = await readBody(event);

  const chapter = await prisma.chapters.update({
    where: {
      id: Number.parseInt(chapterId),
    },
    data: {
      title,
      index,
    },
  });

  return chapter;
});
