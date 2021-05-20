/*
  Warnings:

  - You are about to drop the `Fax` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Fax";

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fax" (
    "id" SERIAL NOT NULL,
    "pain_points" TEXT NOT NULL,
    "fax_volume" TEXT NOT NULL,
    "fax_numbers" TEXT NOT NULL,
    "current_fax_setup" TEXT NOT NULL,
    "current_methods_of_faxing" TEXT NOT NULL,
    "service_level_agreements" TEXT NOT NULL,
    "number_of_users" TEXT NOT NULL,
    "mfd_vendor" TEXT NOT NULL,
    "integrations" TEXT NOT NULL,
    "authentication" TEXT NOT NULL,
    "retention" TEXT NOT NULL,
    "ecm_cloud_storage" TEXT NOT NULL,
    "telco_provider" TEXT NOT NULL,
    "use_coversheet" TEXT NOT NULL,
    "any_automation_desired" TEXT NOT NULL,
    "other_important_detail" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otherdocuments" (
    "id" SERIAL NOT NULL,
    "type_of_documents_to_process" TEXT NOT NULL,
    "provide_samples" TEXT NOT NULL,
    "pain_points" TEXT NOT NULL,
    "volume_estimations" TEXT NOT NULL,
    "current_workflow_details" TEXT NOT NULL,
    "current_intake_methods" TEXT NOT NULL,
    "service_level_agreements" TEXT NOT NULL,
    "number_of_users" TEXT NOT NULL,
    "mfd_vendor" TEXT NOT NULL,
    "integrations_for_lookup_data" TEXT NOT NULL,
    "integrations_for_data_export" TEXT NOT NULL,
    "authentication" TEXT NOT NULL,
    "retention" TEXT NOT NULL,
    "current_ecm_cloud_storage" TEXT NOT NULL,
    "any_automation_desired" TEXT NOT NULL,
    "other_important_detail" TEXT NOT NULL,
    "generic_demo_required" TEXT NOT NULL,
    "custom_demo_required" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accountspayable" (
    "id" SERIAL NOT NULL,
    "paint_points" TEXT NOT NULL,
    "invoice_volume_estimations" TEXT NOT NULL,
    "type_of_invoice_percentage" TEXT NOT NULL,
    "current_workflow_details" TEXT NOT NULL,
    "current_intake_methods" TEXT NOT NULL,
    "service_level_agreements" TEXT NOT NULL,
    "number_of_users" TEXT NOT NULL,
    "mfd_vendor" TEXT NOT NULL,
    "integrations_for_lookup_data" TEXT NOT NULL,
    "integrations_for_data_export" TEXT NOT NULL,
    "authentication" TEXT NOT NULL,
    "retention" TEXT NOT NULL,
    "current_erp_ecm" TEXT NOT NULL,
    "erp_partner_vendor" TEXT NOT NULL,
    "po_matching_required" TEXT NOT NULL,
    "gr_matching_required" TEXT NOT NULL,
    "line_items_required" TEXT NOT NULL,
    "how_many_approvers" TEXT NOT NULL,
    "how_many_ap_clerks" TEXT NOT NULL,
    "any_automation_desired" TEXT NOT NULL,
    "other_important_detail" TEXT NOT NULL,
    "generic_demo_required" TEXT NOT NULL,
    "custom_demo_required" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "digitalmail" (
    "id" SERIAL NOT NULL,
    "paint_points" TEXT NOT NULL,
    "volume_estimations" TEXT NOT NULL,
    "current_workflow_details" TEXT NOT NULL,
    "current_intake_methods" TEXT NOT NULL,
    "service_level_agreements" TEXT NOT NULL,
    "number_of_users" TEXT NOT NULL,
    "mfd_scanner_vendor" TEXT NOT NULL,
    "integrations_for_lookup_data" TEXT NOT NULL,
    "integrations_for_data_export" TEXT NOT NULL,
    "authentication" TEXT NOT NULL,
    "retention" TEXT NOT NULL,
    "current_ecm_cloud_storage" TEXT NOT NULL,
    "any_automation_desired" TEXT NOT NULL,
    "other_important_detail" TEXT NOT NULL,
    "generic_demo_required" TEXT NOT NULL,
    "custom_demo_required" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pdi" (
    "id" SERIAL NOT NULL,
    "pain_points" TEXT NOT NULL,
    "pfi_cloud_fax_service" TEXT NOT NULL,
    "fax_volume_pages" TEXT NOT NULL,
    "fax_numbers" TEXT NOT NULL,
    "current_fax_setup" TEXT NOT NULL,
    "current_methods_of_faxing" TEXT NOT NULL,
    "service_level_agreements" TEXT NOT NULL,
    "number_of_users" TEXT NOT NULL,
    "mfd_vendor" TEXT NOT NULL,
    "integrations" TEXT NOT NULL,
    "authentication" TEXT NOT NULL,
    "retention" TEXT NOT NULL,
    "ecm_cloud_storage" TEXT NOT NULL,
    "telco_provider" TEXT NOT NULL,
    "use_coversheet" TEXT NOT NULL,
    "any_automation_desired" TEXT NOT NULL,
    "other_important_detail" TEXT NOT NULL,
    "how_many_modalities" TEXT NOT NULL,
    "how_many_departments" TEXT NOT NULL,
    "centralized_or_decentralized" TEXT NOT NULL,
    "PDI" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
