import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const chapterId = getRouterParam(event, "chapterId")!;

  const subChapters = await prisma.sub_chapters.findMany({
    where: {
      chapter_id: Number.parseInt(chapterId)
    }
  })

  return subChapters
})
