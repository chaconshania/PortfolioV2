"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "case-study";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const opacity = useMotionValue(0);
  const variantRef = useRef<CursorVariant>("default");
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOnCard, setIsOnCard] = useState(false);

  // Snappy cursor position — overdamped so no bounce
  const cursorX = useSpring(mouseX, { damping: 40, stiffness: 500, mass: 0.4 });
  const cursorY = useSpring(mouseY, { damping: 40, stiffness: 500, mass: 0.4 });

  // Pill expansion — overdamped (damping > 2√stiffness ≈ 34) so no oscillation
  const width = useSpring(12, { damping: 45, stiffness: 280 });
  const height = useSpring(12, { damping: 45, stiffness: 280 });
  const textOpacity = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      opacity.set(1);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-cursor="case-study"]');
      const next: CursorVariant = el ? "case-study" : "default";
      if (next === variantRef.current) return;
      variantRef.current = next;

      if (next === "case-study") {
        width.set(178);
        height.set(40);
        setIsOnCard(true);
        // Delay text reveal so it only appears once the pill is wide enough
        textTimerRef.current = setTimeout(() => textOpacity.set(1), 100);
      } else {
        // Cancel any pending text-reveal before it fires into a shrinking dot
        if (textTimerRef.current) {
          clearTimeout(textTimerRef.current);
          textTimerRef.current = null;
        }
        setIsOnCard(false);
        textOpacity.set(0);
        width.set(12);
        height.set(12);
      }
    };

    const onLeave = () => opacity.set(0);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
  }, [mouseX, mouseY, opacity, width, height, textOpacity]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center bg-[#1a1a1a] text-white overflow-hidden rounded-full"
        style={{ width, height }}
      >
        <motion.div
          className="absolute flex items-center gap-[6px] px-4 whitespace-nowrap"
          style={{ opacity: textOpacity }}
        >
          <EyeIcon isBlinking={isOnCard} />
          <span className="text-[11px] font-medium tracking-wide uppercase text-white" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
            View case study
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function EyeIcon({ isBlinking }: { isBlinking: boolean }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ originY: "50%" }}
      animate={isBlinking ? { scaleY: [1, 1, 0.05, 1, 1, 1, 1] } : { scaleY: 1 }}
      transition={
        isBlinking
          ? { duration: 3, times: [0, 0.25, 0.28, 0.33, 0.5, 0.75, 1], repeat: Infinity }
          : { duration: 0.1 }
      }
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </motion.svg>
  );
}
