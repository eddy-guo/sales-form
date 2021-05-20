/*
  Warnings:

  - Added the required column `invoice_volume_estimations` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_of_invoice_percentage` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_workflow_details` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_intake_methods` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_level_agreements` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_of_users` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mfd_vendor` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `integrations_for_lookup_data` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `integrations_for_data_export` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authentication` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retention` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_erp_ecm` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `erp_partner_vendor` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `po_matching_required` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gr_matching_required` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `line_items_required` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `how_many_approvers` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `how_many_ap_clerks` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `any_automation_desired` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other_important_detail` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generic_demo_required` to the `accountspayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custom_demo_required` to the `accountspayable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accountspayable" ADD COLUMN     "invoice_volume_estimations" TEXT NOT NULL,
ADD COLUMN     "type_of_invoice_percentage" TEXT NOT NULL,
ADD COLUMN     "current_workflow_details" TEXT NOT NULL,
ADD COLUMN     "current_intake_methods" TEXT NOT NULL,
ADD COLUMN     "service_level_agreements" TEXT NOT NULL,
ADD COLUMN     "number_of_users" TEXT NOT NULL,
ADD COLUMN     "mfd_vendor" TEXT NOT NULL,
ADD COLUMN     "integrations_for_lookup_data" TEXT NOT NULL,
ADD COLUMN     "integrations_for_data_export" TEXT NOT NULL,
ADD COLUMN     "authentication" TEXT NOT NULL,
ADD COLUMN     "retention" TEXT NOT NULL,
ADD COLUMN     "current_erp_ecm" TEXT NOT NULL,
ADD COLUMN     "erp_partner_vendor" TEXT NOT NULL,
ADD COLUMN     "po_matching_required" TEXT NOT NULL,
ADD COLUMN     "gr_matching_required" TEXT NOT NULL,
ADD COLUMN     "line_items_required" TEXT NOT NULL,
ADD COLUMN     "how_many_approvers" TEXT NOT NULL,
ADD COLUMN     "how_many_ap_clerks" TEXT NOT NULL,
ADD COLUMN     "any_automation_desired" TEXT NOT NULL,
ADD COLUMN     "other_important_detail" TEXT NOT NULL,
ADD COLUMN     "generic_demo_required" TEXT NOT NULL,
ADD COLUMN     "custom_demo_required" TEXT NOT NULL;
