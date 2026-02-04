import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span>DEV.</span>
          </span>
          <span className={styles.line}>
            <span>
              <span className={styles.accent}>Fullstack</span>
            </span>
          </span>
        </h1>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          Conception et développement d&apos;applications web performantes.
          Spécialisé MERN Stack, API REST et interfaces temps réel.
        </p>
      </div>
    </div>
  );
}
