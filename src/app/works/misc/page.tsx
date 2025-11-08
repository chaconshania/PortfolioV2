"use client";

import React from "react";
import AnimatedGrid from "@/components/AnimatedGrid";

export default function MiscPage() {
  const gridItems = [
    {
      src: "/lifedes/Lifedes.png",
      alt: "Lifedes cover",
      title: "Lifedes",
      description: "Cover image of project",
      backgroundColor: "#F3F0E6", 
      unoptimized: true,
    
    },
    {
      src: "/lifedes/STYLE.jpg",
      alt: "Dreamscape",
      title: "Dreamscape",
      description: "Interactive experience design",
       backgroundColor: "#F3F0E6", 
      unoptimized: true,
    },
    {
      src: "/lifedes/Wireframe.png",
      alt: "FitMix",
      title: "FitMix",
      description: "Fitness app concept",
      unoptimized: true,
    },
    {
      src: "/lifedes/homepage.png",
      alt: "Oasis XR",
      title: "Oasis XR",
      description: "Extended reality experience",
      unoptimized: true,
    },
    {
      src: "/lifedes/Article.png",
      alt: "Unmute CT",
      title: "Unmute CT",
      description: "Community platform design",
      quality: 90,
    },
      {
      src: "/lifedes/Categories.png",
      alt: "Unmute CT",
      title: "Unmute CT",
      description: "Community platform design",
      quality: 90,
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 mt-[100px] lg:mt-20">
        {/* Header Section */}
        <section className="space-y-6 mb-12 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Miscellaneous Projects
          </h1>
          <p className="text-lg text-gray-600">
            A collection of creative explorations, experimental designs, and side projects that showcase different aspects of my design journey.
          </p>
        </section>


        {/* Additional Projects Grid */}
        <section className="space-y-6 mb-16">
          <div className="space-y-2">
            <h2 className="text-sm text-[#999999]">DESIGN EXPLORATIONS</h2>
            <h3 className="text-2xl font-bold">
              Visual experiments and creative concepts
            </h3>
          </div>

          <AnimatedGrid items={gridItems} />
         
        </section>
      </div>
    </div>
  );
}
