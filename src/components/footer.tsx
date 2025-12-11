import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 p-6 w-full gap-12">
      <div className="flex items-center gap-2">
        <h2 className="text-sm">CODED + DESIGNED BY ME</h2>
        <Heart className="h-4 w-4" />
      </div>
      <div className="text-end lg:text-end">
        <ul className="flex flex-row gap-4 justify-end">
          <li>
            <a href="mailto:chacon1shania@gmail.com" className="hover:underline">
              EMAIL
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shania-chacon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
