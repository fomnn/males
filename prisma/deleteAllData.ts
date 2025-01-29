import prisma from "~/lib/prisma";

async function main() {
  await prisma.articles.deleteMany();
  await prisma.sub_chapters.deleteMany();
  await prisma.chapters.deleteMany();
  await prisma.subjects.deleteMany();

  // eslint-disable-next-line no-console
  console.log("Data in database deleted");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
