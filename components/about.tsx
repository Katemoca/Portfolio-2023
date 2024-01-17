"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-[45rem] scroll-mt-28 mt-20 sm:mt-8 mb-28 sm:mb-2 text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium">{` Spanish and Foreign Languages (English and French)`}</span>
        . I decided to pursue my passion for programming. I enrolled in a coding
        bootcamp{" "}
        <a
          className="font-medium hover:bg-green-300  hover:h-8 hover:rounded-full hover:p-2 hover:text-white"
          href="https://www.soyhenry.com/"
          target="_blank">{`(Soy Henry)`}</a>{" "}
        and learnt <span className="font-bold">full-stack web development</span>
        .
        <span>
          {" "}
          My favorite part of <span className="italic">programming</span>
        </span>{" "}
        is to solve different problems and come up with creative ideas for
        building up projects that people can take advantage of. My core stack is{" "}
        <span className="italic hover:not-italic hover:bg-green-300  hover:h-8 hover:rounded-full hover:p-2 hover:text-white">
          React, Next.js, Node.js, MongoDB, PostgreSQL, Express.js
        </span>
        . {`I'm also familiar with`}{" "}
        <span className="italic hover:not-italic hover:bg-green-300 hover:h-8 hover:rounded-full hover:p-2 hover:text-white">
          Javascript and Typescript
        </span>
        .{" "}
        {`I'm always looking to learn new technologies. I'm currently looking
        for a `}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
