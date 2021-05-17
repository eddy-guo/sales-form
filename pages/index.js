import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ data }) {

  const [formData, setFormData] = useState({});

  const saveTest = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Test List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.testlist}>
          {data.map((item) => (
            <li key="item.id">
              <span>
                <strong>{item.Title}</strong>
              </span>
              <span>{item.Year}</span>
              <span>{item.Description}</span>
            </li>
            // CASE SENSITIVE RELATIVE TO TABLE COLUMN NAMES!!!!
          ))}
        </ul>
        <form className={styles.testform} onSubmit={saveTest}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={(e) =>
              setFormData({ ...formData, year: +e.target.value })
            }
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Slug"
            name="slug"
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />
          <button type="submit">Add Test</button>
        </form>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const tests = await prisma.test.findMany();

  return {
    props: {
      data: tests,
    },
  };
}
