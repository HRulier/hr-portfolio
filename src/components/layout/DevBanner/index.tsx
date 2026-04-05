"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./devBanner.module.scss";

const STORAGE_KEY = "dev-banner-dismissed";

export default function DevBanner() {
  const [visible, setVisible] = useState(false);
  const [shaking, setShaking] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!dismissed) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    intervalRef.current = setInterval(() => {
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    }, 7000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.banner} ${shaking ? styles.shake : ""}`}
        role="status"
        aria-live="polite"
      >
        <p className={styles.message}>Portfolio en cours de développement.</p>
        <button
          className={styles.close}
          onClick={dismiss}
          aria-label="Fermer le bandeau"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
