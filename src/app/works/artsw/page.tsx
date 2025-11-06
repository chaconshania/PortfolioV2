"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ArtswPage() {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"],
  });

  // Each item: 300px (text) + 600px (image) + 32px (gap-8) = 932px
  // 6 items = 5580px total content, plus gaps between items (48px * 5 = 240px)
  // Total = 5820px. To show last item fully, need to scroll ~85% of total width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const smoothX = useSpring(x, {
    damping: 30,
    mass: 0.5,
    stiffness: 400,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="mt-[100px] lg:mt-20">
        <section className="space-y-6 px-6 mb-12">
          <h1 className="text-2xl font-bold">ArtsWestchester</h1>
          <h2 className="text-4xl font-bold">Redesigning Old Webpages & More...</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            I started out at ArtsWestchester as an Intern and I stayed for the journey of designing and redesigning webpages.
          </p>
          <h3>Check out some of the work here:</h3>
          <ul className="flex flex-row gap-4">
            <li>Benefit Concert 2024</li>
            <li>Benefit Concert 2025</li>
            <li>Public Arts</li>
            </ul>
        </section>

        {/* Horizontal Scrolling Section */}
        <div ref={horizontalScrollRef} className="relative h-[400vh]">
          <div className="sticky top-0 h-screen flex bg-[#F4F5F5] items-center overflow-hidden">
            <motion.div
              style={{ x: smoothX }}
              className="flex gap-12 px-6 will-change-transform"
            >
              {/* Item 1 */}
              <div className="flex-shrink-0 flex gap-8 items-end">
                <div className="w-[300px] space-y-4">
                  <h3 className="text-3xl font-bold">Design Showcase</h3>
                  <p className="text-gray-600">
                    Exploring creative design concepts and visual storytelling.
                  </p>
                </div>
                <div className="w-[600px] h-[700px]">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src="/play/Design.png"
                    alt="Design showcase"
                    width={600}
                    height={700}
                    priority
                    quality={90}
                  />
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex-shrink-0 flex gap-8 items-end">
                <div className="w-[300px] space-y-4">
                  <h3 className="text-3xl font-bold">Art of the Roll</h3>
                  <p className="text-gray-600">
                    Breaking world records through collaborative art and design.
                  </p>
                </div>
                <div className="w-[600px] h-[700px]">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src="/play/AOTR.gif"
                    alt="Art of the Roll"
                    width={600}
                    height={700}
                    unoptimized
                  />
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex-shrink-0 flex gap-8 items-end">
                <div className="w-[300px] space-y-4">
                  <h3 className="text-3xl font-bold">Unmute CT</h3>
                  <p className="text-gray-600">
                    Amplifying voices through community-driven design.
                  </p>
                </div>
                <div className="w-[600px] h-[700px]">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src="/play/UnmuteCT.png"
                    alt="Unmute CT"
                    width={600}
                    height={700}
                    quality={90}
                  />
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex-shrink-0 flex gap-8 items-end">
                <div className="w-[300px] space-y-4">
                  <h3 className="text-3xl font-bold">Dreamscape</h3>
                  <p className="text-gray-600">
                    Immersive experiences blending reality and imagination.
                  </p>
                </div>
                <div className="w-[600px] h-[700px]">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src="/play/Dreamscape.gif"
                    alt="Dreamscape"
                    width={600}
                    height={700}
                    unoptimized
                  />
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex-shrink-0 flex gap-8 items-end">
                <div className="w-[300px] space-y-4">
                  <h3 className="text-3xl font-bold">Life Design</h3>
                  <p className="text-gray-600">
                    Creating meaningful experiences through thoughtful design.
                  </p>
                </div>
                <div className="w-[600px] h-[700px]">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src="/play/Lifedes.gif"
                    alt="Life Design"
                    width={600}
                    height={700}
                    unoptimized
                  />
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex-shrink-0 flex gap-8 items-end">
                <div className="w-[300px] space-y-4">
                  <h3 className="text-3xl font-bold">Oasis XR</h3>
                  <p className="text-gray-600">
                    Award-winning XR experience for mindful engagement.
                  </p>
                </div>
                <div className="w-[600px] h-[700px]">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src="/play/OasisXR.gif"
                    alt="Oasis XR"
                    width={600}
                    height={700}
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="space-y-6 px-6 py-12">
          <h2 className="text-3xl font-bold">Project Details</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            This project showcases various design explorations and creative work.
            Scroll through the gallery above to see different concepts and implementations.
          </p>
        </section>
      </div>
    </div>
  );
}
