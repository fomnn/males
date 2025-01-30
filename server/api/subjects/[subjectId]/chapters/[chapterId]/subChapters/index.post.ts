import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const chapterId = getRouterParam(event, "chapterId")!;
  

  const { title } = await readBody(event);

  const countSubChapters = await prisma.sub_chapters.count({
    where: {
      chapter_id: Number.parseInt(chapterId),
    },
  });

  const subChapter = await prisma.sub_chapters.create({
    data: {
      chapter_id: Number.parseInt(chapterId),
      title,
      index: countSubChapters + 1,
    },
  });

  return subChapter;
});
