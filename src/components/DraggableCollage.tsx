"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CollageItem {
  id: string;
  type: "image" | "text";
  src?: string;
  alt?: string;
  text?: string;
  subtext?: string;
  width: number;
  height: number;
  ix: number; // initial x as fraction of container width
  iy: number; // initial y as fraction of container height
  rotation: number;
  polaroid?: boolean;
  rounded?: boolean;
  caption?: string;
  textStyle?: "sticker" | "quote";
}

interface Position {
  x: number;
  y: number;
}

const ITEMS: CollageItem[] = [
  {
    id: "1",
    type: "image",
    src: "/me/smile.jpeg",
    alt: "Smiling",
    width: 220,
    height: 260,
    ix: 0.02,
    iy: 0.06,
    rotation: -6,
    polaroid: true,
    caption: "always smiling :)",
  },
  {
    id: "2",
    type: "image",
    src: "/me/focus.jpeg",
    alt: "Focused",
    width: 210,
    height: 185,
    ix: 0.16,
    iy: 0.5,
    rotation: 4,
    polaroid: true,
    caption: "in my element",
  },
  {
    id: "3",
    type: "image",
    src: "/me/graduated.jpeg",
    alt: "Graduation",
    width: 240,
    height: 260,
    ix: 0.34,
    iy: 0.04,
    rotation: -3,
    polaroid: true,
    caption: "we made it!! ✨",
  },
  {
    id: "4",
    type: "image",
    src: "/me/renfaire.jpeg",
    alt: "Renaissance Faire",
    width: 210,
    height: 240,
    ix: 0.53,
    iy: 0.3,
    rotation: 7,
    polaroid: false,
  },
  {
    id: "5",
    type: "image",
    src: "/me/me-friends.JPG",
    alt: "With friends",
    width: 255,
    height: 210,
    ix: 0.72,
    iy: 0.03,
    rotation: -5,
    polaroid: true,
    caption: "my people",
  },
  {
    id: "6",
    type: "image",
    src: "/me/dmd-frens.JPG",
    alt: "DMD friends",
    width: 245,
    height: 200,
    ix: 0.73,
    iy: 0.5,
    rotation: 4,
    polaroid: true,
    caption: "dmd!!",
  },
  {
    id: "7",
    type: "image",
    src: "/me/me-standing.JPG",
    alt: "Standing portrait",
    width: 195,
    height: 255,
    ix: 0.44,
    iy: 0.44,
    rotation: -8,
    polaroid: false,
  },
  {
    id: "8",
    type: "image",
    src: "/blueberry/group-picture.JPG",
    alt: "Blueberry team",
    width: 255,
    height: 195,
    ix: 0.08,
    iy: 0.54,
    rotation: 5,
    polaroid: true,
    caption: "Blueberry team",
  },
  {
    id: "claude",
    type: "image",
    src: "/me/claude-logo.png",
    alt: "Claude",
    width: 72,
    height: 72,
    ix: 0.29,
    iy: 0.72,
    rotation: -8,
    polaroid: false,
    rounded: true,
  },
  {
    id: "figma",
    type: "image",
    src: "/me/figma-logo.png",
    alt: "Figma",
    width: 64,
    height: 64,
    ix: 0.6,
    iy: 0.68,
    rotation: 6,
    polaroid: false,
    rounded: true,
  },
  {
    id: "illustrator",
    type: "image",
    src: "/me/illustrator-logo.jpeg",
    alt: "Illustrator",
    width: 68,
    height: 68,
    ix: 0.82,
    iy: 0.62,
    rotation: -5,
    polaroid: false,
    rounded: true,
  },
  {
    id: "9",
    type: "text",
    text: "i design things",
    subtext: "and i love it",
    width: 148,
    height: 72,
    ix: 0.38,
    iy: 0.75,
    rotation: -4,
    textStyle: "sticker",
  },
  {
    id: "10",
    type: "text",
    text: "always curious,",
    subtext: "always building.",
    width: 160,
    height: 68,
    ix: 0.22,
    iy: 0.06,
    rotation: 3,
    textStyle: "quote",
  },
];

