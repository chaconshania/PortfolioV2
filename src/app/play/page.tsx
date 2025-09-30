import Image from "next/image";
import React from "react";

type Project = {
  type: "image" | "video";
  src: string;
  alt: string;
  tags: string[];
};

const projects: Project[] = [
  {
    type: "image",
    src: "/play/Design.png",
    alt: "Project 4 demo",
    tags: ["Design"],
  },
  {
    type: "video",
    src: "/play/Scene-1 (4).mp4",
    alt: "Dreamscape GIF",
    tags: ["Three.Js"],
  },
  {
    type: "video",
    src: "/play/Lifedes_mockup.mp4",
    alt: "Project 3 GIF",
    tags: ["Web design"],
  },
  {
    type: "image",
    src: "/play/FitMix.gif",
    alt: "FitMix demo video",
    tags: ["Mobile App design"],
  },
  {
    type: "video",
    src: "/play/game.mp4",
    alt: "Project 4 demo",
    tags: ["Game Concept", "Java"], // fixed: separate tags
  },
  {
    type: "image",
    src: "/play/UnmuteCT.png",
    alt: "Project 4 demo",
    tags: ["Campaign for Connecticut Secretary of State"],
  },
];

function ProjectCard({ type, src, alt, tags }: Project) {
  return (
    <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden h-auto">
      {type === "image" && src && (
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={600}
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
    <main className="flex flex-col p-6 w-full items-center gap-2">
      <section className="flex flex-col lg:flex-row lg:gap-6 w-full pt-10 pb-4">
        <div className="flex flex-col w-full gap-6">
          <h1 className="max-w-[900px] text-3xl lg:text-6xl">
            A collection of{" "}
            <span className="font-bold text-[#333333]">small experiments</span>{" "}
            I&apos;ve built over the years.
          </h1>
        </div>
      </section>
      <section className="w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Playground;
