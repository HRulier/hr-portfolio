import Link from "next/link";
import { ImArrowRight } from "react-icons/im";
import styles from "./moreProjects.module.scss";

export default function MoreProjects() {
  return (
    <article className={styles.card}>
      <Link href="/projects">
        <div className={styles.body}>
          <p className={styles.label}>
            Voir plus
            <br />
            de projets
          </p>
          <span className={styles.arrow}>
            <ImArrowRight />
          </span>
        </div>
      </Link>
    </article>
  );
}
