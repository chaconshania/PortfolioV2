"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: show ? 0 : -80 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
      >
        <div className="relative grid grid-cols-2 lg:grid-cols-3 p-6 w-full gap-12 items-center">
          <Link href="/">
            <h2 className="text-sm">SHANIA CHACON</h2>
          </Link>

          <div className="sr-only lg:not-sr-only lg:text-center">
            <h2 className="text-sm">PRODUCT DESIGNER</h2>
          </div>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <div className="flex justify-end lg:hidden">
            <button onClick={() => setOpen(!open)} className="p-2">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sticky inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden"
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
    </>
  );
}
