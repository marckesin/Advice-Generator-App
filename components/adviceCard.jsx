import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

// Advice card component
export default function AdviceCard({ slip }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(window.location.pathname);
  };

  return (
    <div className={styles.card}>
      <p className={styles.id}>ADVICE #{slip.id}</p>
      <h1 className={styles.heading}>{slip.advice}</h1>
      <div className={styles.divider}></div>
      <IconButton className={styles.button} onClick={handleClick}>
        <Image
          priority
          src="/icon-dice.svg"
          height={20}
          width={20}
          alt="Icon Button"
        />
      </IconButton>
    </div>
  );
}
