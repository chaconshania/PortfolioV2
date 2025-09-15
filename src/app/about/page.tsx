import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <main className="flex flex-col p-6 w-full items-center gap-6">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 pt-10 w-full">
          <div className="flex flex-col w-full gap-6">
            <h1 className="max-w-[900px] text-3xl lg:text-6xl ">
              Shaped by challenge, focused on{" "}
              <span className="font-bold text-[#333333]">creation.</span>
              <span className="italic font-thin"></span>{" "}
            </h1>
          </div>
        </section>
         <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6  w-full">
          <div className="flex flex-col w-full gap-6">
          </div>
          <div className="flex flex-col w-full gap-6">
            <p className=" ">
              <span className="">
                I&apos;m a product designer who loves building things that
                people actually enjoy using. I studied digital media & design at
                the University of Connecticut, focusing on web interactive
                design, and along the way picked up skills in front-end
                development, UX/UI, and motion design. I&apos;m at my best when
                I&apos;m prototyping and problem-solving—whether that means
                untangling a messy user flow, creating something interactive
                from scratch, or working side by side with engineers and
                founders. <br />
                <br />
                At UXGO CoCreate (Cohort 20), I got to do exactly that and
                sharpen my product design skills through real collaboration. I
                don&apos;t back down from challenges. My next one: earning a
                masters in computer science to push myself further and,
                eventually, launch a product of my own.
              </span>
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* Project 1 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/me/focus.jpeg"
                alt="Dreamscape GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Web design, Three.Js
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/me/graduated.jpeg"
                alt="FitMix GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />

              <div className="absolute bottom-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Mobile App design
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/me/smile.jpeg"
                alt="Project 3 GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Web design
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
