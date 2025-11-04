-- CreateEnum
CREATE TYPE "ProductFlag" AS ENUM ('HOT', 'SALE', 'NEW');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "flag" "ProductFlag" DEFAULT 'SALE';
