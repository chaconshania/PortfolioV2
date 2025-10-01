import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 p-6 w-full gap-12">
      <div className="">
        <h2 className="text-sm">CODED + DESIGNED BY ME</h2>
      </div>
      <div className="text-end lg:text-end">
        <ul className="">
          <li>
            <Link href="/">2025</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
