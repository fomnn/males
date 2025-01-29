/*
  Warnings:

  - You are about to drop the column `delta` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `html` on the `articles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "delta",
DROP COLUMN "html";
