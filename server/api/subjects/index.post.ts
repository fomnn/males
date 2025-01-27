import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const {
    description,
    name,
  }: {
    description: string;
    name: string;
  } = await readBody(event);

  const subject = await prisma.subjects.create({
    data: {
      description,
      name,
      slug: name.split(" ").join("-"),
    },
  });

  return subject;
});
