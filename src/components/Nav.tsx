import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

const Nav = () => {
  const navMotion = {
    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
  };
  const navLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Blog", href: "/blog", id: 2 },
    { name: "Contact", href: "/contact", id: 3 },
  ];
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width:1280px)");
  return (
    <nav className="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src="/avatar.png" alt="profile" />
      </div>
      {matches && (
        <h1 className="text-lg font-bold">
          <a href="/">Hua.</a>
        </h1>
      )}

      {matches && (
        <div className="flex items-center justify-center gap-12">
          <a href="/" className="text-lg font-bold">
            Home
          </a>
          <a href="/services" className="text-lg font-bold">
            Services
          </a>
          <a href="/contact" className="text-lg font-bold">
            Contact
          </a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            className="flex flex-col gap-24 text-lg"
            variants={navMotion}
            animate="visible"
            initial="hidden"
          >
            <motion.a
              variants={itemMotion}
              href="/"
              className="text-lg font-bold"
            >
              Home
            </motion.a>
            <motion.a
              variants={itemMotion}
              href="/services"
              className="text-lg font-bold"
            >
              Services
            </motion.a>
            <motion.a
              variants={itemMotion}
              href="/contact"
              className="text-lg font-bold"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
