"use client";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";
import styles from "./footer.module.scss";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={styles.footer}>
      <div>
        <p>© 2026 Hugo Rulier</p>
        {pathname !== "/contact" && (
          <div className={styles.contactLinks}>
            <label>Retrouvez-moi</label>

            <a href="https://www.linkedin.com/in/hugo-rulier/">
              <FaLinkedin size={24} />
              <span>Linkedin</span>
            </a>
            <a href="https://github.com/HRulier">
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
