import { useState, useEffect, type RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface UseMousePositionProps {
  containerRef: RefObject<HTMLElement | null>;
  enabled?: boolean;
  onMouseMove?: (position: MousePosition) => void;
}

const useMousePosition = ({
  containerRef,
  enabled = true,
  onMouseMove,
}: UseMousePositionProps): { isInside: boolean } => {
  const [isInside, setIsInside] = useState(false);
  useEffect(() => {
    // Detect if the user has a fine pointer, use to know if he is on a touch device or not
    const hasFinPointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinPointer || !enabled || !containerRef.current) return;
    const container = containerRef.current;

    const onMousePositionChange = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      onMouseMove?.({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const onMouseEnter = () => {
      setIsInside(true);
    };

    const onMouseLeave = () => {
      setIsInside(false);
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mousemove", onMousePositionChange, {
      passive: true,
    });

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mousemove", onMousePositionChange);
    };
  }, [containerRef, enabled, onMouseMove]);

  return {
    isInside,
  };
};

export default useMousePosition;
