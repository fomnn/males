/*
  Warnings:

  - Added the required column `content` to the `sub_chapters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `index` to the `sub_chapters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sub_chapters" ADD COLUMN     "content" JSONB NOT NULL,
ADD COLUMN     "index" INTEGER NOT NULL;
