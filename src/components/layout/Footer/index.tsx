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

            <a href="#">
              <FaLinkedin size={24} />
              <span>Linkedin</span>
            </a>
            <a href="#">
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
