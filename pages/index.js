import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ data }) {
  const [formData, setFormData] = useState({});
  const [tests, setTests] = useState(data);

  async function saveTest(e) {
    e.preventDefault();

    setTests([...tests, formData]);

    const response = await fetch("/api/tests", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    return await response.json();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Test List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <button type="submit">Add test</button>
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
