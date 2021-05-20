import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function otherdocuments({ data }) {
  const [formData, setFormData] = useState({});
  const [tests, setTests] = useState(data);

  async function saveTest(e) {
    e.preventDefault();

    setTests([...tests, formData]);

    const response = await fetch("/api/otherdocuments", {
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

      <h1 className={styles.title}>Other Documents Form</h1>

      <form className={styles.testform} onSubmit={saveTest}>
        <input
          type="text"
          placeholder="type_of_documents_to_process"
          name="type_of_documents_to_process"
          onChange={(e) =>
            setFormData({
              ...formData,
              type_of_documents_to_process: e.target.value,
            })
          }
        />

        <p>provide_samples</p>
        <select
          value={formData.provide_samples}
          onChange={(e) =>
            setFormData({ ...formData, provide_samples: e.target.value })
          }
        >
          {["True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

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
          placeholder="volume_estimations"
          name="volume_estimations"
          onChange={(e) =>
            setFormData({ ...formData, volume_estimations: e.target.value })
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
          {["10", "25", "50", ">100"].map((item, i) => {
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
            setFormData({
              ...formData,
              mfd_vendor: e.target.value,
            })
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
          {["Basic", "SAML"].map((item, i) => {
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
          {["Temp", "Long-term"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="current_ecm_cloud_storage"
          name="current_ecm_cloud_storage"
          onChange={(e) =>
            setFormData({
              ...formData,
              current_ecm_cloud_storage: e.target.value,
            })
          }
        />

        <p>any_automation_desired</p>
        <select
          value={formData.any_automation_desired}
          onChange={(e) =>
            setFormData({ ...formData, any_automation_desired: e.target.value })
          }
        >
          {["True", "False"].map((item, i) => {
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
            setFormData({
              ...formData,
              other_important_detail: e.target.value,
            })
          }
        />

        <p>generic_demo_required</p>
        <select
          value={formData.generic_demo_required}
          onChange={(e) =>
            setFormData({ ...formData, generic_demo_required: e.target.value })
          }
        >
          {["True", "False"].map((item, i) => {
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
          {["True", "False"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button type="submit">Add test</button>
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
    </div>
  );
}

export async function getServerSideProps() {
  const tests = await prisma.otherdocuments.findMany();

  return {
    props: {
      data: tests,
    },
  };
}
