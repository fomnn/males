-- CreateTable
CREATE TABLE "Mapel" (
    "id" SERIAL NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "icon" TEXT,
    "nama" TEXT NOT NULL,
    "path_text" TEXT,
    "tailwind_color" TEXT NOT NULL,

    CONSTRAINT "Mapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bab" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "kelas" CHAR(2) NOT NULL,
    "mapel_id" INTEGER NOT NULL,
    "sub_bab" JSONB NOT NULL,

    CONSTRAINT "Bab_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bab" ADD CONSTRAINT "Bab_mapel_id_fkey" FOREIGN KEY ("mapel_id") REFERENCES "Mapel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
