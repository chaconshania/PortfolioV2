import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 p-6 w-full gap-12">
      <div className="">
        <h2 className="text-sm">CODED + DESIGNED BY ME</h2>
      </div>
      <div className="text-end lg:text-end">
        <ul className="flex flex-row gap-4 justify-end">
          <li>
            <a href="mailto:chacon1shania@gmail.com" className="hover:underline">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shania-chacon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
