import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, "articleId")!;

  const article = await prisma.articles.delete({
    where: {
      id: Number.parseInt(articleId!),
    },
  });

  await useStorage("r2").removeItem(`articles/${article.id}/${article.imageCoverName}`);
  await useStorage("r2").removeItem(`articles/${article.id}/html`);
  await useStorage("r2").removeItem(`articles/${article.id}/delta`);

  // eslint-disable-next-line no-console
  console.log("deleted");

  return article;
});
