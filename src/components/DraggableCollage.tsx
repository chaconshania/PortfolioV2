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
    ix: 0.03,
    iy: 0.08,
    rotation: -6,
    polaroid: true,
  },
  {
    id: "2",
    type: "image",
    src: "/me/focus.jpeg",
    alt: "Focused",
    width: 210,
    height: 270,
    ix: 0.18,
    iy: 0.3,
    rotation: 4,
    polaroid: true,
  },
  {
    id: "3",
    type: "image",
    src: "/me/graduated.jpeg",
    alt: "Graduation",
    width: 240,
    height: 280,
    ix: 0.35,
    iy: 0.05,
    rotation: -3,
    polaroid: true,
  },
  {
    id: "4",
    type: "image",
    src: "/me/renfaire.jpeg",
    alt: "Renaissance Faire",
    width: 210,
    height: 255,
    ix: 0.52,
    iy: 0.25,
    rotation: 7,
    polaroid: false,
  },
  {
    id: "5",
    type: "image",
    src: "/me/me-friends.JPG",
    alt: "With friends",
    width: 270,
    height: 220,
    ix: 0.65,
    iy: 0.05,
    rotation: -5,
    polaroid: true,
  },
  {
    id: "6",
    type: "image",
    src: "/me/dmd-frens.JPG",
    alt: "DMD friends",
    width: 255,
    height: 215,
    ix: 0.68,
    iy: 0.48,
    rotation: 4,
    polaroid: true,
  },
  {
    id: "7",
    type: "image",
    src: "/me/me-standing.JPG",
    alt: "Standing portrait",
    width: 195,
    height: 265,
    ix: 0.44,
    iy: 0.42,
    rotation: -8,
    polaroid: false,
  },
  {
    id: "8",
    type: "image",
    src: "/blueberry/group-picture.JPG",
    alt: "Blueberry team",
    width: 265,
    height: 205,
    ix: 0.1,
    iy: 0.52,
    rotation: 5,
    polaroid: true,
  },
  {
    id: "9",
    type: "text",
    text: "i design things",
    subtext: "and i love it",
    width: 148,
    height: 72,
    ix: 0.56,
    iy: 0.62,
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
    ix: 0.26,
    iy: 0.08,
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
                        ? "bg-white p-2 pb-6 shadow-md"
                        : "shadow-md rounded-sm overflow-hidden"
                    }
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
                        sizes="200px"
                      />
                    </div>
                  </div>
                ) : item.textStyle === "sticker" ? (
                  <div
                    className="bg-[#F7C325] px-4 py-3 shadow-md"
                    style={{ borderRadius: 6 }}
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
                    className="bg-white px-4 py-3 shadow-sm border border-[#eee]"
                    style={{ borderRadius: 4 }}
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
