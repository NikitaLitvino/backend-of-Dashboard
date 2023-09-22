/*
  Warnings:

  - Changed the type of `startDate` on the `CalendarTask` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `startDate` on the `Sale` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CalendarTask" DROP COLUMN "startDate",
ADD COLUMN     "startDate" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "startDate",
ADD COLUMN     "startDate" INTEGER NOT NULL;
