/*
  Warnings:

  - You are about to drop the column `invoice_volume_estimations` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `type_of_invoice_percentage` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `current_workflow_details` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `current_intake_methods` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `service_level_agreements` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_users` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `mfd_vendor` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `integrations_for_lookup_data` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `integrations_for_data_export` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `authentication` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `retention` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `current_erp_ecm` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `erp_partner_vendor` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `po_matching_required` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `gr_matching_required` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `line_items_required` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `how_many_approvers` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `how_many_ap_clerks` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `any_automation_desired` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `other_important_detail` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `generic_demo_required` on the `accountspayable` table. All the data in the column will be lost.
  - You are about to drop the column `custom_demo_required` on the `accountspayable` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accountspayable" DROP COLUMN "invoice_volume_estimations",
DROP COLUMN "type_of_invoice_percentage",
DROP COLUMN "current_workflow_details",
DROP COLUMN "current_intake_methods",
DROP COLUMN "service_level_agreements",
DROP COLUMN "number_of_users",
DROP COLUMN "mfd_vendor",
DROP COLUMN "integrations_for_lookup_data",
DROP COLUMN "integrations_for_data_export",
DROP COLUMN "authentication",
DROP COLUMN "retention",
DROP COLUMN "current_erp_ecm",
DROP COLUMN "erp_partner_vendor",
DROP COLUMN "po_matching_required",
DROP COLUMN "gr_matching_required",
DROP COLUMN "line_items_required",
DROP COLUMN "how_many_approvers",
DROP COLUMN "how_many_ap_clerks",
DROP COLUMN "any_automation_desired",
DROP COLUMN "other_important_detail",
DROP COLUMN "generic_demo_required",
DROP COLUMN "custom_demo_required";
