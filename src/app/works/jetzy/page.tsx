"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Carousel from "@/components/Carousel";
import { CornerUpLeft } from "lucide-react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("header");
  const [circleStyle, setCircleStyle] = useState({ top: 0, opacity: 0 });
  const mainRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Update circle position when active section changes
  useEffect(() => {
    const updateCirclePosition = () => {
      if (
        activeSection &&
        sectionRefs.current[activeSection] &&
        mainRef.current
      ) {
        const section = sectionRefs.current[activeSection];
        const main = mainRef.current;
        if (section) {
          // First look for a specific target element, then fall back to h3/h1
          const target =
            section.querySelector(`[data-circle-target="${activeSection}"]`) ||
            section.querySelector("h3, h1");
          if (target) {
            const targetRect = target.getBoundingClientRect();
            const mainRect = main.getBoundingClientRect();
            // Position circle vertically centered with the target (8 = half of 16px circle)
            const newTop =
              targetRect.top -
              mainRect.top +
              main.scrollTop +
              targetRect.height / 2 -
              8;
            setCircleStyle({ top: newTop, opacity: 1 });
          }
        }
      }
    };

    // Small delay to ensure refs are populated on initial render
    const timeout = setTimeout(updateCirclePosition, 100);

    // Also update on scroll for smooth tracking
    window.addEventListener("scroll", updateCirclePosition);
    window.addEventListener("resize", updateCirclePosition);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", updateCirclePosition);
      window.removeEventListener("resize", updateCirclePosition);
    };
  }, [activeSection]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-0">
      <div className="grid max-w-[1800px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen md:col-span-3">
          <aside className="hidden lg:flex col-span-2 sticky top-0 h-screen flex-col overflow-y-auto">
            <div className="py-6">
              <Link
                href="/"
                className="text-base text-[#666666] hover:text-foreground hover:underline transition-colors flex items-center gap-2 text-sm"
              >
                <CornerUpLeft className="h-4 w-4" />
                RETURN
              </Link>
            </div>
            <nav className="border-l-1 pl-2 py-6 my-auto">
              <ul className="space-y-1 text-base">
                <li>
                  <a
                    href="#section-1"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "section-1"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#section-2"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "section-2"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Progress
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="col-span-8 relative">
            {/* Scroll indicator circle */}
            <div
              className="hidden lg:block absolute left-[-28px] w-5 h-5 rounded-full bg-[#F7C325] transition-all duration-300 ease-out z-10"
              style={{ top: circleStyle.top, opacity: circleStyle.opacity }}
            />
            <main
              ref={mainRef}
              className="overflow-y-auto space-y-12 lg:py-6 [&_p]:text-base"
            >
              {/* Header Section */}
              <section
                id="header"
                ref={(el) => {
                  sectionRefs.current["header"] = el;
                }}
                className="flex flex-col gap-6 pt-10 lg:pt-10"
              >
                <h1 className="max-w-[900px] text-2xl lg:text-4xl text-[#333333] leading-[1.12]">
                  <span data-circle-target="header">
                    Designing a more intentional social travel experience with
                    Jetzy
                  </span>{" "}
                  goes here
                </h1>
                <p className="max-w-[600px] text-base">JETZY • BUILDING 2026</p>
              </section>

              <section>
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/jetzy/jetzy.png"
                  alt="project hero"
                  width={1200}
                  height={800}
                />
              </section>

              <section className="space-y-6">
                <div className="grid space-y-6 grid-cols-1 lg:grid-cols-4">
                  <div className="flex flex-col">
                    <h2 className="text-sm mono">ROLE</h2>
                    <h3>Product Designer</h3>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-sm mono">TIMELINE</h2>
                    <p>Ongoing</p>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-sm mono">TOOLS</h2>
                    <p>Figma, v0</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-sm mono">Overview</h2>
                  <h3 className="text-2xl font-medium">
                    Examining opportunities to improve clarity across
                    Jetzy&apos;s product experience
                  </h3>
                </div>
                <p>
                  During this ongoing case study, I am exploring how
                  Jetzy&apos;s product experience can be clarified and
                  strengthened through a more intentional approach to product
                  design. The focus is on identifying opportunities for Jetzy to
                  better differentiate itself as a social travel platform by
                  improving experience clarity, prioritization, and user flow
                  across the product. Currently exploring: intent-driven
                  navigation, experience prioritization, interest-based
                  community design, and ways to reduce cognitive load across
                  social travel experiences.
                </p>
              </section>

              <section
                id="section-1"
                ref={(el) => {
                  sectionRefs.current["section-1"] = el;
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-sm mono">Under NDA</h2>
                  <h3 className="text-2xl font-medium">
                    This project is currently in progress!
                  </h3>
                </div>

                <p>
                  I&apos;ve signed an NDA, so I can&apos;t share more details
                  about this work publicly. However, if you&apos;d like to learn
                  more about my work at Jetzy, please reach out!
                </p>
              </section>
            </main>
          </div>

          <div className="hidden lg:block col-span-2" />
        </div>
      </div>
    </div>
  );
}
