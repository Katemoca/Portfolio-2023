"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mt-28 sm:mt-20 mb-28">
      <SectionHeading>Experience</SectionHeading>
    </section>
  );
}
