-- CreateTable
CREATE TABLE "CalendarTask" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "long" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "CalendarTask_pkey" PRIMARY KEY ("id")
);
