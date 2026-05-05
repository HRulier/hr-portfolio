"use client";

import Image from "next/image";
import { TransitionLink } from "@/components/layout/PageTransition";
import { RiArrowRightLongFill } from "react-icons/ri";
import styles from "./project-card.module.scss";

interface Project {
  id: number;
  featured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
    aiGenerated?: boolean;
  };
  href?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const article = (
    <article key={project.id} className={styles.project}>
      <div className={styles.image}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          // width={800}
          // height={300}
          fill
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
        {project.image.aiGenerated && (
          <span className={styles.aiLabel}>Illustration générée par IA</span>
        )}
      </div>
      <h3>{project.title}</h3>
      <h4>{project.subtitle}</h4>
      <p>{project.description}</p>
      <ul>
        {project.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      {project.href && (
        <p className={styles.detailLink}>
          Voir le projet{" "}
          <span className={styles.arrow}>
            <RiArrowRightLongFill />
          </span>
        </p>
      )}
    </article>
  );

  return project.href ? (
    <TransitionLink href={project.href}>{article}</TransitionLink>
  ) : (
    article
  );
};

export default ProjectCard;
