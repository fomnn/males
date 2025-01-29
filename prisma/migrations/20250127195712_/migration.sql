/*
  Warnings:

  - You are about to drop the column `content` on the `sub_chapters` table. All the data in the column will be lost.
  - Added the required column `index` to the `chapters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chapters" ADD COLUMN     "index" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sub_chapters" DROP COLUMN "content";

-- CreateTable
CREATE TABLE "contents" (
    "id" SERIAL NOT NULL,
    "sub_chapter_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "html" TEXT NOT NULL,
    "delta" TEXT NOT NULL,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_sub_chapter_id_fkey" FOREIGN KEY ("sub_chapter_id") REFERENCES "sub_chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
