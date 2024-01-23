"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mt-28 sm:mt-20 mb-28">
      <SectionHeading>Contact</SectionHeading>
    </section>
  );
}
