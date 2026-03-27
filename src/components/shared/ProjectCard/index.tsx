import Image from "next/image";
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
}

const ProjectCard = ({ project }: { project: Project }) => (
  <article key={project.id} className={styles.project}>
    <div className={styles.image}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={800}
        height={300}
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
  </article>
);

export default ProjectCard;
