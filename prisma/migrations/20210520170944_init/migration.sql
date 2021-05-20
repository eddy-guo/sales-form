/*
  Warnings:

  - You are about to drop the column `volume_estimations` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `current_workflow_details` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `current_intake_methods` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `service_level_agreements` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_users` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `mfd_scanner_vendor` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `integrations_for_lookup_data` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `integrations_for_data_export` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `authentication` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `retention` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `current_ecm_cloud_storage` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `any_automation_desired` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `other_important_detail` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `generic_demo_required` on the `digitalmail` table. All the data in the column will be lost.
  - You are about to drop the column `custom_demo_required` on the `digitalmail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "digitalmail" DROP COLUMN "volume_estimations",
DROP COLUMN "current_workflow_details",
DROP COLUMN "current_intake_methods",
DROP COLUMN "service_level_agreements",
DROP COLUMN "number_of_users",
DROP COLUMN "mfd_scanner_vendor",
DROP COLUMN "integrations_for_lookup_data",
DROP COLUMN "integrations_for_data_export",
DROP COLUMN "authentication",
DROP COLUMN "retention",
DROP COLUMN "current_ecm_cloud_storage",
DROP COLUMN "any_automation_desired",
DROP COLUMN "other_important_detail",
DROP COLUMN "generic_demo_required",
DROP COLUMN "custom_demo_required";
