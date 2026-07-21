import { useCallback, useRef } from "react";

export function useHorizontalScroll<T extends HTMLElement = HTMLDivElement>() {
  const trackRef = useRef<T | null>(null);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const firstItem = track.firstElementChild as HTMLElement | null;
    if (!firstItem) return track.clientWidth;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    return firstItem.getBoundingClientRect().width + gap;
  }, []);

  const scrollPrev = useCallback(() => {
    trackRef.current?.scrollBy({ left: -getStep(), behavior: "smooth" });
  }, [getStep]);

  const scrollNext = useCallback(() => {
    trackRef.current?.scrollBy({ left: getStep(), behavior: "smooth" });
  }, [getStep]);

  return { trackRef, scrollPrev, scrollNext };
}
