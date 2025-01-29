import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, "articleId");

  const article = await prisma.articles.findFirst({
    where: {
      id: Number.parseInt(articleId!),
    },
  });

  return article;
});
