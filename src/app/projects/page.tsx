import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.line}>
            <h1>
              Projets<span className={styles.dot}>.</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
