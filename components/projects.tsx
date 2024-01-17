import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mt-28 sm:mt-20 mb-28">
      <SectionHeading>Projects i love</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
