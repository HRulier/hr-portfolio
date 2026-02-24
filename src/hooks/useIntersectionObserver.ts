"use client";
import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isIntersecting: boolean;
}

const useIntersectionObserver = <T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = "0px",
  triggerOnce = false,
}: UseIntersectionObserverProps): UseIntersectionObserverReturn<T> => {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const options = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (triggerOnce && entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        } else if (!triggerOnce) {
          setIsIntersecting(entry.isIntersecting);
        }
      });
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref,
    isIntersecting,
  };
};

export default useIntersectionObserver;
