"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef, useCallback, useLayoutEffect, memo, Fragment } from "react";
import { MoviePosterTrigger } from "@/components/MoviePosterCard";
import { RotateCcw } from "lucide-react";
import { RecentActivities } from "@/components/RecentActivities";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type Seg = { text: string; chars: string; speed?: number; duration: number };

const PHRASES: Seg[][] = [
  [
    { text: "Shania is a designer",           chars: "lowerCase",   duration: 1.0 },
    { text: "who codes,",                     chars: "XO",          speed: 0.4, duration: 0.6 },
    { text: "turning sketches",               chars: "upperCase",   speed: 0.3, duration: 0.7 },
    { text: "into shipped",                   chars: "lowerCase",   speed: 0.3, duration: 0.5 },
    { text: "products.",                      chars: "0123456789",  speed: 0.4, duration: 0.5 },
  ],
  [
    { text: "Shania designs",                 chars: "lowerCase",   duration: 0.8 },
    { text: "what data suggests",             chars: "XO",          speed: 0.4, duration: 0.8 },
    { text: "and builds",                     chars: "upperCase",   speed: 0.3, duration: 0.5 },
    { text: "what users",                     chars: "lowerCase",   speed: 0.3, duration: 0.5 },
    { text: "need.",                          chars: "0123456789",  speed: 0.4, duration: 0.4 },
  ],
  [
    { text: "I like turning",                 chars: "lowerCase",   duration: 0.7 },
    { text: "messy ideas",                    chars: "XO",          speed: 0.4, duration: 0.6 },
    { text: "into something structured,",     chars: "upperCase",   speed: 0.3, duration: 0.9 },
    { text: "even if it starts",              chars: "lowerCase",   speed: 0.3, duration: 0.7 },
    { text: "as a half-formed thought in my head.", chars: "0123456789", speed: 0.4, duration: 1.1 },
  ],
];

const SEG_COUNT = 5;

const PhraseHeading = memo(function PhraseHeading() {
  const segRefs  = useRef<(HTMLSpanElement | null)[]>(Array(SEG_COUNT).fill(null));
  const cursorRef = useRef<HTMLSpanElement>(null);
  const iconRef  = useRef<SVGSVGElement>(null);
  const tlRef    = useRef<gsap.core.Timeline | null>(null);
  const phraseIndex  = useRef(0);
  const isAnimating  = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    PHRASES[phraseIndex.current].forEach((seg, i) => {
      if (segRefs.current[i]) segRefs.current[i]!.textContent = seg.text;
    });

    if (prefersReducedMotion || !cursorRef.current) return;

    const cursorTl = gsap.timeline({ repeat: -1 });
    cursorTl
      .to(cursorRef.current, { opacity: 0, duration: 0.5, ease: "none", delay: 0.2 })
      .to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "none", delay: 0.2 });

    return () => { cursorTl.kill(); };
  }, [prefersReducedMotion]);

  const handleRotate = useCallback(() => {
    if (isAnimating.current) return;

    const next = (phraseIndex.current + 1) % PHRASES.length;
    phraseIndex.current = next;
    const segments = PHRASES[next];

    if (prefersReducedMotion) {
      segRefs.current.forEach((el, i) => {
        if (el) el.textContent = segments[i]?.text ?? "";
      });
      return;
    }

    isAnimating.current = true;
    tlRef.current?.kill();

    segRefs.current.forEach(el => { if (el) el.textContent = ""; });

    const totalDuration = segments.reduce((s, seg) => s + seg.duration, 0);

    gsap.to(iconRef.current, {
      rotation: "-=360",
      duration: totalDuration,
      ease: "power2.inOut",
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      onComplete: () => { isAnimating.current = false; },
    });

    segments.forEach((seg, i) => {
      tl.to(segRefs.current[i], {
        duration: seg.duration,
        scrambleText: { text: seg.text, chars: seg.chars, speed: seg.speed ?? 0.5 },
      });
    });

    tlRef.current = tl;
  }, [prefersReducedMotion]);

  return (
    <h1 className="text-3xl lg:text-4xl text-[#333333] leading-[1.12] text-pretty m-0 max-w-[900px]">
      {Array.from({ length: SEG_COUNT }, (_, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span ref={(el) => { segRefs.current[i] = el; }} />
        </Fragment>
      ))}
      <span ref={cursorRef} className="text-[#aaaaaa] select-none">|</span>
      {" "}
      <button
        onClick={handleRotate}
        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E5E5EA] text-[#8E8E93] hover:bg-[#D1D1D6] transition-colors"
        style={{ verticalAlign: "middle" }}
        aria-label="Next phrase"
      >
        <RotateCcw ref={iconRef} size={14} strokeWidth={2} />
      </button>
    </h1>
  );
});

export default function Home() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <main className="grid grid-cols-[minmax(24px,1fr)_minmax(0,900px)_minmax(24px,1fr)] md:grid-cols-[minmax(60px,1fr)_minmax(0,900px)_minmax(60px,1fr)] w-full">
        <div className="col-start-1" />
        <div className="col-start-2 flex flex-col gap-8 py-6">
          <section className="flex flex-col lg:flex-row gap-2 lg:gap-6 pt-10 lg:pt-10 w-full">
            <div className="flex flex-col w-full gap-4">
              <motion.div
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
                <PhraseHeading />
              </motion.div>

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
            </div>
          </section>
          <hr />
          <section className="flex flex-col gap-6 w-full relative">
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
              <motion.div
                className="flex flex-col gap-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
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
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <div className="absolute top-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="max-w-[600px] text-md mono">
                      Award-winning XR interactive experience designed for
                      mindful engagement
                    </h3>
                    <h4 className="text-sm mono">OASIS XR • CASE STUDY 2025</h4>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
          <hr />
          <RecentActivities />
        </div>
        <div className="col-start-3" />
      </main>
    </div>
  );
}
