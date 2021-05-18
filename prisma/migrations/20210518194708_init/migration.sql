-- CreateTable
CREATE TABLE "Fax" (
    "id" SERIAL NOT NULL,
    "Pain_Points" TEXT NOT NULL,
    "Fax_volume" TEXT NOT NULL,
    "Fax_numbers" TEXT NOT NULL,
    "Current_fax_setup" TEXT NOT NULL,
    "Service_Level_Agreements" TEXT NOT NULL,
    "Number_of_users" INTEGER NOT NULL,
    "MFD_Vendor" TEXT NOT NULL,
    "Integrations" TEXT NOT NULL,
    "Authentication" TEXT NOT NULL,
    "Retention" TEXT NOT NULL,
    "ECM_Cloud_Storage" TEXT NOT NULL,
    "Telco_Provider" TEXT NOT NULL,
    "Use_Coversheet" TEXT NOT NULL,
    "Any_automation_desired" TEXT NOT NULL,
    "Other_Important_Detail" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
