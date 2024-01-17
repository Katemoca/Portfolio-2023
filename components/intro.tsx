"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import imgProfile from "@/public/imgprofile2.jpg";
//! NEXT GOOGLE FONTS
import { roboto_mono } from "@/app/fonts";
import Link from "next/link";
//! REACT ICONS
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}>
            <Image
              src={imgProfile}
              alt="Katerin image profile"
              width="195"
              height="195"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover shadow-xl border-white border-[0.35rem]"
            />
          </motion.div>
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-4xl flex -space-x-3">
            <motion.span
              className={` ${roboto_mono.className} bg-[#007BFF] px-3 py-1 rounded-lg  sm:text-2xl text-white font-extrabold`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              2
            </motion.span>
            <motion.span
              className="px-3 py-1 rounded-lg mx-2 sm:text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              💐
            </motion.span>
            <motion.span
              className={` ${roboto_mono.className} bg-[#007BFF] px-3 py-1 rounded-lg mx-2 sm:text-2xl text-white font-extrabold`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              0️
            </motion.span>
            <motion.span
              className="px-3 py-1 rounded-lg mx-2 sm:text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              💐
            </motion.span>
            <motion.span
              className={` ${roboto_mono.className} bg-[#007BFF] px-3 py-1 rounded-lg mx-2 sm:text-2xl text-white font-extrabold`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              2️
            </motion.span>
            <motion.span
              className="px-3 py-1 rounded-lg mx-2 sm:text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              💐
            </motion.span>
            <motion.span
              className={` ${roboto_mono.className} bg-[#007BFF] px-3 py-1 rounded-lg mx-2 sm:text-2xl text-white font-extrabold`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              4️
            </motion.span>
          </div>
        </div>
      </div>
      <motion.h1
        className={`${roboto_mono.className} font-normal mb-10 mt-8  px-4 text-2xl !leading-[1.1] sm:text-2xl lg:!leading-[1.2]`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}>
        <span className="font-bold">{`Hi, I'm Katerin Castro. `}</span>
        {`I'm a `}
        <span className="font-bold">{`full-stack developer `}</span>
        with
        <span>{` 1 year`}</span> of experience. I enjoy building
        <span className="italic">{` sites & apps`}</span>. My focus is{" "}
        <span className="underline">{`React.js`}</span>.{" "}
        {`I've also worked with the `}
        <span className="font-bold">MERN and PERN</span> stacks.
      </motion.h1>

      <motion.div
        className={`${roboto_mono.className} flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.105,
        }}>
        <Link
          href={"#contact"}
          className="group bg-[#007BFF] text-white px-7 py-3 rounded-full flex items-center gap-2 outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition">
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 rounded-full h-6 w-6 transition hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer">
          Download CV
          <HiDownload className="opacity-80 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://github.com/Katemoca"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full focus:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack">
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/katerincastromongua/"
          target="_blank"
          className="bg-white p-4 text-gray-700  hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack">
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
