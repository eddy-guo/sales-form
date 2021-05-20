/*
  Warnings:

  - Added the required column `volume_estimations` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_workflow_details` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_intake_methods` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_level_agreements` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_of_users` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mfd_scanner_vendor` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `integrations_for_lookup_data` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `integrations_for_data_export` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authentication` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retention` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_ecm_cloud_storage` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `any_automation_desired` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other_important_detail` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generic_demo_required` to the `digitalmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custom_demo_required` to the `digitalmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "digitalmail" ADD COLUMN     "volume_estimations" TEXT NOT NULL,
ADD COLUMN     "current_workflow_details" TEXT NOT NULL,
ADD COLUMN     "current_intake_methods" TEXT NOT NULL,
ADD COLUMN     "service_level_agreements" TEXT NOT NULL,
ADD COLUMN     "number_of_users" TEXT NOT NULL,
ADD COLUMN     "mfd_scanner_vendor" TEXT NOT NULL,
ADD COLUMN     "integrations_for_lookup_data" TEXT NOT NULL,
ADD COLUMN     "integrations_for_data_export" TEXT NOT NULL,
ADD COLUMN     "authentication" TEXT NOT NULL,
ADD COLUMN     "retention" TEXT NOT NULL,
ADD COLUMN     "current_ecm_cloud_storage" TEXT NOT NULL,
ADD COLUMN     "any_automation_desired" TEXT NOT NULL,
ADD COLUMN     "other_important_detail" TEXT NOT NULL,
ADD COLUMN     "generic_demo_required" TEXT NOT NULL,
ADD COLUMN     "custom_demo_required" TEXT NOT NULL;
