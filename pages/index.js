import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.testlist}>
          {data.map((item) => (
            <li key="item.id">{item.Title}</li>
            // CASE SENSITIVE RELATIVE TO TABLE COLUMN NAMES!!!!
          ))}
        </ul>
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
