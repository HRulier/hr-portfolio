"use client";
import { useEffect, useRef } from "react";
import { useStickyScroll } from "@/hooks/useStickyScroll";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import MoreProjects from "./MoreProjects";
import ProjectCard from "@/components/shared/ProjectCard";
import projects from "@/data/projects.json";
import styles from "./projects.module.scss";

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
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div className={styles.project} key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            <MoreProjects />
          </div>
        </div>
      </div>
    </section>
  );
}
