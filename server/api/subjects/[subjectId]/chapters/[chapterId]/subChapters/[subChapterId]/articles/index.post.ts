import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subChapterId = getRouterParam(event, "subChapterId");

  const formData = await readFormData(event);

  const title = formData.get("title") as string;
  const html = formData.get("html") as string;
  const delta = formData.get("delta") as string;
  const imageCover = formData.get("imageCover") as File | null;

  const countArticles = await prisma.articles.count({
    where: {
      sub_chapter_id: Number.parseInt(subChapterId!),
    },
  });

  const index = countArticles + 1;

  const article = await prisma.articles.create({
    data: {
      sub_chapter_id: Number.parseInt(subChapterId!),
      title,
      index,
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
