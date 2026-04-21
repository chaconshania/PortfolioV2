"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const OPEN_DELAY_MS = 120;
const CLOSE_DELAY_MS = 130;

function useHoverCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement | null>(null);
  const openTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearOpen = useCallback(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current);
      openTimeout.current = null;
    }
  }, []);

  const clearClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const setTriggerRef = useCallback((el: HTMLElement | null) => {
    triggerRef.current = el;
  }, []);

  const openImmediately = useCallback(() => {
    clearOpen();
    clearClose();
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({ top: rect.top - 8, left: rect.left + rect.width / 2 });
    }
    setIsOpen(true);
  }, [clearOpen, clearClose]);

  const openWithDelay = useCallback(() => {
    clearOpen();
    openTimeout.current = setTimeout(() => {
      openImmediately();
      openTimeout.current = null;
    }, OPEN_DELAY_MS);
  }, [clearOpen, openImmediately]);

  const close = useCallback(() => {
    clearOpen();
    clearClose();
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeout.current = null;
    }, CLOSE_DELAY_MS);
  }, [clearOpen, clearClose]);

  useEffect(() => {
    if (!isOpen) return;
    const onScroll = () => {
      clearClose();
      setIsOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, clearClose]);

  useEffect(
    () => () => {
      clearOpen();
      clearClose();
    },
    [clearOpen, clearClose],
  );

  return { isOpen, pos, setTriggerRef, openWithDelay, openImmediately, close };
}

const POSTERS = [
  { src: "/movies/chainsaw-man.jpg", alt: "Chainsaw Man" },
  { src: "/movies/funny-games.jpg", alt: "Funny Games" },
  { src: "/movies/perfect-blue.jpg", alt: "Perfect Blue" },
  { src: "/movies/get-out-movie-poster.jpg", alt: "Get Out" },
];

function PosterStack({
  isOpen,
  pos,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean;
  pos: { top: number; left: number };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return createPortal(
    <div
      className={`movie-poster-container${isOpen ? " movie-poster-container-open" : ""}`}
      style={{ top: pos.top, left: pos.left }}
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="movie-poster-stack">
        {POSTERS.map((poster, i) => (
          <div
            key={poster.src}
            className={`movie-poster-card${i === 0 ? " movie-poster-card-first" : ""}`}
            style={{ "--poster-delay": `${i * 40}ms` } as React.CSSProperties}
          >
            <Image
              src={poster.src}
              alt={poster.alt}
              className="movie-poster-img"
              width={64}
              height={96}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>,
    document.body,
  );
}

export function MoviePosterTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { isOpen, pos, setTriggerRef, openWithDelay, openImmediately, close } =
    useHoverCard();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <span
        ref={(el) => setTriggerRef(el)}
        onMouseEnter={openWithDelay}
        onMouseLeave={close}
        onFocus={openImmediately}
        onBlur={close}
        style={{ display: "inline", cursor: "pointer" }}
      >
        {children}
      </span>
      {mounted && (
        <PosterStack
          isOpen={isOpen}
          pos={pos}
          onMouseEnter={openImmediately}
          onMouseLeave={close}
        />
      )}
    </>
  );
}
