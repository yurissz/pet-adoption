/*
  Warnings:

  - Added the required column `age` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pets" ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
