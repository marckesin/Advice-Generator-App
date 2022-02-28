import AdviceCard from "../components/adviceCard";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

// Not found page component
export default function Custom404() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AdviceCard slip={{ id: 404, advice: "Page not Found" }} />
      </main>
      <Footer />
    </div>
  );
}
