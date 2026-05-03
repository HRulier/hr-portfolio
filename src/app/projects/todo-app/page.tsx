import { TransitionLink } from "@/components/layout/PageTransition";
import styles from "./todo-app.module.scss";

export default function TodoApp() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <TransitionLink href="/projects" className={styles.backLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Retour aux projets
          </TransitionLink>
          <span className={styles.tag}>Projet personnel</span>
          <div className={styles.title}>
            <h1>Todo App - augmenté par l&apos;IA</h1>
          </div>
          <p className={styles.intro}>
            Un gestionnaire de tâches, oui — mais surtout un projet conçu pour
            montrer comment je construis une application de bout en bout : API
            typée et documentée, authentification multi-stratégies, pipeline
            CI/CD conteneurisé, et une intégration Slack pilotée par IA qui
            permet de créer des tâches en langage naturel.
          </p>
          <div className={styles.ctas}>
            <a
              href="https://todo-app.loopness.fr/signin"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaBtn} ${styles.primary}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Voir l&apos;application
            </a>
            <a
              href="https://api.todo-app.loopness.fr/api-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Documentation API
            </a>
            <a
              href="https://github.com/HRulier/todo-web-front"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Front-end
            </a>
            <a
              href="https://github.com/HRulier/todo-api"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub API
            </a>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className={styles.stackSection}>
        <div className={styles.content}>
          <span className={styles.sectionLabel}>Stack technique</span>
          <div className={styles.stackGrid}>
            <div className={styles.stackColumn}>
              <h3>Back-end</h3>
              <div className={styles.tagsList}>
                {[
                  "Node.js v22",
                  "TypeScript 5.7",
                  "Express 4",
                  "MongoDB",
                  "Mongoose 8",
                  "Passport.js",
                  "Zod 3",
                  "Swagger UI",
                  "Jest",
                  "Supertest",
                  "Resend",
                  "React Email",
                  "Docker",
                  "GitHub Actions",
                ].map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.stackColumn}>
              <h3>Front-end</h3>
              <div className={styles.tagsList}>
                {[
                  "React 19",
                  "TypeScript",
                  "Vite + SWC",
                  "React Router v7",
                  "TanStack Query v5",
                  "React Hook Form",
                  "Axios",
                  "SCSS Modules",
                  "Motion",
                  "ESLint",
                  "Prettier",
                  "Docker",
                  "GitHub Actions",
                ].map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLACK / IA FEATURE */}
      <section className={styles.featureSection}>
        <div className={styles.content}>
          <div className={styles.featureHeader}>
            <h2 className={styles.featureTitle}>
              Création de tâches depuis Slack — agent IA + système
              d&apos;approbation
            </h2>
            <p className={styles.featureSubtitle}>
              Permettre à un utilisateur de créer des tâches en langage naturel
              directement depuis Slack, sans ouvrir l&apos;application.
            </p>
          </div>

          <div className={styles.featureBlock}>
            <h3>L&apos;idée</h3>
            <p>
              Un message comme{" "}
              <em>
                « J&apos;aimerais cuisiner une carbonara dimanche, peux-tu me
                créer une tâche pour aller faire les courses demain et une pour
                penser à sortir une bouteille de vin avant le repas »
              </em>{" "}
              génère automatiquement les bonnes tâches aux bonnes dates.
            </p>
          </div>

          <div className={styles.featureBlock}>
            <h3>Comment ça marche</h3>
            <p>
              Le workflow est orchestré par <strong>n8n</strong>, un outil
              d&apos;automatisation open-source. Le choix de n8n plutôt
              qu&apos;un script maison est délibéré : n8n permet de brancher
              facilement d&apos;autres sources de messagerie (Discord, Teams,
              webhook générique) sans réécrire la logique d&apos;orchestration.
            </p>
            <p>
              Quand un utilisateur envoie un message dans Slack, n8n le
              réceptionne et le soumet d&apos;abord à une IA qui modère le
              contenu. Si le message est valide, l&apos;IA le parse pour en
              extraire les tâches pertinentes avec leurs dates. n8n envoie
              ensuite ces tâches à l&apos;API sous forme d&apos;opération en
              attente, et un message récapitulatif est posté dans Slack avec des
              boutons Approve / Deny.
            </p>
          </div>

          <div className={styles.featureBlock}>
            <h3>Architecture technique — le modèle Operation</h3>
            <p>
              Plutôt que d&apos;exposer directement l&apos;endpoint de création
              de tâches aux systèmes externes, l&apos;API utilise un modèle
              intermédiaire <code>Operation</code>. Chaque opération est stockée
              avec un statut <code>pending</code> et ne produit aucun effet tant
              qu&apos;elle n&apos;est pas explicitement approuvée.
            </p>
          </div>

          <div className={styles.guaranteesGrid}>
            <div className={styles.guaranteeCard}>
              <h4>Sécurité</h4>
              <p>
                Endpoints protégés par API Key (<code>X-API-Key</code>), séparés
                des endpoints utilisateur. Payload validé contre le schéma{" "}
                <code>CreateTaskSchema</code> dès l&apos;ingestion.
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <h4>Non-rejouabilité</h4>
              <p>
                L&apos;approbation utilise{" "}
                <code>
                  findOneAndUpdate(&#123; shortId, status: &quot;pending&quot;
                  &#125;)
                </code>
                . Une opération déjà traitée ne peut pas être rejouée.
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <h4>Traçabilité</h4>
              <p>
                Chaque opération conserve l&apos;intégralité du contexte :
                source, canal, utilisateur, horodatage, payload original.
                L&apos;audit est natif.
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <h4>Extensibilité</h4>
              <p>
                Ajouter une nouvelle source (Discord, Teams) se résume à
                enrichir l&apos;enum <code>source</code> et brancher un nouveau
                workflow n8n.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className={styles.technicalSection}>
        <div className={styles.content}>
          <h2 className={styles.technicalTitle}>Architecture</h2>
          <div className={styles.technicalGrid}>
            <div className={styles.technicalBlock}>
              <h4>API</h4>
              <p>
                Architecture en couches stricte (routes → controllers → services
                → models). Les schémas Zod assurent validation des requêtes et
                génération automatique de la documentation OpenAPI. Endpoints
                couverts par tests d&apos;intégration.
              </p>
            </div>
            <div className={styles.technicalBlock}>
              <h4>Client</h4>
              <p>
                Même logique de séparation : fonctions HTTP pures (
                <code>src/api/</code>), wrappées par des hooks TanStack Query
                pour le cache et l&apos;invalidation, consommées par les
                composants sans couplage au transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÉCURITÉ */}
      <section className={styles.technicalSection}>
        <div className={styles.content}>
          <h2 className={styles.technicalTitle}>
            Sécurité et authentification
          </h2>
          <div className={styles.technicalSingle}>
            <p>
              Quatre stratégies Passport.js (email/mot de passe, Google OAuth2,
              Slack OAuth2), access tokens JWT en Bearer, refresh tokens en
              cookie HttpOnly (Secure + SameSite), protection CSRF via state
              OAuth encodé en base64url, rate limiting sur les endpoints
              sensibles, et hiérarchie d&apos;erreurs typées avec handler
              centralisé.
            </p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className={styles.technicalSection}>
        <div className={styles.content}>
          <h2 className={styles.technicalTitle}>Infrastructure et outillage</h2>
          <div className={styles.technicalGrid}>
            <div className={styles.technicalBlock}>
              <h4>Emails</h4>
              <p>
                Templates React rendues côté serveur, envoyées via Resend,
                prévisualisables en développement avec{" "}
                <code>@react-email/preview-server</code>.
              </p>
            </div>
            <div className={styles.technicalBlock}>
              <h4>Déploiement</h4>
              <p>
                Docker multi-stage (image allégée, utilisateur non-root), CI/CD
                GitHub Actions via SSH, reverse proxy Nginx avec SSL sur VPS
                Ubuntu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉVOLUTIONS */}
      <section className={styles.evolutionsSection}>
        <div className={styles.content}>
          <div className={styles.evolutionsWrapper}>
            <div className={styles.evolutionsHeader}>
              <svg
                className={styles.evolutionsIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className={styles.evolutionsTitle}>
                Évolutions en cours
              </span>
            </div>
            <div className={styles.evolutionsGrid}>
              <div className={styles.evolutionItem}>
                <h4>Serveur MCP</h4>
                <p>
                  Exposer la gestion de tâches comme outils utilisables par les
                  assistants IA (Claude, ChatGPT), permettant de créer et
                  consulter ses tâches directement depuis une interface de chat.
                </p>
              </div>
              <div className={styles.evolutionItem}>
                <h4>Cluster MongoDB</h4>
                <p>
                  Migration vers un replica set pour activer les transactions et
                  garantir l&apos;atomicité des opérations composées (ex.
                  approbation bulk avec rollback en cas d&apos;erreur
                  partielle).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
