/*
  Warnings:

  - You are about to drop the column `paint_points` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `paint_points` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pain_points` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pain_points` to the `digitalmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accountspayable" DROP COLUMN "paint_points",
ADD COLUMN     "pain_points" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "digitalmail" DROP COLUMN "paint_points",
ADD COLUMN     "pain_points" TEXT NOT NULL;

-- DropTable
DROP TABLE "test";
