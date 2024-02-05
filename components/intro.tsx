"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imgProfile from "@/public/imgprofile2.jpg";
// NEXT GOOGLE FONTS
import { roboto_mono } from "@/app/fonts";
import Link from "next/link";
// REACT ICONS
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem]  md-custom:max-w-[63rem] text-center md-custom:mb-4 scroll-mt-[100rem]">
      <div className="md-custom:flex md-custom:flex-auto md-custom:mb-10">
        <div className="flex justify-center items-center md-custom:w-[45%]">
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
                className="md-custom:h-72 md-custom:w-72 h-40 w-40 rounded-full object-cover shadow-xl border-white border-[0.15rem]"
              />
            </motion.div>
            <motion.span
              className="absolute md-custom:-right-8 bottom-0 right-0 text-6xl md-custom:-bottom-5  md-custom:text-[130px]"
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
          </div>
        </div>
        <motion.h1
          className={`${roboto_mono.className} md-custom:w-[65%] font-normal mb-10 mt-8 px-4 text-2xl !leading-[1.1] md-custom:text-3xl lg:!leading-[1.2]`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}>
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
      </div>

      <motion.div
        className={`${roboto_mono.className} sm-custom:flex md-custom:flex-row justify-center items-center md-custom:justify-between md-custom:text-6xl italic `}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}>
        <div className="mt-10 md-custom:-mt-16">
          <span className="md-custom:text-9xl md-custom:font-bold md-custom:right-6 italic">
            K<span className="md-custom:hidden translate-x-16">atemoca</span>
          </span>
          <span className="md-custom:inline-flex hidden">ate</span>
          <br />
          <a
            href="https://github.com/Katemoca"
            target="_blank"
            className="hidden md-custom:flex items-center md-custom:translate-x-40 text-[1.3rem] rounded-full focus:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer">
            <span className="md-custom:text-8xl md-custom:italic">m </span>
            <FaGithub className="md-custom:text-6xl md-custom:translate-y-3 md-custom:translate-x-3" />
            <span className="md-custom:text-8xl md-custom:translate-x-3 md-custom:italic">
              ca
            </span>
          </a>
        </div>
        <motion.div
          className={`${roboto_mono.className} flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.105,
          }}>
          <Link
            href={"#contact"}
            className="group bg-green-300  text-white px-7 py-3 rounded-full flex items-center gap-2 outline-none focus:scale-110 hover:scale-105 active:scale-105 transition">
            Contact me
            <BsArrowRight
              className=" text-white opacity-70 group-hover:translate-x-1 rounded-full h-6 w-6 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            />
          </Link>
          <a
            href="/CV.pdf"
            download
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer">
            Download CV
            <HiDownload className="opacity-80 group-hover:translate-y-1 hover:text-blue-700 transition" />
          </a>
        </motion.div>
        <motion.div
          className={`${roboto_mono.className} flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium mt-5`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.105,
          }}>
          <a
            href="https://www.linkedin.com/in/katerincastromongua/"
            target="_blank"
            className="bg-white p-4 text-gray-700  hover:text-gray-950 text-[1.2rem] flex items-center gap-2 rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer">
            <BsLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
