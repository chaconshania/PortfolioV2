"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const CARD_W = 210;
const CARD_H = 148;

const activities = [
  {
    name: "Blueberry Social",
    role: "Design Engineer",
    tags: ["Product", "Shipped"],
    date: "Mar 2025",
    href: "/blueberry",
    image: "/homepage/Blueberry.png",
  },
  {
    name: "Jetzy",
    role: "Product Designer",
    tags: ["Travel", "UX"],
    date: "Jan 2026",
    href: "/works/jetzy",
    image: "/jetzy/Jetzy.png",
  },
  {
    name: "Art of the Roll",
    role: "Brand Designer",
    tags: ["Branding", "Art"],
    date: "Oct 2025",
    href: "/artoftheroll",
    image: "/homepage/artoftheroll.png",
  },
  {
    name: "Oasis XR",
    role: "UX Designer",
    tags: ["XR", "Award"],
    date: "Apr 2025",
    href: "/works/oasisxr",
    image: "/homepage/oasisxr.png",
  },
  {
    name: "UCONN DMD Exhibition",
    role: "Exhibitor",
    tags: ["Education"],
    date: "May 2025",
    href: "#",
    image: "/me/dmd-frens.JPG",
  },
  {
    name: "ArtsWestchester",
    role: "Web Designer",
    tags: ["Web", "Nonprofit"],
    date: "Feb 2025",
    href: "/works/artsw",
    image: "/artsw/Wallflowers.png",
  },
];

export function RecentActivities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 500, damping: 40 });
  const y = useSpring(rawY, { stiffness: 500, damping: 40 });

  const handleMouseEnter = (e: React.MouseEvent, i: number) => {
    // Seed position before the card mounts so it doesn't snap from (0,0)
    rawX.set(e.clientX + 20);
    rawY.set(e.clientY - CARD_H / 2);
    setHoveredIndex(i);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    rawX.set(e.clientX + 20);
    rawY.set(e.clientY - CARD_H / 2);
  };

  return (
    <section className="flex flex-col gap-4">
      {/* Cursor-following image card */}
      <AnimatePresence>
        {hoveredIndex !== null && !prefersReducedMotion && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[200] rounded-xl overflow-hidden"
            style={{
              x,
              y,
              width: CARD_W,
              height: CARD_H,
              willChange: "transform, opacity, filter",
              boxShadow:
                "0 0 0 0.5px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)",
            }}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
            transition={{ type: "spring", duration: 0.25, bounce: 0 }}
          >
            <Image
              src={activities[hoveredIndex].image}
              alt={activities[hoveredIndex].name}
              fill
              className="object-cover"
              style={{ outline: "none" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section label */}
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#333333]">
        Recent Activities
      </h2>

      {/* List */}
      <div className="flex-1">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.name}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.055 }}
          >
            <Link
              href={activity.href}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
              onMouseEnter={(e) => handleMouseEnter(e, i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="grid items-center py-3 gap-x-6 mono
                  [grid-template-columns:16px_1fr_16px]
                  sm:[grid-template-columns:16px_1fr_140px_88px_16px]
                  md:[grid-template-columns:16px_1fr_140px_184px_88px_16px]"
                animate={{
                  opacity:
                    hoveredIndex !== null && hoveredIndex !== i ? 0.35 : 1,
                }}
                transition={{ duration: 0.15 }}
              >
                {/* File icon */}
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  className="text-[#aaaaaa]"
                  aria-hidden
                >
                  <path
                    d="M1.5 1.5h6l3 3v9h-9v-12z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 1.5v3h3"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Name */}
                <span className="text-sm text-[#333333] truncate">
                  {activity.name}
                </span>

                {/* Role — hidden on mobile, occupies col 3 on sm+ */}
                <span className="hidden sm:block text-sm mono truncate">
                  {activity.role}
                </span>

                {/* Tags — hidden below md, occupies col 4 on md+ */}
                <div className="hidden md:flex gap-1.5">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-[#ddd] rounded-full px-2.5 py-0.5 text-[#6f6f6f] leading-tight whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date — hidden on mobile */}
                <span className="hidden sm:block text-sm mono tabular text-right">
                  {activity.date}
                </span>

                {/* Arrow */}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="text-[#aaaaaa] justify-self-end"
                  aria-hidden
                >
                  <path
                    d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
