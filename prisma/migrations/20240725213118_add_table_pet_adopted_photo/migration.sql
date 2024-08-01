/*
  Warnings:

  - Added the required column `adopted` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pets" ADD COLUMN     "adopted" BOOLEAN NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL;
