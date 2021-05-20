import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function accountsPayable({ data }) {
  const [formData, setFormData] = useState({});
  const [tests, setTests] = useState(data);

  async function saveTest(e) {
    e.preventDefault();

    setTests([...tests, formData]);

    const response = await fetch("/api/accountspayable", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    return await response.json();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sales Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Accounts Payable Form</h1>

      <form className={styles.testform} onSubmit={saveTest}>
        <input
          type="text"
          placeholder="pain_points"
          name="pain_points"
          onChange={(e) =>
            setFormData({ ...formData, pain_points: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="invoice_volume_estimations"
          name="invoice_volume_estimations"
          onChange={(e) =>
            setFormData({
              ...formData,
              invoice_volume_estimations: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="type_of_invoice_percentage"
          name="type_of_invoice_percentage"
          onChange={(e) =>
            setFormData({
              ...formData,
              type_of_invoice_percentage: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="current_workflow_details"
          name="current_workflow_details"
          onChange={(e) =>
            setFormData({
              ...formData,
              current_workflow_details: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="current_intake_methods"
          name="current_intake_methods"
          onChange={(e) =>
            setFormData({
              ...formData,
              current_intake_methods: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="service_level_agreements"
          name="service_level_agreements"
          onChange={(e) =>
            setFormData({
              ...formData,
              service_level_agreements: e.target.value,
            })
          }
        />

        <p>number_of_users</p>
        <select
          value={formData.number_of_users}
          onChange={(e) =>
            setFormData({ ...formData, number_of_users: e.target.value })
          }
        >
          {["Select", "10", "25", "50", ">100"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="mfd_vendor"
          name="mfd_vendor"
          onChange={(e) =>
            setFormData({ ...formData, mfd_vendor: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="integrations_for_lookup_data"
          name="integrations_for_lookup_data"
          onChange={(e) =>
            setFormData({
              ...formData,
              integrations_for_lookup_data: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="integrations_for_data_export"
          name="integrations_for_data_export"
          onChange={(e) =>
            setFormData({
              ...formData,
              integrations_for_data_export: e.target.value,
            })
          }
        />

        <p>authentication</p>
        <select
          value={formData.authentication}
          onChange={(e) =>
            setFormData({ ...formData, authentication: e.target.value })
          }
        >
          {["Select", "Basic", "SAML"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <p>retention</p>
        <select
          value={formData.retention}
          onChange={(e) =>
            setFormData({ ...formData, retention: e.target.value })
          }
        >
          {["Select", "Temp", "Long-term"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="current_erp_ecm"
          name="current_erp_ecm"
          onChange={(e) =>
            setFormData({ ...formData, current_erp_ecm: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="erp_partner_vendor"
          name="erp_partner_vendor"
          onChange={(e) =>
            setFormData({ ...formData, erp_partner_vendor: e.target.value })
          }
        />

        <p>po_matching_required</p>
        <select
          value={formData.po_matching_required}
          onChange={(e) =>
            setFormData({ ...formData, po_matching_required: e.target.value })
          }
        >
          {["Select", "True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <p>gr_matching_required</p>
        <select
          value={formData.gr_matching_required}
          onChange={(e) =>
            setFormData({ ...formData, gr_matching_required: e.target.value })
          }
        >
          {["Select", "True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <p>line_items_required</p>
        <select
          value={formData.line_items_required}
          onChange={(e) =>
            setFormData({ ...formData, line_items_required: e.target.value })
          }
        >
          {["Select", "True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="how_many_approvers"
          name="how_many_approvers"
          onChange={(e) =>
            setFormData({ ...formData, how_many_approvers: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="how_many_ap_clerks"
          name="how_many_ap_clerks"
          onChange={(e) =>
            setFormData({ ...formData, how_many_ap_clerks: e.target.value })
          }
        />

        <p>any_automation_desired</p>
        <select
          value={formData.any_automation_desired}
          onChange={(e) =>
            setFormData({ ...formData, any_automation_desired: e.target.value })
          }
        >
          {["Select", "True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="other_important_detail"
          name="other_important_detail"
          onChange={(e) =>
            setFormData({ ...formData, other_important_detail: e.target.value })
          }
        />

        <p>generic_demo_required</p>
        <select
          value={formData.generic_demo_required}
          onChange={(e) =>
            setFormData({ ...formData, generic_demo_required: e.target.value })
          }
        >
          {["Select", "True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <p>custom_demo_required</p>
        <select
          value={formData.custom_demo_required}
          onChange={(e) =>
            setFormData({ ...formData, custom_demo_required: e.target.value })
          }
        >
          {["Select", "True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button type="submit">Submit</button>
      </form>

      <main className={styles.main}>
        <ul className={styles.testlist}>
          {tests.map((item) => (
            <li key="item.id">
              <span>
                <strong>{item.title}</strong>
              </span>
              <span>{item.year}</span>
              <span>{item.description}</span>
              <Link href={`/tests/${item.slug}`}>
                <a>More about this Test</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {
  const tests = await prisma.accountspayable.findMany();

  return {
    props: {
      data: tests,
    },
  };
}
