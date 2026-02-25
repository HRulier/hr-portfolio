"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  startTransition,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./pageTransition.module.scss";

type Phase = "idle" | "covering" | "navigating" | "uncovering";

const EASE = [0.16, 1, 0.3, 1] as const; // matches $ease-smooth

const overlayVariants = {
  idle: { y: "100%", transition: { duration: 0 } },
  covering: { y: "0%", transition: { duration: 0.7, ease: EASE } },
  navigating: { y: "0%", transition: { duration: 0 } },
  uncovering: { y: "-100%", transition: { duration: 0.7, ease: EASE } },
};

const overlayVariants2 = {
  idle: { y: "100%", transition: { duration: 0, delay: 0.3 } },
  covering: { y: "0%", transition: { duration: 0.7, delay: 0.3, ease: EASE } },
  navigating: { y: "0%", transition: { duration: 0, delay: 0.3 } },
  uncovering: {
    y: "-100%",
    transition: { duration: 0.7, delay: 0, ease: EASE },
  },
};

interface TransitionContextValue {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingHref = useRef<string | null>(null);

  const navigate = (href: string) => {
    if (phase !== "idle" || pathname === href) return;
    pendingHref.current = href;
    setPhase("covering");
  };

  // Start uncovering once Next.js has rendered the new page
  useEffect(() => {
    if (phase === "navigating" && pathname === pendingHref.current) {
      startTransition(() => setPhase("uncovering"));
    }
  }, [pathname, phase]);

  const handleAnimationComplete = (definition: unknown) => {
    if (definition === "covering") {
      router.push(pendingHref.current!);
      setPhase("navigating");
    } else if (definition === "uncovering") {
      pendingHref.current = null;
      setPhase("idle");
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <motion.div
        className={styles.overlay}
        variants={overlayVariants}
        initial="idle"
        animate={phase}
        // onAnimationComplete={handleAnimationComplete}
      />
      <motion.div
        className={`${styles.overlay} ${styles.overlay2}`}
        variants={overlayVariants2}
        initial="idle"
        animate={phase}
        onAnimationComplete={handleAnimationComplete}
      />
    </TransitionContext.Provider>
  );
}

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
