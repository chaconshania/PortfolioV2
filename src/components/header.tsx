"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  // no scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { name: "WORK", href: "/" },
    { name: "PLAY", href: "/play" },
    { name: "ABOUT", href: "/about" },
  ];

  const linkClass = (href: string) =>
    `text-sm transition-opacity ${
      pathname === href ? "text-[#999999]" : "hover:opacity-70"
    }`;

  return (
    <>
      {/* Navbar */}
      <nav className="relative bg-white/30 backdrop-blur-[2px] border-b border-gray-200">
        <div className="relative grid grid-cols-2 lg:grid-cols-3 p-4 w-full gap-12 items-center">
          <Link href="/">
            <h2 className="text-sm">SHANIA CHACON</h2>
          </Link>

          <div className="sr-only lg:not-sr-only lg:text-center">
            <h2 className="text-sm">PRODUCT DESIGNER</h2>
          </div>

          <div className="hidden lg:block text-end">
            <ul className="flex gap-6 justify-end">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 focus-visible:ring-2 focus-visible:ring-black rounded"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md "
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`text-3xl ${
                      pathname === item.href ? "text-[#999999]" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
