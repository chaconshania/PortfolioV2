"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Only plays when scrolled into view, pauses when out
function LazyVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}

type Project = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  tags: string[];
  title: string;
  description: string;
  width?: number;
  height?: number;
};

const projects: Project[] = [
  {
    id: "design",
    type: "image",
    src: "/play/Design.png",
    alt: "Design project",
    tags: ["Visual Design", "Typography", "Exploration"],
    title: "Design Explorations",
    description: "",
    width: 964,
    height: 1120,
  },
  {
    id: "dreamscape",
    type: "video",
    src: "/play/Scene-1 (4).mp4",
    alt: "Dreamscape Three.js",
    tags: ["Three.js", "3D", "Creative Coding"],
    title: "Dreamscape",
    description: "",
  },
  {
    id: "lifedes",
    type: "video",
    src: "/play/Lifedes_mockup.mp4",
    alt: "Lifedes mockup",
    tags: ["Web Design", "UI Concept"],
    title: "Lifedes",
    description: "",
  },
  {
    id: "fitmix",
    type: "image",
    src: "/play/FitMix.gif",
    alt: "FitMix app demo",
    tags: ["Mobile App Design", "UX/UI"],
    title: "FitMix",
    description: "",
    width: 1600,
    height: 1200,
  },
  {
    id: "game",
    type: "video",
    src: "/play/game.mp4",
    alt: "Game concept demo",
    tags: ["Game Concept", "Java", "Engineering"],
    title: "Game Concept",
    description: "",
  },
  {
    id: "unmutect",
    type: "image",
    src: "/play/UnmuteCT.png",
    alt: "UnmuteCT campaign",
    tags: ["Campaign Design", "Connecticut Secretary of State"],
    title: "UnmuteCT",
    description: "",
    width: 1024,
    height: 1018,
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const { id, type, src, alt, tags, width = 800, height = 600 } = project;

  return (
    <motion.div
      layoutId={`card-${id}`}
      onClick={onClick}
      className="break-inside-avoid group relative rounded-lg overflow-hidden h-auto cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {type === "image" && (
        <motion.div layoutId={`media-${id}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      )}
      {type === "video" && (
        <motion.div layoutId={`media-${id}`}>
          <LazyVideo src={src} className="w-full h-auto" />
        </motion.div>
      )}
      <div className="absolute top-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tags.map((tag, i) => (
          <span key={i} className="bg-black text-white text-sm px-4 py-2 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ExpandedCard({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { id, type, src, alt, tags, title, width = 800, height = 600 } = project;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Expanded card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <motion.div
          layoutId={`card-${id}`}
          className="relative bg-white rounded-2xl overflow-hidden w-[680px] shadow-2xl pointer-events-auto flex flex-col"
        >
          {/* Media — top, full width */}
          <motion.div
            layoutId={`media-${id}`}
            className="w-full bg-neutral-100 overflow-hidden"
            style={{ height: 340 }}
          >
            {type === "image" ? (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-full object-cover"
              />
            ) : (
              <LazyVideo src={src} className="w-full h-full object-cover" />
            )}
          </motion.div>

          {/* Content — bottom */}
          <motion.div
            className="px-6 pt-5 pb-6 flex flex-col gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ delay: 0.12, duration: 0.25 }}
          >
            <h2 className="text-4xl font-bold italic text-[#1c1c1e] leading-none tracking-tight uppercase">
              {title}
            </h2>

            {/* Tags */}
            <div className="flex flex-col gap-0.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-[#888] uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Close button — last in DOM so it paints above everything */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#555] hover:bg-white transition-colors shadow-sm"
            style={{ zIndex: 100 }}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default function Playground() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <div>
      <div className="grid grid-cols-[minmax(24px,1fr)_minmax(0,900px)_minmax(24px,1fr)] md:grid-cols-[minmax(60px,1fr)_minmax(0,900px)_minmax(60px,1fr)] xl:grid-cols-[minmax(120px,1fr)_minmax(0,900px)_minmax(120px,1fr)] w-full">
        <div className="col-start-1" />
        <section className="col-start-2 pt-20 lg:pt-16 pb-6">
          <h1 className="text-3xl lg:text-4xl text-[#333333] leading-[1.12]">
            My{" "}
            <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">
              lab of curiosity
            </span>{" "}
            where I tinker, break, and build anything that sparks an idea.
          </h1>
        </section>
        <div className="col-start-3" />
      </div>

      <main className="px-6 pb-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selected && (
          <ExpandedCard
            project={selected}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
