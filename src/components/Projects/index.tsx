"use client";
import { useRef } from "react";
import { useStickyScroll } from "@/hooks/useStickyScroll";
import styles from "./projects.module.scss";

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progress = useStickyScroll(wrapperRef, 90);

  return (
    <section className={styles.projects}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.sticky}>
          <div className={styles.header}>
            <h2>Projets </h2>
            <p>{progress * 100}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
