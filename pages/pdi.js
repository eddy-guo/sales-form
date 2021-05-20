import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function pdi({ data }) {
  const [formData, setFormData] = useState({});
  const [tests, setTests] = useState(data);

  async function saveTest(e) {
    e.preventDefault();

    setTests([...tests, formData]);

    const response = await fetch("/api/pdi", {
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

        <p>pfi_cloud_fax_service</p>
        <select
          value={formData.pfi_cloud_fax_service}
          onChange={(e) =>
            setFormData({ ...formData, pfi_cloud_fax_service: e.target.value })
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
          placeholder="fax_volume_pages"
          name="fax_volume_pages"
          onChange={(e) =>
            setFormData({
              ...formData,
              fax_volume_pages: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="fax_numbers"
          name="fax_numbers"
          onChange={(e) =>
            setFormData({
              ...formData,
              fax_numbers: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="current_fax_setup"
          name="current_fax_setup"
          onChange={(e) =>
            setFormData({
              ...formData,
              current_fax_setup: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="current_methods_of_faxing"
          name="current_methods_of_faxing"
          onChange={(e) =>
            setFormData({
              ...formData,
              current_methods_of_faxing: e.target.value,
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
          placeholder="integrations"
          name="integrations"
          onChange={(e) =>
            setFormData({
              ...formData,
              integrations: e.target.value,
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
          placeholder="ecm_cloud_storage"
          name="ecm_cloud_storage"
          onChange={(e) =>
            setFormData({ ...formData, ecm_cloud_storage: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="telco_provider"
          name="telco_provider"
          onChange={(e) =>
            setFormData({ ...formData, telco_provider: e.target.value })
          }
        />

        <p>use_coversheet</p>
        <select
          value={formData.use_coversheet}
          onChange={(e) =>
            setFormData({ ...formData, use_coversheet: e.target.value })
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

        <input
          type="text"
          placeholder="how_many_modalities"
          name="how_many_modalities"
          onChange={(e) =>
            setFormData({ ...formData, how_many_modalities: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="how_many_departments"
          name="how_many_departments"
          onChange={(e) =>
            setFormData({ ...formData, how_many_departments: e.target.value })
          }
        />

        <p>centralized_or_decentralized</p>
        <select
          value={formData.centralized_or_decentralized}
          onChange={(e) =>
            setFormData({
              ...formData,
              centralized_or_decentralized: e.target.value,
            })
          }
        >
          {["Select", "Centralized", "Decentralized"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="PDI"
          name="PDI"
          onChange={(e) =>
            setFormData({ ...formData, PDI: e.target.value })
          }
        />

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
  const tests = await prisma.pdi.findMany();

  return {
    props: {
      data: tests,
    },
  };
}
