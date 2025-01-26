import type { classes } from "@prisma/client";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subjectId = getRouterParam(event, "subjectId");
  const query = getQuery(event);

  const classq = query.class as classes;

  if (!subjectId)
    throw createError({ statusCode: 404 });

  const chapters = await prisma.chapters.findMany({
    where: {
      subject_id: Number.parseInt(subjectId),
      ...(classq ? { class: classq } : {}),
    },
  });

  return chapters;
});
