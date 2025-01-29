-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_sub_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "sub_chapters" DROP CONSTRAINT "sub_chapters_chapter_id_fkey";

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_chapters" ADD CONSTRAINT "sub_chapters_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_sub_chapter_id_fkey" FOREIGN KEY ("sub_chapter_id") REFERENCES "sub_chapters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
