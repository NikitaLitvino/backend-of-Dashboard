/*
  Warnings:

  - Added the required column `userId` to the `CalendarTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalendarTask" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CalendarTask" ADD CONSTRAINT "CalendarTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
