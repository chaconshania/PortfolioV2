import Image from "next/image";
import React from "react";
import DraggableCollage from "@/components/DraggableCollage";

function page() {
  return (
    <div>
      <div className="grid grid-cols-[minmax(24px,1fr)_minmax(0,900px)_minmax(24px,1fr)] md:grid-cols-[minmax(60px,1fr)_minmax(0,900px)_minmax(60px,1fr)] xl:grid-cols-[minmax(120px,1fr)_minmax(0,900px)_minmax(120px,1fr)] w-full">
        <div className="col-start-1" />
        <section className="col-start-2 flex flex-col gap-6 pt-20 lg:pt-16 pb-6">
          <h1 className="text-3xl lg:text-4xl text-[#333333] leading-[1.12]">
            Shaped by challenge, focused on{" "}
            <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">
              creation.
            </span>
          </h1>
          <p className="text-base">
            I&apos;m a product designer who loves building things that
            people actually enjoy using. I studied digital media & design at
            the University of Connecticut, focusing on web interactive
            design, and along the way picked up skills in front-end
            development, UX/UI, and motion design. I&apos;m at my best when
            I&apos;m prototyping and problem-solving—whether that means
            untangling a messy user flow, creating something interactive
            from scratch, or working side by side with engineers and
            founders.
            <br />
            <br />
            At UXGO CoCreate (Cohort 20), I got to do exactly that and
            sharpen my product design skills through real collaboration. I
            don&apos;t back down from challenges. My next one: earning a
            masters in computer science to push myself further and,
            eventually, launch a product of my own.
          </p>
        </section>
        <div className="col-start-3" />
      </div>
      <main className="w-full">
        {/* 
        <section className="w-full md:col-span-3">
          <div className="flex flex-row gap-2 w-full">
            {[
              { src: "/me/focus.jpeg", alt: "Focus" },
              { src: "/me/graduated.jpeg", alt: "Graduated" },
              { src: "/me/smile.jpeg", alt: "Smile" },
              { src: "/me/renfaire.jpeg", alt: "At the Renaissance faire" },
              { src: "/me/me-friends.JPG", alt: "With friends" },
              { src: "/me/dmd-frens.JPG", alt: "With DMD friends" },
              { src: "/me/me-standing.JPG", alt: "Standing portrait" },
              { src: "/blueberry/group-picture.JPG", alt: "Blueberry team group photo" },
            ].map(({ src, alt }) => (
              <div key={src} className="flex-1 min-w-0 rounded-[4px] overflow-hidden cursor-pointer group">
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={850}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  style={{ aspectRatio: '0.945' }}
                />
              </div>
            ))}
          </div>
        </section>
        */}
        <section className="hidden md:block w-full">
          <DraggableCollage />
        </section>
      </main>
    </div>
  );
}

export default page;
