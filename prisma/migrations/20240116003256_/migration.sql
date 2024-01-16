/*
  Warnings:

  - A unique constraint covering the columns `[licensePlate]` on the table `Automobile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Automobile_licensePlate_key" ON "Automobile"("licensePlate");
