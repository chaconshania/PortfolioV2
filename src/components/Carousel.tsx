"use client";

import React, { useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  totalPages: number;
  imageBasePath: string;
  imagePrefix?: string;
  imageExtension?: string;
}

export default function Carousel({
  totalPages,
  imageBasePath,
  imagePrefix = "Demo Day Slide Deck",
  imageExtension = "png",
}: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const statusId = useId();

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getImagePath = () => {
    return `${imageBasePath}/${imagePrefix}-${currentPage}.${imageExtension}`;
  };

  return (
    <div className="relative w-full">
      {/* Live region for screen readers */}
      <div id={statusId} aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {currentPage} of {totalPages}
      </div>

      {/* Carousel Container */}
      <div className="relative rounded-xl overflow-hidden bg-gray-100 border-1 border-[#EFF3FB]">
        <Image
          src={getImagePath()}
          alt={`Slide ${currentPage}`}
          width={1200}
          height={800}
          className="w-full h-auto"
          priority={currentPage === 1}
        />
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-[colors,transform] focus-visible:ring-2 focus-visible:ring-[#667eea] active:not-disabled:scale-[0.96] ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#667eea] text-white hover:bg-[#5568d3]"
          }`}
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          Previous
        </button>

        <div className="text-sm text-gray-600" aria-hidden="true">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#667eea] ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#667eea] text-white hover:bg-[#5568d3]"
          }`}
        >
          Next
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`h-2 rounded-full transition-[width] motion-reduce:transition-none ${
              page === currentPage
                ? "bg-[#667eea] w-8"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            } focus-visible:ring-2 focus-visible:ring-[#667eea]`}
            aria-label={`Go to slide ${page}`}
          />
        ))}
      </div>
    </div>
  );
}
