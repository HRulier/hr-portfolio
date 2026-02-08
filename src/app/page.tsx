import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <CTA />
      </main>
    </div>
  );
}
