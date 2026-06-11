import { TransitionLink } from "@/components/layout/PageTransition";
import styles from "./tmplt-mail.module.scss";

export default function TemplateEmailGen() {
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
            <h1>EmailGen - Générateur de templates email IA</h1>
          </div>
          <p className={styles.intro}>
            Un éditeur de templates email assisté par Claude. Décrivez votre
            email en langage naturel, affinez les textes depuis le panneau
            latéral ou via le chat, et obtenez un composant React Email compilé
            en temps réel. Sous le capot : un agent IA opérant sur un système de
            fichiers virtuel, un pipeline esbuild en mémoire, et une extraction
            automatique des champs éditables depuis le JSX généré.
          </p>
          <div className={styles.ctas}>
            <a
              href="https://github.com/HRulier/tmplt-email"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaBtn} ${styles.primary}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Voir sur GitHub
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
                  "Next.js 16",
                  "TypeScript strict",
                  "Vercel AI SDK v6",
                  "Anthropic Claude",
                  "MongoDB",
                  "Mongoose 9",
                  "better-auth v1.6",
                  "esbuild",
                  "Resend",
                  "AES-256-GCM",
                  "Zod",
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
                  "CSS Modules",
                  "@react-email/components",
                  "@react-email/render",
                  "react-hook-form",
                  "Google Fonts API",
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

      {/* FEATURE PRINCIPALE */}
      <section className={styles.featureSection}>
        <div className={styles.content}>
          <div className={styles.featureHeader}>
            <h2 className={styles.featureTitle}>
              Un agent IA qui opère sur du vrai code — pas sur du texte
            </h2>
            <p className={styles.featureSubtitle}>
              Claude ne génère pas du code dans une zone de texte. Il utilise
              des outils structurés pour modifier précisément les fichiers
              d&apos;un système de fichiers virtuel, comme un développeur qui
              appliquerait des diffs.
            </p>
          </div>

          <div className={styles.featureBlock}>
            <h3>Le contexte</h3>
            <p>
              Créer un template email implique deux contraintes techniques
              fortes : les clients mail n&apos;acceptent que du HTML inline, et
              la moindre modification de texte ou de couleur nécessite de
              retoucher du code. L&apos;objectif était de rendre ce processus
              conversationnel, tout en garantissant un aperçu fidèle au rendu
              réel — pas une approximation.
            </p>
          </div>

          <div className={styles.featureBlock}>
            <h3>L&apos;approche</h3>
            <p>
              Le template vit dans un <strong>Virtual File System (VFS)</strong>{" "}
              en mémoire — une map de chemins vers du contenu, jamais écrite sur
              disque. <code>Email.tsx</code> est compilé à la demande par{" "}
              <strong>esbuild</strong> (en in-process, sans subprocess), puis
              rendu en HTML par <code>@react-email/render</code> et injecté dans
              un iframe. L&apos;aperçu est donc un vrai rendu React Email, pas
              une approximation.
            </p>
            <p>
              Côté IA, Claude dispose de quatre outils structurés :{" "}
              <code>str_replace</code> pour modifier précisément une portion de
              code (ciblage old → new, pas de réécriture complète),{" "}
              <code>file_manager</code> pour créer ou supprimer des fichiers
              dans le VFS, <code>extract_fields</code> pour scanner le JSX
              compilé à la recherche des attributs <code>data-field-id</code> et
              synchroniser le panneau d&apos;édition, et{" "}
              <code>set_template_name</code> appelé une seule fois à la
              génération initiale.
            </p>
          </div>

          <div className={styles.featureBlock}>
            <h3>
              Les champs éditables — extraction automatique depuis le code
            </h3>
            <p>
              Chaque zone de texte dans le template porte un attribut{" "}
              <code>data-field-id</code> kebab-case (ex.{" "}
              <code>data-field-id=&quot;hero-title&quot;</code>). Après chaque
              génération ou modification, Claude appelle{" "}
              <code>extract_fields</code>, qui compile le VFS, parse le HTML
              résultant et construit dynamiquement la liste des champs dans le
              panneau latéral. Les champs ne sont jamais hardcodés : ils
              émergent du code généré lui-même.
            </p>
          </div>

          <div className={styles.guaranteesGrid}>
            <div className={styles.guaranteeCard}>
              <h4>Précision</h4>
              <p>
                <code>str_replace</code> cible une portion exacte du fichier.
                Une modification d&apos;une couleur ne retouche pas le reste du
                template — le diff est chirurgical.
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <h4>Rendu fidèle</h4>
              <p>
                L&apos;aperçu passe par le même pipeline{" "}
                <code>@react-email/render</code> qu&apos;un envoi réel. Ce que
                vous voyez est exactement ce que recevra le destinataire.
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <h4>Champs dynamiques</h4>
              <p>
                Les <code>data-field-id</code> sont extraits du JSX généré à
                chaque tour. Ajouter un champ dans le code le fait apparaître
                automatiquement dans l&apos;UI.
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <h4>État persistant</h4>
              <p>
                VFS, historique de chat et valeurs des champs sont sauvegardés
                en MongoDB après chaque échange. Reprendre un template là où on
                l&apos;a laissé est natif.
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
              <h4>Pipeline de compilation</h4>
              <p>
                <code>VirtualFileSystem</code> (in-memory) →{" "}
                <code>esbuild</code> (bundle en mémoire, résolution des imports{" "}
                <code>@react-email/components</code>) →{" "}
                <code>@react-email/render</code> → HTML injecté dans un iframe.
                Aucune écriture disque, latence minimale.
              </p>
            </div>
            <div className={styles.technicalBlock}>
              <h4>TemplateContext</h4>
              <p>
                Un contexte React unique partage le VFS, les messages du chat,
                les champs et leurs valeurs entre <code>ChatPanel</code>,{" "}
                <code>Workspace</code> et <code>FieldEditorSidebar</code>. Les
                mutations passent toutes par ce contexte, qui déclenche la
                recompilation à la demande.
              </p>
            </div>
            <div className={styles.technicalBlock}>
              <h4>Model router</h4>
              <p>
                Un routeur inspecte chaque message avant de l&apos;envoyer à
                Claude et sélectionne automatiquement le modèle adapté à la
                complexité de la demande — génération initiale, édition ciblée,
                ou simple réponse textuelle.
              </p>
            </div>
            <div className={styles.technicalBlock}>
              <h4>Streaming AI</h4>
              <p>
                Les réponses de Claude sont streamées via{" "}
                <code>createUIMessageStream</code> (Vercel AI SDK v6). Les
                appels d&apos;outils (<code>tool-invocation</code>) apparaissent
                en temps réel dans le chat sous forme de badges, dédupliqués par
                nom d&apos;outil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÉCURITÉ */}
      <section className={styles.technicalSection}>
        <div className={styles.content}>
          <h2 className={styles.technicalTitle}>
            Sécurité et gestion des clés
          </h2>
          <div className={styles.technicalSingle}>
            <p>
              Les utilisateurs peuvent brancher leur propre clé Anthropic pour
              un usage illimité. La clé est chiffrée en{" "}
              <strong>AES-256-GCM</strong> avant stockage MongoDB avec le champ
              marqué <code>select: false</code> — elle n&apos;est jamais
              retournée dans les requêtes, jamais loggée, et déchiffrée
              uniquement dans le scope de la requête de génération. Sans clé
              personnelle, un quota de <strong>5 requêtes gratuites</strong> sur
              la clé serveur est appliqué via un compteur <code>$inc</code>{" "}
              atomique avant chaque stream (429 si dépassé). Les sessions sont
              gérées par <strong>better-auth</strong> avec cookie HttpOnly.
            </p>
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
                Évolutions envisagées
              </span>
            </div>
            <div className={styles.evolutionsGrid}>
              <div className={styles.evolutionItem}>
                <h4>Export multi-format</h4>
                <p>
                  Exporter le template compilé en HTML standalone ou en MJML
                  pour l&apos;intégrer directement dans un ESP (Mailchimp,
                  Brevo, Sendgrid) sans passer par Resend.
                </p>
              </div>
              <div className={styles.evolutionItem}>
                <h4>Envoi de campagne</h4>
                <p>
                  Brancher Resend Broadcasts pour envoyer le template à une
                  liste d&apos;abonnés depuis l&apos;éditeur, avec
                  personnalisation des champs par destinataire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
