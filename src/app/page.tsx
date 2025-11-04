"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div>
      <main className="flex flex-col p-6 w-full gap-6 ">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 pt-20 lg:pt-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col w-full gap-6">
              <h1 className="max-w-[900px] text-3xl lg:text-6xl text-[#333333] leading-[1.12] relative ">
                Shania is a <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">product designer</span> who codes, turning sketches into shipped products.
                <span className="italic font-thin"></span>{" "}
              </h1>
              <p className="max-w-[600px] text-base ">
                Previously designed @ Blueberry Social
              </p>
              {/*   Linkedin and Github logos
          <div className="flex flex-col  justify-end ">
            <ul className="flex flex-row gap-4 ">
              <li><Image src="/me/linkedin.svg" alt="linkedin logo" width={24} height={24}></Image></li>
              <li><Image src="/me/github.svg" alt="github logo" width={24} height={24}></Image></li>
            </ul>
          </div>
          */}
            </div>
          </motion.div>
        </section>

        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 w-full relative">
          {/* Blueberry SVG - positioned behind container */}
          <motion.div
            animate={{ y: isCardHovered ? -160 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[-60] left-10 pointer-events-none"
          >
            <Image
              src="/me/Bloo.svg"
              alt="Blueberry decoration"
              width={500}
              height={500}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full relative" style={{ zIndex: 30 }}>
            {/* Columns */}
            <div className="flex flex-col gap-6">
              {/*Projects*/}
              <Link href="/blueberry">
                <div
                  className="flex flex-col gap-2 transition-colors duration-300 ease-in-out group relative rounded-xl overflow-hidden p-4 bg-[#f8f8f8]"
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                >
                  <Image
                    src="/homepage/Blueberry.png"
                    className="rounded-lg w-full h-auto"
                    alt="Blueberry dashboard"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                  </div>
                  <h3 className="max-w-[600px] text-md ">
                    Turning chaotic social chatter into warm, on-brand
                    conversations automatically
                  </h3>
                  <h4 className="text-sm">BLUEBERRY SOCIAL • SHIPPED 2025</h4>
                </div>
              </Link>
            </div>
            
            <div className="flex flex-col gap-6">
              {/*Projects*/}

              <Link href="/artoftheroll">
                <div className="flex flex-col gap-2 transition-colors duration-300 ease-in-out group relative rounded-xl overflow-hidden p-4 bg-[#f8f8f8]">
                  <Image
                    src="/homepage/artoftheroll.png"
                    alt="Art of the roll"
                    className="rounded-lg w-full h-auto"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/*<span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                  </div>
                  <h3 className="max-w-[600px] text-md ">
                    From mural walls to mobile feeds, I design the journeys
                    people remember.
                  </h3>
                  <h4 className="text-sm">ART OF THE ROLL • PENDING 2025</h4>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {/*Projects*/}
              <Link href="/works/oasisxr">
                <div className="flex flex-col gap-2 transition-colors duration-300 ease-in-out group relative rounded-xl overflow-hidden p-4 bg-[#f8f8f8]">
                  <Image
                    src="/homepage/oasisxr.png"
                    alt="Oasis XR"
                    className="rounded-lg w-full h-auto"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/*<span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span> */}
                  </div>
                  <h3 className="max-w-[600px] text-md">
                    Award-winning XR interactive experience designed for mindful
                    engagement
                  </h3>
                  <h4 className="text-sm">OASIS XR • CASE STUDY 2025</h4>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/*
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 pt-20 lg:pt-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col w-full gap-6">
              <h1 className="max-w-[900px] text-3xl lg:text-6xl text-[#333333] leading-[1.12] ">
                Web Designs
              </h1>
              <p className="max-w-[600px] text-base ">
                I like to design and code websites as well
              </p>
             
          </motion.div>
        </section> */}
      </main>
    </div>
  );
}
