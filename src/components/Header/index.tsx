"use client";

import styles from "./header.module.scss";
import { TransitionLink } from "@/components/PageTransition";

const Header = () => {
  return (
    <nav className={styles.header}>
      <TransitionLink href="/">
        <div className={styles.logo}>HUGO RULIER.DEV</div>
      </TransitionLink>
      <ul>
        <li>
          <TransitionLink href="/projects">Projets</TransitionLink>
        </li>
        <li>
          <a href="#">Compétences</a>
        </li>
        <li>
          <a className={styles.cta} href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
