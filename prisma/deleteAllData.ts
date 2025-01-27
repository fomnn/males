import prisma from "~/lib/prisma";

async function main() {
  await prisma.sub_chapters.deleteMany();
  await prisma.chapters.deleteMany();
  await prisma.subjects.deleteMany();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
