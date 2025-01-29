/*
  Warnings:

  - You are about to drop the `contents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contents" DROP CONSTRAINT "contents_sub_chapter_id_fkey";

-- DropTable
DROP TABLE "contents";

-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "sub_chapter_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "html" TEXT NOT NULL,
    "delta" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_sub_chapter_id_fkey" FOREIGN KEY ("sub_chapter_id") REFERENCES "sub_chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
