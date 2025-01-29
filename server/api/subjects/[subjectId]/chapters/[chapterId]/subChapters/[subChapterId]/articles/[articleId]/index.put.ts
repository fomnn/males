import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, "articleId");

  const formData = await readFormData(event);

  const title = formData.get("title") as string;
  const html = formData.get("html") as string;
  const delta = formData.get("delta") as string;
  const index = formData.get("index") as string;
  const imageCover = formData.get("imageCover") as File | null;

  const article = await prisma.articles.update({
    where: {
      id: Number.parseInt(articleId!),
    },
    data: {
      title,
      index: Number.parseInt(index!),
    },
  });

  if (imageCover) {
    const fileExt = imageCover.name.split(".").pop();
    const fileName = `imageCover-${article.id}.${fileExt}`;
    await useStorage("r2").setItemRaw(`articles/${article.id}/${fileName}`, imageCover);

    await prisma.articles.update({
      where: {
        id: article.id,
      },
      data: {
        imageCoverName: fileName,
      },
    });
  }

  await useStorage("r2").setItemRaw(`articles/${article.id}/html`, html);
  await useStorage("r2").setItemRaw(`articles/${article.id}/delta`, delta);

  return article;
});
