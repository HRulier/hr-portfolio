"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form-contact.module.scss";

type FormValues = {
  email: string;
  message: string;
};

export default function FormContact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const onSubmit = async () => {
    const [email, message] = getValues(["email", "message"]);
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });
    console.log(response.status);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
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
          <button type="submit" className={styles.btnSubmit}>
            Envoyer
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
          </button>
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
