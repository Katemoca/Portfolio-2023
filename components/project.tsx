"use client"; // enables the use of browser APIs and client-side interactivity.
import { useRef } from "react"; // A React hook that creates a reference to a DOM element, which can be used to access the element directly.
import { projectsData } from "@/lib/data"; // My dataset
import { motion, useScroll, useTransform } from "framer-motion"; // useScroll => This is a function (hook)provided by Framer Motion that allows you to track the scroll progress of an element.
import Image from "next/image";
import { roboto_mono } from "@/app/fonts";

// A TypeScript type definition that extracts the type of a single project from the projectsData array.
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0 mt-2 sm:mt-5"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}>
      <section
        className={`${roboto_mono.className} bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-gray-600/70`}>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">
            <a href={url} target="_blank">
              {title}
            </a>
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-100/80">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className={`${roboto_mono.className} bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full mt-4`}
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="The project I work on"
          quality={95}
          className="absolute hidden sm:block top-8 translate-y-20 -right-40 w-[28.25rem] h-[20rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.20]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
  
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
  
          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
