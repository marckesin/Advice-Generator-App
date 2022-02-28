import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice Generator App</title>
        <meta
          name="description"
          content="Advice Generator App created with Next.js and adviceslip.com API."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
