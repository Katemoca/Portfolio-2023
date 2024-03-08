"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-8 mt-28 sm:mb-12">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="" className="timeline">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: theme === "light" ? "" : "rgba(255, 255, 255, 0.9)",
              }}
              visible={inView}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}>
              <h3 className="font-semibold capitalize dark:text-white/50">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 dark:text-white/50">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
