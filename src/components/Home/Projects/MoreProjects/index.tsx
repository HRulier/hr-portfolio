import { ImArrowRight } from "react-icons/im";
import { TransitionLink } from "@/components/layout/PageTransition";
import styles from "./moreProjects.module.scss";

export default function MoreProjects() {
  return (
    <article className={styles.card}>
      <TransitionLink href="/projects">
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
      </TransitionLink>
    </article>
  );
}
