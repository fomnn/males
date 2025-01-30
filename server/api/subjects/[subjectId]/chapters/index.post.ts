import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subjectId = getRouterParam(event, "subjectId");
  

  const { title, classq } = await readBody(event);

  const chapterCount = await prisma.chapters.count({
    where: {
      subject_id: Number.parseInt(subjectId!),
    },
  });

  const chapter = await prisma.chapters.create({
    data: {
      subject_id: Number.parseInt(subjectId!),
      title,
      class: classq,
      index: chapterCount + 1,
    },
  });

  return chapter;
});
