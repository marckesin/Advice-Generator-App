import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";

// Advice card component
export default function AdviceCard({ slip }) {
  return (
    <Card className={styles.card}>
      <p className={styles.id}>ADVICE #{slip.id}</p>
      <h1 className={styles.heading}>{slip.advice}</h1>
    </Card>
  );
}
