/*
  Warnings:

  - You are about to drop the `AlsoTemporary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Temporary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AlsoTemporary";

-- DropTable
DROP TABLE "Temporary";

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);
