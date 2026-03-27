import { useEffect, useState, RefObject } from "react";

export function useStickyScroll(
  wrapperRef: RefObject<HTMLElement | null>,
  navHeight: number = 80,
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = wrapperHeight - viewportHeight + navHeight;
      const scrolled = -rect.top + navHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, scrolled / scrollableDistance),
      );

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [wrapperRef, navHeight]);

  return progress;
}
