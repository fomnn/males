/*
  Warnings:

  - You are about to drop the column `imageCoverPath` on the `articles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "imageCoverPath",
ADD COLUMN     "imageCoverName" TEXT;
