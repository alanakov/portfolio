import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(onOutsideClick: () => void, isActive = true) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!isActive) return;

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, onOutsideClick]);

  return ref;
}
