import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>HUGO RULIER.DEV</div>
      </Link>
      <ul>
        <li>
          <Link href="projects">Projets</Link>
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
