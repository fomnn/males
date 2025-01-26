/*
  Warnings:

  - Changed the type of `class` on the `chapters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "classes" AS ENUM ('k10', 'k11', 'k12');

-- AlterTable
ALTER TABLE "chapters" DROP COLUMN "class",
ADD COLUMN     "class" "classes" NOT NULL;
