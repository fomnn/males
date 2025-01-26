/*
  Warnings:

  - You are about to drop the column `path_text` on the `subjects` table. All the data in the column will be lost.
  - You are about to drop the column `tailwind_color` on the `subjects` table. All the data in the column will be lost.
  - Added the required column `color` to the `subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subjects" DROP COLUMN "path_text",
DROP COLUMN "tailwind_color",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;
