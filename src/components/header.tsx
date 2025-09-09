import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      {/* Blurred background layer */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" />

      {/* Content layer */}
      <div className="relative grid grid-cols-2 lg:grid-cols-3 p-6 w-full gap-12">
        <Link href="/">
          <h2 className="text-sm">SHANIA CHACON</h2>
        </Link>
        <div className="sr-only lg:not-sr-only lg:text-center">
          <h2 className="text-sm">PRODUCT DESIGNER</h2>
        </div>
        <div className="text-end lg:text-end">
          <ul className="flex gap-6 justify-end">
            <li>
              <Link className="text-sm" href="/">
                WORK
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="/play">
                PLAY
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="/about">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
