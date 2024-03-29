import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

//IMAGES FROM THE PUBLIC FOLDER
import healthplus from "@/public/healthplus (1).png";
import videogames from "@/public/videogames.png";



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
    date: "2022-2023",
  },

  {
    title: "Full-Stack Developer",
    location: "Beltsville, MD",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, JavaScript,  TypeScript, Tailwind, MongoDB, PostgreSQL, CSS, Hmtl, and Express.js. I'm open to full-time interships and opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HealthPlus",
    description:
      "I worked as a frontend developer on this group project for 2 months. Users can access to a healthcare service by making appointments, choosing their doctors of preference, setting the place and date for the appointments, write reviews, etc.",
    tags: ["Javascript", "React", "Firebase", "Tailwind", "Redux", "React I18next", "Leaflet", "Cloudinary", "Toastify" ],
    imageUrl: healthplus,
    url: "https://healthplus-henry.netlify.app/"
  },
  {
    title: "Videogames",
    description:
      "This is a Single Page Application (SPA) about video games, built with the PERN stack (PostgreSQL, Express, React, and Node.js). It uses CSS for styling and includes features like CRUD operations, a controlled form, filters, sorting, and a search bar. The SPA fetches data from the “https://rawg.io” API via a Node.js and Express backend, which adds new functionalities to the original API.",
    tags: ["React", "Javascript", "Module css", "Css", "Redux", "Express", "PostgreSQL", "Sequelize"],
    imageUrl: videogames,
    url:"https://deploy-eight-olive.vercel.app/"
  },
 
] as const;

export const techSkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;


export const softSkillsData = [
  "Teamwork",
  "Attention to detail",
  "Strong communication skills",
  "Problem solving",
  "Creativity",
  "Adaptability"
  ] as const;

