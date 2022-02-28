import AdviceCard from "../components/adviceCard";
import Container from "@mui/material/Container";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home({ slip }) {
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
      <main className={styles.main}>
        <AdviceCard slip={slip} />
      </main>
      <Footer />
    </div>
  );
}

// Home component will fetch data using this function on every request
export async function getServerSideProps() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const { slip } = data;

  return { props: { slip } };
}
