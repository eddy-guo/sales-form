import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Test({ test }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{test.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>{test.title}</h2>
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
