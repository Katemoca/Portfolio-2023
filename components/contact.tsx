"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { roboto_mono } from "@/app/fonts";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className={`${roboto_mono.className}scroll-mt-28 mt-28 sm:mt-20 mb-28 w-[min)(100%,38rem)] text-center`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-black -mt-6">
        You can contact me directly at{" "}
        <a
          className="hover:text-purple-700"
          href="mailto:katerinmonguacastro@gmail.com">
          katerinmonguacastro@gmail.com
        </a>{" "}
        or here.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg borderPurple"
          placeholder="Your email"></input>
        <textarea
          className="h-52 my-3 borderPurple px-2 py-2 rounded-lg"
          name="message"
          placeholder="Write your message here"
          required
        />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="group h-[3rem] w-[8rem] bg-purple-700 rounded-full text-white outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-purple-950 active:scale-105">
            Submit
          </button>
        </div>
      </form>
    </motion.section>
  );
}
