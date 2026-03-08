import Link from "next/link";
import styles from "./moreProjects.module.scss";

export default function MoreProjects() {
  return (
    <article className={styles.card}>
      <Link href="/projets">
        <span className={styles.index}>04</span>
        <div className={styles.body}>
          <p className={styles.label}>
            Voir plus
            <br />
            de projets
          </p>
          <span className={styles.arrow}>→</span>
        </div>
      </Link>
    </article>
  );
}
