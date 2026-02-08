import styles from "./cta.module.scss";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Travaillons ensemble<span className={styles.dot}>.</span>
        </h2>
        <p>Mon profil vous intéresse ?</p>
        <a href="#" className={styles.btnCta}>
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
