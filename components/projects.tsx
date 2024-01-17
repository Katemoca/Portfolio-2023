import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mt-8 sm:mt-8 mb-28 sm:mb-2">
      <SectionHeading>Projects i love</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}></React.Fragment>
        ))}
      </div>
    </section>
  );
}
