"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./stack.module.scss";

const skills = [
  {
    name: "TypeScript",
    category: "Langage",
  },
  {
    name: "ReactJs",
    category: "Framework",
  },
  {
    name: "NextJs",
    category: "Framework",
  },
  {
    name: "React Query & Context API",
    category: "State Management",
  },
  {
    name: "Node.js & Express",
    category: "BACKEND",
  },
  {
    name: "API REST & Mongoose",
    category: "BACKEND",
  },
  {
    name: "MongoDB",
    category: "Database",
  },
  {
    name: "Sass",
    category: "Styling",
  },
  {
    name: "Intégration Pixel-Perfect",
    category: "UI",
  },
  {
    name: "Zod & Swagger (zod-to-openapi)",
    category: "Documentation",
  },
  {
    name: "Jest",
    category: "Testing",
  },
  {
    name: "Websocket",
    category: "Temps réél",
  },
];

const Skill = ({ name, category }: { name: string; category: string }) => {
  const { ref: skillRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({
      threshold: 1.0,
      rootMargin: "-30px 0px -30px 0px",
      triggerOnce: true,
    });

  return (
    <li className={`${styles.skill} ${isIntersecting ? styles.visible : ""}`}>
      <div ref={skillRef}>
        <span className={styles.name}>{name}</span>
        <span className={styles.category}>{category}</span>
      </div>
    </li>
  );
};

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Stack technique</h2>
        </div>
        <div>
          <div className={styles.description}>
            <p>
              Expertise complète sur la stack MERN avec une attention
              particulière pour les performances, l&apos;architecture scalable
              et l&apos;expérience utilisateur.
            </p>
            <p>
              Intégration pixel-perfect, documentation API et déploiement
              automatisé.
            </p>
            <div className={styles.badge}>
              <span className={styles.number}>9+</span>
              <span>ANNÉES D&apos;EXPÉRIENCE</span>
            </div>
          </div>
          <div className={styles.skills}>
            <ul>
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  category={skill.category}
                />
              ))}
            </ul>
            {/* <div className="skill-item">
              <span className="skill-name">TypeScript</span>
              <span className="skill-category">Langage</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">ReactJS</span>
              <span className="skill-category">Frontend</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Tanstack Query & Context API</span>
              <span className="skill-category">State Management</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">NextJS</span>
              <span className="skill-category">Framework</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Websocket</span>
              <span className="skill-category">Temps réel</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Intégration Pixel-Perfect</span>
              <span className="skill-category">UI/UX</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">SASS</span>
              <span className="skill-category">Styling</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">MongoDB</span>
              <span className="skill-category">Database</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">PostgreSQL & Sequelize</span>
              <span className="skill-category">Database</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Node.js & Express</span>
              <span className="skill-category">Backend</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">API REST & Mongoose</span>
              <span className="skill-category">Backend</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Jest</span>
              <span className="skill-category">Testing</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Zod & Swagger</span>
              <span className="skill-category">Documentation</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
