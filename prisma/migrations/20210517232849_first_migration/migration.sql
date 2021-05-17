/*
  Warnings:

  - You are about to drop the column `Title` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `Year` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `Slug` on the `Test` table. All the data in the column will be lost.
  - Added the required column `title` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "Title",
DROP COLUMN "Year",
DROP COLUMN "Description",
DROP COLUMN "Slug",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;
