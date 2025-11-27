import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <main className="grid max-w-[1800px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 gap-8 p-6 w-full items-center">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 pt-20 lg:pt-10 w-full md:col-span-3">
          <div className="flex flex-col w-full gap-6">
            <h1 className="max-w-[900px] text-3xl lg:text-6xl text-[#333333] leading-[1.12]">
              Shaped by challenge, focused on{" "}
              <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">creation.</span>
              <span className="italic font-thin"></span>{" "}
            </h1>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 w-full md:col-span-3">
          <div className="flex flex-col w-full gap-6"></div>
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
        <section className="w-full overflow-hidden md:col-span-3">
          <div className="flex flex-row gap-2 w-full">
            {/* Image 1 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/focus.jpeg"
                alt="Focus"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>

            {/* Image 2 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/graduated.jpeg"
                alt="Graduated"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>

            {/* Image 3 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/smile.jpeg"
                alt="Smile"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>
             {/* Image 4 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/renfaire.jpeg"
                alt="Renfaire"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>
             {/* Image 4 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/me-friends.JPG"
                alt="Renfaire"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>
             {/* Image 4 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/dmd-frens.JPG"
                alt="Renfaire"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>
             {/* Image 4 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/me/me-standing.JPG"
                alt="Renfaire"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>
             {/* Image 4 */}
            <div className="flex-shrink-0 w-[108px] sm:w-[167px] md:w-[110px] lg:w-[167px] rounded-[4px] overflow-hidden cursor-pointer group">
              <Image
                src="/blueberry/group-picture.JPG"
                alt="Renfaire"
                width={800}
                height={850}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ aspectRatio: '0.945' }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
