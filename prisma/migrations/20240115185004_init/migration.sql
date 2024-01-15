-- CreateTable
CREATE TABLE "Automobile" (
    "id" SERIAL NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "Automobile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutomobileUsage" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "driverId" INTEGER NOT NULL,
    "automobileId" INTEGER NOT NULL,
    "usageReason" TEXT NOT NULL,

    CONSTRAINT "AutomobileUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AutomobileUsage_driverId_endDate_key" ON "AutomobileUsage"("driverId", "endDate");

-- AddForeignKey
ALTER TABLE "AutomobileUsage" ADD CONSTRAINT "AutomobileUsage_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomobileUsage" ADD CONSTRAINT "AutomobileUsage_automobileId_fkey" FOREIGN KEY ("automobileId") REFERENCES "Automobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
