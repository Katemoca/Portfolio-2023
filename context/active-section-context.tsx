"use client";

import { SectionName } from "@/lib/types";
//! SHORT EXPLANATION
// This file defines a React context named ActiveSectionContext and a custom hook useActiveSectionContext that provides an easy way to access this context.

// The ActiveSectionContext is used to keep track of which section of your app is currently active or being viewed by the user. It also keeps track of the time of the last click event. This context is provided to the rest of your app through the ActiveSectionContextProvider component.

import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

//! THIS IS THE CONTEXT

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export function useActiveSectionContext() {}
