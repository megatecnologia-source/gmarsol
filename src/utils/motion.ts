import { useEffect } from 'react';

/**
 * Initializes an IntersectionObserver to smoothly reveal elements with the .reveal-init class
 * as they enter the viewport during scrolling.
 *
 * Requirements met:
 * - Smooth entrance (fade-in + subtle vertical translation 16-20px).
 * - Elements never disappear when scrolling back up (unobserved on enter).
 * - Full prefers-reduced-motion support (immediately visible without motion).
 * - MutationObserver to automatically detect elements rendered conditionally (e.g. store filters).
 */
export function useScrollRevealObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fallback: If user prefers reduced motion or browser has no IntersectionObserver
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('.reveal-init').forEach((el) => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.08,
      }
    );

    // Initial observation
    document.querySelectorAll<HTMLElement>('.reveal-init').forEach((el) => {
      observer.observe(el);
    });

    // Observe dynamically mounted elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('reveal-init') && !node.classList.contains('reveal-visible')) {
              observer.observe(node);
            }
            node.querySelectorAll<HTMLElement>('.reveal-init:not(.reveal-visible)').forEach((child) => {
              observer.observe(child);
            });
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
