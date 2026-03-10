"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form-contact.module.scss";

const PLACEHOLDER_NAMES = [
  "Linus Torvalds", // Créateur du noyau Linux
  "Alan Turing", // Père de l'informatique théorique et de l'IA
  "Dennis Ritchie", // Créateur du langage C et co-créateur d'Unix
  "Ada Lovelace", // Première programmeuse de l'histoire (1840s)
  "Kevin Mitnick", // Hacker légendaire, ancien ennemi public n°1 du FBI
  "Grace Hopper", // Inventeure du compilateur et popularisatrice du terme "bug"
  "John Von Neumann", // Théoricien de l'architecture des ordinateurs modernes
  "Tim Berners-Lee", // Inventeur du World Wide Web
];

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const SUBMIT_ERRORS: Record<number, string> = {
  400: "Données invalides, veuillez vérifier vos informations.",
  429: "Trop de tentatives. Réessayez dans une heure.",
  500: "Une erreur est survenue côté serveur. Réessayez plus tard.",
};

export default function FormContact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [namePlaceholder] = useState(
    () =>
      PLACEHOLDER_NAMES[Math.floor(Math.random() * PLACEHOLDER_NAMES.length)],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const onSubmit = async () => {
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const [name, email, message] = getValues(["name", "email", "message"]);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        setSubmitError(
          SUBMIT_ERRORS[response.status] ?? "Une erreur inattendue est survenue.",
        );
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Impossible de contacter le serveur. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError(null);
    reset();
  };

  return (
    <div
      className={`${styles.terminal}${isSuccess ? ` ${styles.success}` : ""}`}
    >
      {/* Header macOS */}
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>contact@hrdev.fr</span>
      </div>

      {/* Form */}
      <form
        className={styles.body}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Name */}
        <div className={styles.line}>
          <label className={styles.label} htmlFor="name">
            {"// Votre nom"}
          </label>
          <div className={styles.prompt}>
            <span className={styles.promptSymbol} aria-hidden="true">
              →
            </span>
            <span className={styles.cursor} aria-hidden="true" />
            <input
              id="name"
              type="text"
              className={styles.input}
              placeholder={namePlaceholder}
              autoComplete="name"
              {...register("name", {
                required: "Le nom est requis",
              })}
            />
          </div>
          {errors.name && (
            <span className={styles.error} role="alert">
              {`> error: ${errors.name.message}`}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={styles.line}>
          <label className={styles.label} htmlFor="email">
            {"// Votre email"}
          </label>
          <div className={styles.prompt}>
            <span className={styles.promptSymbol} aria-hidden="true">
              →
            </span>
            <span className={styles.cursor} aria-hidden="true" />
            <input
              id="email"
              type="text"
              className={styles.input}
              placeholder="email@exemple.com"
              autoComplete="email"
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format d'email invalide",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className={styles.error} role="alert">
              {`> error: ${errors.email.message}`}
            </span>
          )}
        </div>

        {/* Message */}
        <div className={styles.line}>
          <label className={styles.label} htmlFor="message">
            {"// Message"}
          </label>
          <div className={styles.prompt}>
            <span className={styles.promptSymbol} aria-hidden="true">
              →
            </span>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="..."
              {...register("message", {
                required: "Le message est requis",
                minLength: {
                  value: 10,
                  message: "Message trop court (10 caractères minimum)",
                },
              })}
            />
          </div>
          {errors.message && (
            <span className={styles.error} role="alert">
              {`> error: ${errors.message.message}`}
            </span>
          )}
        </div>

        {/* Submit */}
        <div className={styles.submit}>
          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            {!isSubmitting && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
          </button>
          {submitError && (
            <span className={styles.submitError} role="alert">
              {`> error: ${submitError}`}
            </span>
          )}
        </div>
      </form>

      {/* Success state */}
      <div className={styles.successPanel} aria-live="polite">
        <div className={styles.successIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Message envoyé !</h3>
        <p className={styles.successMessage}>Je vous réponds très vite.</p>
        <span className={styles.successCommand}>
          {"> return response.success"}
        </span>
        <button type="button" className={styles.btnReset} onClick={handleReset}>
          Envoyer un autre message
        </button>
      </div>
    </div>
  );
}
