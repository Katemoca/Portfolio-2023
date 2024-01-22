"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

// Type of the children that are passed on as props
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Type of the section that is shown on the viewport
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Here we need to create the CONTEXT
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// This is the PROVIDER OF THE CONTEXT
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

// We create a custom hook to use the Context with the useContext hook provided by React.

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
}
