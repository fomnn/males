import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subChapterId = getRouterParam(event, "subChapterId");

  const { title, index } = await readBody(event);

  const subChapter = await prisma.sub_chapters.update({
    where: {
      id: Number.parseInt(subChapterId!),
    },
    data: {
      title,
      index,
    },
  });

  return subChapter;
});
