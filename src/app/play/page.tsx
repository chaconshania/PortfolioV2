import Image from "next/image";
import React from "react";

function Playground() {
  return (
    <div>
      <main className="flex flex-col p-6 w-full items-center gap-12">
        <section className="flex flex-col lg:flex-row lg:gap-6 w-full">
          <div className="flex flex-col w-full gap-6">
            <h1 className="max-w-[600px] text-3xl lg:text-5xl">
              A collection of small experiments I&apos;ve built over the years.
            </h1>
            <hr />
          </div>
        </section>

        <section className="w-full">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* Project 1 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/play/Dreamscape.gif"
                alt="Dreamscape GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Web design, Three.Js
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/play/FitMix.gif"
                alt="FitMix GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Mobile App design
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/play/Lifedes.gif"
                alt="Project 3 GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Web design
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/play/OasisXR.gif"
                alt="Project 4 GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Project 4
                </span>
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Playground
                </span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/play/Lifedes.gif"
                alt="Project 5 GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Project 5
                </span>
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Playground
                </span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="break-inside-avoid group relative bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="/play/OasisXR.gif"
                alt="Project 6 GIF"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Project 6
                </span>
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Playground
                </span>
              </div>
            </div>

            {/* Project 7 */}
            <div className="break-inside-avoid group relative bg-neutral-100  h-[400px] rounded-lg overflow-hidden">
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Project 6
                </span>
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Playground
                </span>
              </div>
            </div>
            <div className="break-inside-avoid group relative bg-neutral-100  h-[400px] rounded-lg overflow-hidden">
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Project 6
                </span>
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Playground
                </span>
              </div>
            </div>
            <div className="break-inside-avoid group relative bg-neutral-100  h-[400px] rounded-lg overflow-hidden">
              <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Project 6
                </span>
                <span className="bg-black text-white text-sm px-4 py-2 rounded">
                  Playground
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Playground;
