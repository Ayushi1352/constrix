"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Plays a soft fade-up on each page section (and the footer) the first time it scrolls into view.
 * Only sections that start below the screen are animated, so nothing visible on load ever blinks;
 * the server HTML is left untouched (no hidden state without JavaScript) and reduced motion skips it.
 * Sections are hidden by a paused animation, never by a style attribute, so a section that React has
 * not hydrated yet never differs from its server HTML.
 */
export const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveals = new Map<Element, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          reveals.get(entry.target)?.play();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    // Next frame: ScrollToTop has moved the window to the top of the new page by then.
    const frame = requestAnimationFrame(() => {
      const targets = [...document.querySelectorAll<HTMLElement>("main > *, body footer")].filter(
        (el) => el.getBoundingClientRect().top > window.innerHeight,
      );
      for (const el of targets) {
        // Paused on its first frame (fill: backwards), so the section waits hidden until it is played
        const reveal = el.animate(
          [
            { opacity: 0, translate: "0 2.5rem" },
            { opacity: 1, translate: "0 0" },
          ],
          { duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
        );
        reveal.pause();
        reveals.set(el, reveal);
        observer.observe(el);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      for (const reveal of reveals.values()) if (reveal.playState !== "finished") reveal.cancel();
    };
  }, [pathname]);

  return null;
};
