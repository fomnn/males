import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const subjectId = getRouterParam(event, "subjectId")!;
  

  const { description, name } = await readBody(event);

  const subject = await prisma.subjects.update({
    where: {
      id: Number.parseInt(subjectId),
    },
    data: {
      description,
      name,
      slug: name.split(" ").join("-"),
    },
  });

  return subject;
});
