/*
  Warnings:

  - You are about to drop the `Bab` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mapel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bab" DROP CONSTRAINT "Bab_mapel_id_fkey";

-- DropTable
DROP TABLE "Bab";

-- DropTable
DROP TABLE "Mapel";

-- CreateTable
CREATE TABLE "mapel" (
    "id" SERIAL NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "icon" TEXT,
    "nama" TEXT NOT NULL,
    "path_text" TEXT,
    "tailwind_color" TEXT NOT NULL,

    CONSTRAINT "mapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bab" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "kelas" CHAR(2) NOT NULL,
    "mapel_id" INTEGER NOT NULL,
    "sub_bab" JSONB NOT NULL,

    CONSTRAINT "bab_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bab" ADD CONSTRAINT "bab_mapel_id_fkey" FOREIGN KEY ("mapel_id") REFERENCES "mapel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
