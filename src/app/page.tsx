"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MoviePosterTrigger } from "@/components/MoviePosterCard";
import { RecentActivities } from "@/components/RecentActivities";

export default function Home() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <main className="grid grid-cols-[minmax(24px,1fr)_minmax(0,900px)_minmax(24px,1fr)] md:grid-cols-[minmax(60px,1fr)_minmax(0,900px)_minmax(60px,1fr)] w-full">
        {/* Left margin — reserved for future scribbles */}
        <div className="col-start-1" />
        {/* Center content column */}
        <div className="col-start-2 flex flex-col gap-8 py-6">
          <section className="flex flex-col lg:flex-row gap-2 lg:gap-6 pt-10 lg:pt-10 w-full">
            <div className="flex flex-col w-full gap-4">
              <motion.h1
                className="max-w-[900px] text-3xl lg:text-4xl text-[#333333] leading-[1.12] relative text-pretty"
                initial={
                  prefersReducedMotion
                    ? {}
                    : { opacity: 0, y: 20, filter: "blur(4px)" }
                }
                animate={
                  prefersReducedMotion
                    ? {}
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Shania is a{" "}
                <span className="font-bold text-[#333333] px-2 bg-[#F7C325] highlight-sweep">
                  designer
                </span>{" "}
                who codes, turning sketches into shipped products.
              </motion.h1>

              <motion.p
                className="max-w-[400px] text-base text-pretty"
                initial={
                  prefersReducedMotion
                    ? {}
                    : { opacity: 0, y: 20, filter: "blur(4px)" }
                }
                animate={
                  prefersReducedMotion
                    ? {}
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                When I&apos;m not working, I&apos;m probably watching{" "}
                <MoviePosterTrigger>
                  <span className="highlight-sweep cursor-pointer">movies</span>
                </MoviePosterTrigger>
                , creating <span className="highlight-sweep">art</span>, or
                listening to <span className="highlight-sweep">music</span>.
              </motion.p>
              {/*   Linkedin and Github logos
          <div className="flex flex-col  justify-end ">
            <ul className="flex flex-row gap-4 ">
              <li><Image src="/me/linkedin.svg" alt="linkedin logo" width={24} height={24}></Image></li>
              <li><Image src="/me/github.svg" alt="github logo" width={24} height={24}></Image></li>
            </ul>
          </div>
          */}
            </div>
          </section>
          <hr />
          <section className="flex flex-col gap-6 w-full relative">
            {/* Blueberry SVG - positioned behind container */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={
                prefersReducedMotion
                  ? {}
                  : { opacity: 1, y: isCardHovered ? -160 : 0 }
              }
              transition={{
                opacity: { delay: 0.6 },
                y: { duration: 0.3, ease: "easeOut" },
              }}
              className="absolute pointer-events-none hidden
              lg:block lg:-top-[120px] lg:left-10 lg:w-[500px] lg:h-[500px]"
            >
              <Image
                src="/me/Bloo.svg"
                alt="Blueberry decoration"
                fill
                className="object-contain"
                style={{ outline: "none" }}
              />
            </motion.div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full relative"
              style={{ zIndex: 30 }}
            >
              {/* Columns */}
              <motion.div
                className="flex flex-col gap-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/*Projects*/}
                <Link
                  href="/blueberry"
                  data-cursor="case-study"
                  className="rounded-3xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none active:scale-[0.96] transition-transform duration-150 ease-out"
                >
                  <div
                    className="flex flex-col gap-2 group relative rounded-3xl overflow-hidden p-4 bg-[#f8f8f8]"
                    onMouseEnter={() => setIsCardHovered(true)}
                    onMouseLeave={() => setIsCardHovered(false)}
                  >
                    <Image
                      src="/homepage/Blueberry.png"
                      className="rounded-lg w-full h-auto"
                      style={{ outline: "none" }}
                      alt="Blueberry dashboard"
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* <span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                    </div>
                    <h3 className="max-w-[600px] text-md font-[philoAB] mono">
                      Turning chaotic social chatter into warm, on-brand
                      conversations automatically
                    </h3>
                    <h4 className="text-sm mono">
                      BLUEBERRY SOCIAL • SHIPPED 2025
                    </h4>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-col gap-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/*Projects*/}
                <Link
                  href="/works/jetzy"
                  data-cursor="case-study"
                  className="rounded-3xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none active:scale-[0.96] transition-transform duration-150 ease-out"
                >
                  <div className="flex flex-col gap-2 group relative rounded-3xl overflow-hidden p-4 bg-[#f8f8f8]">
                    <Image
                      src="/jetzy/Jetzy.png"
                      alt="Jetzy project"
                      className="rounded-lg w-full h-auto"
                      style={{ outline: "none" }}
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/*<span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                    </div>
                    <h3 className="max-w-[600px] text-md mono">
                      Designing a more intentional social travel experience with
                      Jetzy
                    </h3>
                    <h4 className="text-sm mono">JETZY • BUILDING 2026</h4>
                  </div>
                </Link>
              </motion.div>
              <motion.div
                className="flex flex-col gap-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/artoftheroll"
                  data-cursor="case-study"
                  className="rounded-3xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none active:scale-[0.96] transition-transform duration-150 ease-out"
                >
                  <div className="flex flex-col gap-2 group relative rounded-3xl overflow-hidden p-4 bg-[#f8f8f8]">
                    <Image
                      src="/homepage/artoftheroll.png"
                      alt="Art of the roll"
                      className="rounded-lg w-full h-auto"
                      style={{ outline: "none" }}
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/*<span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                    </div>
                    <h3 className="max-w-[600px] text-md mono">
                      From mural walls to mobile feeds, I design the journeys
                      people remember.
                    </h3>
                    <h4 className="text-sm mono">
                      ART OF THE ROLL • PENDING 2025
                    </h4>
                  </div>
                </Link>
              </motion.div>
              <motion.div
                className="flex flex-col gap-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/*Projects*/}
                <Link
                  href="/works/oasisxr"
                  data-cursor="case-study"
                  className="rounded-3xl focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none active:scale-[0.96] transition-transform duration-150 ease-out"
                >
                  <div className="flex flex-col gap-2 group relative rounded-3xl overflow-hidden p-4 bg-[#f8f8f8]">
                    <Image
                      src="/homepage/oasisxr.png"
                      alt="Oasis XR"
                      className="rounded-lg w-full h-auto"
                      style={{ outline: "none" }}
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/*<span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                    </div>
                    <h3 className="max-w-[600px] text-md mono">
                      Award-winning XR interactive experience designed for
                      mindful engagement
                    </h3>
                    <h4 className="text-sm mono">OASIS XR • CASE STUDY 2025</h4>
                  </div>
                </Link>
              </motion.div>
              {/*
            
            <div className="flex flex-col gap-6">
              
              <Link href="/works/artsw">
                <div className="flex flex-col gap-2 group relative rounded-3xl overflow-hidden p-4 bg-[#f8f8f8]">
                  <Image
                    src="/artsw/Wallflowers.png"
                    alt="Artsw web design"
                    className="rounded-lg w-full h-auto" style={{ outline: "none" }}
                    width={800}
                    height={600}
                  />
                
                  <h3 className="max-w-[600px] text-md">
                    Redesigning ArtsWestchester&apos;s digital presence through strategic web design
                  </h3>
                  <h4 className="text-sm">ARTSWESTCHESTER • WEB DESIGN 2025</h4>
                </div>
              </Link>
            </div>
          */}
            </div>
          </section>
          <hr />
          <RecentActivities />
        </div>
        {/* Right margin — reserved for future scribbles */}
        <div className="col-start-3" />
      </main>
    </div>
  );
}
