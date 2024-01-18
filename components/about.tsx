"use client";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      className="w-[35rem] h-[35rem] rounded-full px-6 py-6 scroll-mt-32 mt-20 sm:mt-8 mb-28 sm:mb-2 text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      id="about">
      <div className="relative z-10">
        <SectionHeading>About</SectionHeading>
        <p className="mb-3 mt-8 text-wrap px-3 text-lg sm:text-xl">
          After graduating with a degree in
          <span className="text-wrap">{` Spanish and Foreign Languages (English and French)`}</span>
          . I decided to pursue my passion for programming. I enrolled in a
          coding bootcamp{" "}
          <a
            className="text-wrap text-xl"
            href="https://www.soyhenry.com/"
            target="_blank">{`(Soy Henry)`}</a>{" "}
          and learnt{" "}
          <span className="font-bold">full-stack web development</span>.
          <span>
            {" "}
            My favorite part of <span className="italic">programming</span>
          </span>{" "}
          is to solve different problems and come up with creative ideas for
          building up projects that people can take advantage of. My core stack
          is{" "}
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            React
          </span>
          ,
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            Next.js
          </span>
          ,
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            Node.js
          </span>
          ,
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            MongoDB
          </span>
          ,
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            PostgreSQL
          </span>
          ,{" "}
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            PostgreSQL
          </span>
          ,{" "}
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:h-8  hover:p-2 hover:text-black rounded-full">
            Express.js
          </span>
          . {`I'm also familiar with`}{" "}
          <span className="italic hover:not-italic hover:bg-gradient-to-r from-purple-400 via-pink-500  to-purple-400 hover:bg-opacity-90 hover:h-8 hover:rounded-full hover:p-2 hover:text-black">
            Javascript and Typescript
          </span>
          .{" "}
          {`I'm always interested in learning new technologies. I'm currently looking
        for a `}
          <span className="font-medium">full-time position or intership</span>{" "}
          as a software developer.
        </p>
      </div>
      <div className="absolute w-[35rem] h-[35rem] rounded-full border-green-300 border-8 border-solid bg-gradient-to-tr from-purple-400 via-pink-300 to-purple-400 blur-[60px] z-1 -translate-x-[12px] -translate-y-[500px]"></div>
    </motion.section>
  );
}
