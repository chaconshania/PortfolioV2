"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    `text-sm transition ${
      pathname === href ? "text-[#999999]" : "hover:opacity-70"
    }`;

  return (
    <>
      {/* Top navbar */}
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
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
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
            <button onClick={() => setOpen(!open)} className="p-2">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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

      {/* ── Bottom dock navbar (saved for later) ──────────────────────────────
      import { useReducedMotion } from "framer-motion";
      import { Briefcase, Sparkles, User } from "lucide-react";

      const dockItems = [
        { name: "Work",  href: "/",      icon: Briefcase },
        { name: "Play",  href: "/play",  icon: Sparkles  },
        { name: "About", href: "/about", icon: User      },
      ];

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-2 shadow-lg">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="group relative">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  {item.name}
                </span>
                <Link
                  href={item.href}
                  aria-label={item.name}
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-150 ${
                    isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
          <div className="mx-1 h-5 w-px bg-gray-200" />
          <a
            href="mailto:chacon1shania@gmail.com"
            className="rounded-full bg-black px-4 py-2 text-xs text-white transition-opacity duration-150 hover:opacity-75"
          >
            Contact me
          </a>
        </div>
      </motion.div>
      ─────────────────────────────────────────────────────────────────────── */}
    </>
  );
}
