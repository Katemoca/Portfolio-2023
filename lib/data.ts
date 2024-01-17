import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

//!IMAGES FROM THE PUBLIC FOLDER
import healthplus from "@/public/healthplus (1).png";
import rmtdevImg from "@/public/rmtdev.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Henry bootcamp",
    location: "Bogota DC, Colombia",
    description:
      "I graduated after 8 months of studying. I took part of a group project to develop a fullstack app called HealthPlus. Besides, I immersed myself in the process of creating my first individual project called Videogames.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HealthPlus",
    description:
      "I worked as a frontend developer on this group project for 2 months. Users can access to a healthcare service by lmaking appointments, choosing their doctors of preference, setting the place and date for the appointments, and more.",
    tags: ["Javascript", "React", "Firebase", "Tailwind", "Redux", "React I18next", "Leaflet" ],
    imageUrl: healthplus,
  },
  {
    title: "Videogames",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Javascript", "Module css", "Css", "Redux", "Express", "PostgreSQL", "Sequelize"],
    imageUrl: rmtdevImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;