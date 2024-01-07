/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Products_id_belongsToId_key" ON "Products"("id", "belongsToId");
