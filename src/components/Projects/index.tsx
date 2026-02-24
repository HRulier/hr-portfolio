"use client";
import { useEffect, useRef } from "react";
import { useStickyScroll } from "@/hooks/useStickyScroll";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import projects from "@/data/projects.json";
import styles from "./projects.module.scss";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
}

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progress = useStickyScroll(wrapperRef, 90);
  const { ref: intersectionRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({
      threshold: 0.55,
      triggerOnce: true,
    });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const scroll = (wrapper?.offsetWidth - content?.offsetWidth) * progress;
    content.style.transform = `translateX(${scroll}px)`;
  }, [progress]);

  return (
    <section className={styles.projects}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.sticky} ref={intersectionRef}>
          <div className={styles.content} ref={contentRef}>
            <div
              className={`${styles.header} ${isIntersecting ? styles.visible : ""}`}
            >
              <h2>Projets </h2>
            </div>

            {projects.map((project: Project) => (
              <article key={project.id} className={styles.project}>
                <div className={styles.image}>
                  <img src={project.image.src} alt={project.image.alt} />
                </div>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                <ul>
                  {project.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
