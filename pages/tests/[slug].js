import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";
import { useState } from "react";
const prisma = new PrismaClient();

export default function Test({ test }) {

  const [a, setA] = useState(test.title);

  async function updateRecord() {
    await fetch("/api/edit", {
      method: "POST",
      body: JSON.stringify({ id: test.id, title: a }),
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{test.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>{a}</h2>

        <input
          type="text"
          placeholder="Title"
          name="title"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />

        <button onClick={() => updateRecord()}>Update Record</button>

        <p>{test.description}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const test = await prisma.test.findFirst({
    where: {
      slug: slug,
    },
  });

  return {
    props: {
      test,
    },
  };
}
