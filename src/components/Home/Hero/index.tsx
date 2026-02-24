import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
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
        <div className={styles.meta}>
          <div>
            <span className={styles.label}>BASÉ À</span>
            <span>PARIS, FR</span>
          </div>
          <div>
            <span className={styles.label}>DISPONIBLE</span>
            <span>MAINTENANT</span>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        Scroll
      </div>
    </section>
  );
}
