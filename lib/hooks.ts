import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; //import { useInView } from "react-intersection-observer";: This line is importing the useInView hook from the react-intersection-observer library. This hook provides a way to use the Intersection Observer API, which can detect when an element becomes visible or hidden on the page3.
import { SectionName } from "./types";


//! export function useSectionInView(sectionName: SectionName, threshold = 0.75) { ... }: This line is defining a new custom React Hook named useSectionInView. This hook takes two parameters: sectionName (the name of a section) and threshold (a value between 0 and 1 that determines how much of the element should be visible before it’s considered “in view”). The threshold parameter has a default value of 0.753.


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });

}