"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface GridItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  backgroundColor?: string;
  unoptimized?: boolean;
  quality?: number;
}

interface AnimatedGridProps {
  items: GridItem[];
}

export default function AnimatedGrid({ items }: AnimatedGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  // Column 1 (left): moves up
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // Column 2 (middle): moves down
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  // Column 3 (right): moves up
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Determine which transform to use based on index
  const getTransform = (index: number) => {
    const column = index % 3;
    if (column === 0) return y1;
    if (column === 1) return y2;
    return y3;
  };

  const CardContent = ({ item }: { item: GridItem }) => (
    <div className="relative w-full aspect-square">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-contain"
        unoptimized={item.unoptimized}
        quality={item.quality}
      />
    </div>
  );

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => {
        const card = (
          <motion.div
            key={index}
            style={{
              y: getTransform(index),
              backgroundColor: item.backgroundColor || '#F8F8F8'
            }}
            className="group rounded-xl overflow-hidden py-2"
          >
            <CardContent item={item} />
          </motion.div>
        );

        if (item.link) {
          return (
            <Link key={index} href={item.link}>
              {card}
            </Link>
          );
        }

        return card;
      })}
    </div>
  );
}
