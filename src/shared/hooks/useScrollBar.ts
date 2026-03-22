import { useRef, useState, useEffect } from "react";

export const useScrollBottom = (dependency?: unknown) => {
  const ref = useRef<HTMLElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const threshold = 20;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
      setIsAtBottom(atBottom);
    };

    handleScroll();

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [dependency]);

  return { ref, isAtBottom };
};