"use client";

import styles from "./header.module.scss";
import { TransitionLink } from "@/components/PageTransition";

const Header = () => {
  return (
    <nav className={styles.header}>
      <TransitionLink href="/">
        <div className={styles.logo}>
          HUGO RULIER<span className={styles.dot}>.</span>DEV
        </div>
      </TransitionLink>
      <ul>
        <li>
          <TransitionLink href="/projects">Projets</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/#stack">Compétences</TransitionLink>
        </li>
        <li className={styles.cta}>
          <TransitionLink href="/contact">Contact</TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
