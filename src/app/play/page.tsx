import Image from "next/image";
import React from "react";

type Project = {
  type: "image" | "video";
  src: string;
  alt: string;
  tags: string[];
  width?: number;
  height?: number;
};

const projects: Project[] = [
  {
    type: "image",
    src: "/play/Design.png",
    alt: "Design project",
    tags: ["Design"],
    width: 964,
    height: 1120,
  },
  {
    type: "video",
    src: "/play/Scene-1 (4).mp4",
    alt: "Dreamscape Three.js",
    tags: ["Three.Js"],
  },
  {
    type: "video",
    src: "/play/Lifedes_mockup.mp4",
    alt: "Lifedes mockup",
    tags: ["Web design"],
  },
  {
    type: "image",
    src: "/play/FitMix.gif",
    alt: "FitMix app demo",
    tags: ["Mobile App design"],
    width: 1600,
    height: 1200,
  },
  {
    type: "video",
    src: "/play/game.mp4",
    alt: "Game concept demo",
    tags: ["Game Concept, Java"],
  },
  {
    type: "image",
    src: "/play/UnmuteCT.png",
    alt: "UnmuteCT campaign",
    tags: ["Campaign for Connecticut Secretary of State"],
    width: 1024,
    height: 1018,
  },
];

function ProjectCard({ type, src, alt, tags, width = 800, height = 600 }: Project) {
  return (
    <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden h-auto ">
      {type === "image" && src && (
        <Image
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      )}
      {type === "video" && src && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        />
      )}
      <div className="absolute top-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-black text-white text-sm px-4 py-2 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Playground() {
  return (
    <div>
      <div className="grid grid-cols-[minmax(24px,1fr)_minmax(0,900px)_minmax(24px,1fr)] md:grid-cols-[minmax(60px,1fr)_minmax(0,900px)_minmax(60px,1fr)] xl:grid-cols-[minmax(120px,1fr)_minmax(0,900px)_minmax(120px,1fr)] w-full">
        <div className="col-start-1" />
        <section className="col-start-2 pt-20 lg:pt-16 pb-6">
          <h1 className="text-3xl lg:text-4xl text-[#333333] leading-[1.12]">
            My{" "}
            <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">lab of curiosity</span>{" "}
            where I tinker, break, and build anything that sparks an idea.
          </h1>
        </section>
        <div className="col-start-3" />
      </div>
      <main className="max-w-[1800px] mx-auto px-6 pb-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Playground;
