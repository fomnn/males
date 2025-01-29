import type { Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { classes } from "@prisma/client";
import prisma from "~/lib/prisma";

async function main() {
  await prisma.subjects.deleteMany();
  await prisma.chapters.deleteMany();
  await prisma.sub_chapters.deleteMany();

  // eslint-disable-next-line no-console
  console.log("Data in database deleted");

  const subjectsData: Prisma.subjectsCreateManyInput[] = Array.from({ length: 10 }, () => {
    const subjectName = faker.book.genre();
    return {
      name: subjectName,
      description: faker.lorem.sentence(),
      slug: subjectName.split(" ").join("-"),
    };
  });

  const subjects = await prisma.subjects.createManyAndReturn({
    data: subjectsData,
  });

  const subjectsId = subjects.map(subject => subject.id);

  let chapterIndex = 0;
  const chaptersData: Prisma.chaptersCreateManyInput[] = Array.from({ length: 10 }, () => {
    chapterIndex++;
    return {
      title: faker.lorem.sentence(),
      class: faker.helpers.enumValue(classes),
      subject_id: faker.helpers.arrayElement(subjectsId),
      index: chapterIndex,
    };
  });

  const chapters = await prisma.chapters.createManyAndReturn({
    data: chaptersData,
  });

  const chaptersId = chapters.map(chapter => chapter.id);

  let subChaptersIndex = 0;
  const subChaptersData: Prisma.sub_chaptersCreateManyInput[] = Array.from({ length: 10 }, () => {
    subChaptersIndex++;
    return {
      title: faker.lorem.sentence(),
      chapter_id: faker.helpers.arrayElement(chaptersId),
      index: subChaptersIndex,
    };
  });

  await prisma.sub_chapters.createMany({
    data: subChaptersData,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
