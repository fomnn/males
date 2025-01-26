/*
  Warnings:

  - You are about to drop the `bab` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mapel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bab" DROP CONSTRAINT "bab_mapel_id_fkey";

-- DropTable
DROP TABLE "bab";

-- DropTable
DROP TABLE "mapel";

-- CreateTable
CREATE TABLE "subjects" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "name" TEXT NOT NULL,
    "path_text" TEXT,
    "tailwind_color" TEXT NOT NULL,

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "class" CHAR(2) NOT NULL,
    "subject_id" INTEGER NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_chapters" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "chapter_id" INTEGER NOT NULL,

    CONSTRAINT "sub_chapters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_chapters" ADD CONSTRAINT "sub_chapters_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
