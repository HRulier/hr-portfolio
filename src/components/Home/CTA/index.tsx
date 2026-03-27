"use client";

import { useEffect, useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import { TransitionLink } from "@/components/layout/PageTransition";
import styles from "./cta.module.scss";

// const LERP = 0.12;
// const OFFSET = 5;

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const isInsideRef = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { isInside } = useMousePosition({
    containerRef,
    onMouseMove: ({ x, y }) => {
      mouseRef.current = { x, y };
    },
  });

  const getDotCenter = () => {
    const d = dotRef.current?.getBoundingClientRect();
    const c = containerRef.current?.getBoundingClientRect();
    if (!d || !c) return { x: 0, y: 0 };

    return {
      x: d.left + d.width / 2 - c.left || 0,
      y: d.top + d.height / 2 - c.top || 0,
    };
  };

  useEffect(() => {
    isInsideRef.current = isInside;
  }, [isInside]);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const position = {
      x: 0,
      y: 0,
    };

    let dotCenter = getDotCenter();

    const animate = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;

      // define the target position

      let targetX = mouseX;
      let targetY = mouseY;

      if (!isInsideRef.current) {
        targetX = dotCenter.x;
        targetY = dotCenter.y;
      }

      //

      const dist = {
        x: targetX - dotCenter.x,
        y: targetY - dotCenter.y,
      };

      const currentDist = {
        x: dist.x - position.x,
        y: dist.y - position.y,
      };

      position.x += currentDist.x * 0.2;
      position.y += currentDist.y * 0.2;

      const t = Math.min(Math.abs(currentDist.x), 100) / 100;
      const k = isInsideRef.current ? 0.5 + t * 0.7 : 1;

      if (
        !isInsideRef.current &&
        Math.abs(position.x) < 0.5 &&
        Math.abs(position.y) < 0.5
      ) {
        position.x = 0;
        position.y = 0;
        dot.style.transform = "";
      } else {
        dot.style.transform = `translate(${position.x}px, ${position.y}px) scale(${k}) `;
      }

      rafId = requestAnimationFrame(animate);
    };

    let rafId = requestAnimationFrame(animate);
    const onResize = () => {
      dotCenter = getDotCenter();
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      // dot.style.transform = "translate(0px, 0px)";
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={styles.cta} ref={containerRef}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Travaillons ensemble
          <span className={styles.dot} ref={dotRef}>
            .
          </span>
        </h2>
        <p>Mon profil vous intéresse ?</p>
        <TransitionLink href="/contact" className={styles.btnCta}>
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </TransitionLink>
      </div>
    </section>
  );
}
