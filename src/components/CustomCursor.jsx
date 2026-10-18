"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/*
  Custom cursor: a small dot that follows the mouse instantly and a ring
  that trails behind it.

  - Over links and buttons the ring grows into a filled circle.
  - While the mouse button is down the ring shrinks a little.
  - Over inputs and textareas the custom cursor hides and the normal
    text cursor shows.
  - Add data-cursor="hide" to any element where you want the custom
    cursor to disappear (for example the project preview, which has its
    own "View" bubble).
  - It only runs on devices with a real mouse, and not when the visitor
    has "reduce motion" turned on.

  mix-blend-difference makes it visible on light, dark and red sections.
*/

const HOVER_TARGETS = "a, button, [role='button'], [data-cursor='hover']";
const TEXT_TARGETS = "input, textarea, select, [data-cursor='hide']";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasMouse || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const root = document.documentElement;

    root.classList.add("has-custom-cursor");
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    let visible = false;
    let mode = "default"; // default | hover | hide
    let pressed = false;

    const apply = () => {
      const ringScale = mode === "hide" ? 0 : mode === "hover" ? 2 : 1;
      const dotScale = mode === "default" ? 1 : 0;

      gsap.to(ring, {
        scale: pressed && mode !== "hide" ? ringScale * 0.8 : ringScale,
        backgroundColor: mode === "hover" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsap.to(dot, {
        scale: dotScale,
        duration: 0.25,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onMove = (e) => {
      if (!visible) {
        visible = true;
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      let next = "default";
      if (target.closest(TEXT_TARGETS)) next = "hide";
      else if (target.closest(HOVER_TARGETS)) next = "hover";

      if (next !== mode) {
        mode = next;
        apply();
      }
    };

    const onDown = () => {
      pressed = true;
      apply();
    };
    const onUp = () => {
      pressed = false;
      apply();
    };
    const onLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      visible = false;
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      gsap.killTweensOf([dot, ring]);
      root.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-white opacity-0 mix-blend-difference"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white opacity-0 mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;