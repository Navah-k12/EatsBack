/*
  Warnings:

  - Added the required column `restaurantId` to the `Mysterybox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mysterybox` ADD COLUMN `restaurantId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Mysterybox` ADD CONSTRAINT `Mysterybox_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
