/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Worker" AS ENUM ('PixelAdmin', 'Ample');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Pending', 'Completed', 'Cancel');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "adress" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "workRole" TEXT,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "projectName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weeks" INTEGER NOT NULL,
    "budget" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "worker" "Worker" NOT NULL,
    "salerId" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_salerId_fkey" FOREIGN KEY ("salerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
