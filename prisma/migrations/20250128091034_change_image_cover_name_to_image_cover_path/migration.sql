/*
  Warnings:

  - You are about to drop the column `imageCoverName` on the `articles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "imageCoverName",
ADD COLUMN     "imageCoverPath" TEXT;
