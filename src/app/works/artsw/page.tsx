"use client";

import Image from "next/image";
import React from "react";

export default function ArtswPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 mt-[100px] lg:mt-0">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen gap-4">
          {/* Fixed Left Column */}
          <aside className="flex col-span-12 lg:col-span-3 lg:sticky top-[100px] lg:h-[80vh] flex-col justify-between overflow-y-auto mb-8 lg:mb-0">
            <div className="pb-6 border-b border-gray-200">
              <h2 className="text-sm text-gray-400 tracking-tight mb-4">About This Work</h2>
              <p className="text-gray-600 leading-relaxed">
                I started out at ArtsWestchester as an Intern and I stayed for the journey of designing and redesigning webpages.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm tracking-wide text-gray-400 mb-3">Featured Projects</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Benefit Concert 2024</li>
                <li>Benefit Concert 2025</li>
                <li>Public Arts</li>
              </ul>
            </div>
          </aside>

          {/* Scrollable Right Column */}
          <main className="col-span-12 lg:col-span-9 space-y-2 pb-12 lg:py-6">
            {/* Item 1 */}
            <div className="space-y-4">
              <div className="w-full ">
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/play/Design.png"
                  alt="Design showcase"
                  width={800}
                  height={933}
                  priority
                  quality={90}
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className="space-y-6">
              <div className="w-full">
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/play/AOTR.gif"
                  alt="Art of the Roll"
                  width={800}
                  height={933}
                  unoptimized
                />
              </div>
            </div>

            {/* Item 3 */}
            <div className="space-y-6">
              <div className="w-full">
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/play/UnmuteCT.png"
                  alt="Unmute CT"
                  width={800}
                  height={933}
                  quality={90}
                />
              </div>
            </div>

            {/* Item 4 */}
            <div className="space-y-6">
              <div className="w-full">
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/play/Dreamscape.gif"
                  alt="Dreamscape"
                  width={800}
                  height={933}
                  unoptimized
                />
              </div>
            </div>

            {/* Item 5 */}
            <div className="space-y-6">
              <div className="w-full">
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/play/Lifedes.gif"
                  alt="Life Design"
                  width={800}
                  height={933}
                  unoptimized
                />
              </div>
            </div>

            {/* Item 6 */}
            <div className="space-y-6">
              <div className="w-full">
                <Image
                  className="rounded-xl w-full h-auto object-cover"
                  src="/play/OasisXR.gif"
                  alt="Oasis XR"
                  width={800}
                  height={933}
                  unoptimized
                />
              </div>
            </div>

          
          </main>
        </div>
      </div>
    </div>
  );
}
