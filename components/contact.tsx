"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { roboto_mono } from "@/app/fonts";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmails";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className={`${roboto_mono.className} scroll-mt-28 mt-[112px] mb-28 w-[min)(100%,38rem)] text-center`}
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
          className="hover:text-white font-bold"
          href="mailto:katerinmonguacastro@gmail.com">
          katerinmonguacastro@gmail.com
        </a>{" "}
        or here.
      </p>
      {/* Below we're passing a server action to a client component but as a prop with the action */}
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent");
        }}>
        <input
          className="h-14 px-4 rounded-lg borderPurple"
          name="senderEmail"
          placeholder="Your email"
          required
          type="email"
          maxLength={500}></input>
        <textarea
          className="h-52 my-3 borderPurple px-2 py-2 rounded-lg"
          name="message"
          placeholder="Write your message here"
          required
          maxLength={5000}
        />
        <div className="flex items-center justify-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
