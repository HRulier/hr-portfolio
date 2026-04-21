import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import FormContact from "@/components/Contact/FormContact";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.line}>
            <h1>
              Discutons<span className={styles.dot}>.</span>
            </h1>
          </div>
          <p>Stack, défis techniques et opportunités.</p>
        </div>
      </section>
      <section className={styles.form}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <div className={styles.contact}>
              <label>Retrouvez-moi</label>
              <div className={styles.contactLinks}>
                <a href="https://www.linkedin.com/in/hugo-rulier/">
                  <FaLinkedin size={24} />
                  <span>Linkedin</span>
                </a>
                <a href="https://github.com/HRulier">
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className={styles.info}>
              <label>Localisation</label>
              <p>Nantes, France</p>
              <label>Disponibilité</label>
              <p>Ouvert aux opportunités CDI</p>
            </div>
          </div>
          <div>
            <FormContact />
          </div>
        </div>
      </section>
    </div>
  );
}
