import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>HUGO RULIER.DEV</div>
      <ul>
        <li>
          <a href="#">Projets</a>
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
