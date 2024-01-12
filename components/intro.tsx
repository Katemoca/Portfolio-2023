"use client";

import Image from "next/image";
import React from "react";
import { motion, spring } from "framer-motion";
import imgProfile from "@/public/imgprofile2.jpg";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              2️⃣
            </motion.span>
            <motion.span
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              0️⃣
            </motion.span>
            <motion.span
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              2️⃣
            </motion.span>
            <motion.span
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}>
              4️⃣
            </motion.span>
          </div>
        </div>
      </div>
      <motion.p
        className={`${roboto_mono.className} font-normal mb-10 mt-10 px-4xl text-2xl !leading-[1.1] sm:text-4xl lg:!leading-[1.2]`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <span className="font-bold">{`Hi, I'm Katerin Castro. `}</span>
        {`I'm a `}
        <span className="font-bold">{`full-stack developer `}</span>
        with
        <span>{` 1 year`}</span> of experience. I enjoy building
        <span className="italic">{` sites & apps`}</span>. My focus is{" "}
        <span className="underline">{`React.js`}</span>.{" "}
        {`I've also worked with the `}
        <span className="font-bold">MERN and PERN</span> stacks.
      </motion.p>
    </section>
  );
}
