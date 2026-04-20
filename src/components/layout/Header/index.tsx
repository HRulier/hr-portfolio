"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdFileDownload } from "react-icons/md";
import styles from "./header.module.scss";
import { TransitionLink } from "@/components/layout/PageTransition";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.header}>
      {pathname === "/" ? (
        <Link href="/">
          <div className={styles.logo}>
            HUGO RULIER<span className={styles.dot}>.</span>DEV
          </div>
        </Link>
      ) : (
        <TransitionLink href="/">
          <div className={styles.logo}>
            HUGO RULIER<span className={styles.dot}>.</span>DEV
          </div>
        </TransitionLink>
      )}

      <ul>
        <li>
          <TransitionLink href="/projects">Projets</TransitionLink>
        </li>
        <li>
          {pathname === "/" ? (
            <Link href="/#stack">Compétences</Link>
          ) : (
            <TransitionLink href="/#stack">Compétences</TransitionLink>
          )}
        </li>
        <li>
          <a
            className={styles.download}
            href="documents/CV_Hugo_RULIER.pdf"
            download="CV_Hugo_RULIER.pdf"
          >
            <MdFileDownload size={24} />
            <span>CV</span>
          </a>
        </li>
        <li className={styles.cta}>
          <TransitionLink href="/contact">Contact</TransitionLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