export default function DraggableCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Record<string, Position>>({});
  const [zIndices, setZIndices] = useState<Record<string, number>>(() =>
    Object.fromEntries(ITEMS.map((item, i) => [item.id, i + 1])),
  );
  const [maxZ, setMaxZ] = useState(ITEMS.length);
  const [initialized, setInitialized] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const dragState = useRef<{
    id: string;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const h = containerRef.current.offsetHeight;
    const initial: Record<string, Position> = {};
    ITEMS.forEach((item) => {
      initial[item.id] = {
        x: item.ix * w,
        y: item.iy * h,
      };
    });
    setPositions(initial);
    setInitialized(true);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent, id: string) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      const containerRect = containerRef.current!.getBoundingClientRect();
      const pos = positions[id];
      dragState.current = {
        id,
        offsetX: e.clientX - containerRect.left - pos.x,
        offsetY: e.clientY - containerRect.top - pos.y,
      };
      const newZ = maxZ + 1;
      setMaxZ(newZ);
      setZIndices((prev) => ({ ...prev, [id]: newZ }));
      setDraggingId(id);
    },
    [positions, maxZ],
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { id, offsetX, offsetY } = dragState.current;
    const x = e.clientX - containerRect.left - offsetX;
    const y = e.clientY - containerRect.top - offsetY;
    setPositions((prev) => ({ ...prev, [id]: { x, y } }));
  }, []);

  const onPointerUp = useCallback(() => {
    dragState.current = null;
    setDraggingId(null);
  }, []);

  return (
    <div className="w-full mt-24 mb-12">
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: 720 }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {initialized &&
          ITEMS.map((item) => {
            const pos = positions[item.id];
            if (!pos) return null;
            const isHovered = hoveredId === item.id;
            const isDragging = draggingId === item.id;
            const hoverTilt = item.rotation >= 0 ? 3 : -3;
            const rotation = isDragging
              ? item.rotation
              : isHovered
                ? item.rotation + hoverTilt
                : item.rotation;

            return (
              <div
                key={item.id}
                onPointerDown={(e) => onPointerDown(e, item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="absolute select-none"
                style={{
                  left: pos.x,
                  top: pos.y,
                  width: item.width,
                  transform: `rotate(${rotation}deg) scale(${isHovered && !isDragging ? 1.03 : 1})`,
                  zIndex: zIndices[item.id],
                  cursor: isDragging ? "grabbing" : "grab",
                  touchAction: "none",
                  transition: isDragging
                    ? "none"
                    : "transform 0.2s ease, box-shadow 0.2s ease",
                  willChange: "transform",
                }}
              >
                {item.type === "image" ? (
                  <div
                    className={
                      item.polaroid
                        ? "bg-white p-2 pb-4"
                        : item.rounded
                        ? "rounded-2xl overflow-hidden"
                        : "rounded-sm overflow-hidden"
                    }
                    style={{
                      boxShadow: isHovered && !isDragging
                        ? "0 16px 48px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)"
                        : "0 8px 28px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        width: item.width - (item.polaroid ? 16 : 0),
                        height: item.height,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.src!}
                        alt={item.alt!}
                        fill
                        className="object-cover"
                        draggable={false}
                        sizes="300px"
                      />
                    </div>
                    {item.polaroid && item.caption && (
                      <p
                        className="mt-2 text-center text-[#444] leading-tight"
                        style={{
                          fontFamily: "var(--font-caveat)",
                          fontSize: 18,
                        }}
                      >
                        {item.caption}
                      </p>
                    )}
                  </div>
                ) : item.textStyle === "sticker" ? (
                  <div
                    className="bg-[#F7C325] px-4 py-3"
                    style={{ borderRadius: 6, boxShadow: "0 8px 28px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
                  >
                    <p className="text-[#333] text-sm font-semibold leading-tight">
                      {item.text}
                    </p>
                    {item.subtext && (
                      <p className="text-[#333] text-sm font-light leading-tight">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                ) : (
                  <div
                    className="bg-white px-4 py-3 border border-[#eee]"
                    style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)", borderRadius: 4 }}
                  >
                    <p className="text-[#333] text-xs font-medium leading-snug italic">
                      {item.text}
                    </p>
                    {item.subtext && (
                      <p className="text-[#333] text-xs font-light leading-snug italic">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
