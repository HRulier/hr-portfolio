import projects from "@/data/projects.json";
import ProjectCard from "@/components/shared/ProjectCard";
import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.pageProjects}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.line}>
            <h1>
              Projets<span className={styles.dot}>.</span>
            </h1>
          </div>
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.content}>
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
