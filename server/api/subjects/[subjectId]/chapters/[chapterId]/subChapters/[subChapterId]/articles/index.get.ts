import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subChapterId = getRouterParam(event, "subChapterId");

  const articles = await prisma.articles.findMany({
    where: {
      sub_chapter_id: Number.parseInt(subChapterId!),
    },
  });

  return articles;
});
