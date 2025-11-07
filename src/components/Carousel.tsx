"use client";

import React, { useState } from "react";
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
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#667eea] text-white hover:bg-[#5568d3]"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#667eea] text-white hover:bg-[#5568d3]"
          }`}
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-2 h-2 rounded-full transition-all ${
              page === currentPage
                ? "bg-[#667eea] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to page ${page}`}
          />
        ))}
      </div>
    </div>
  );
}
