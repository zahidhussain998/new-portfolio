import React from "react";
import { ShowMore } from '@re-dev/react-truncate'


// Helper function to get the formatted date


const projectsData = [
  {
    id: 1,
    img: "2.jpg",
    title: "News Application",
    dis: "Discover the latest news with our cutting-edge news app built using TypeScript, Next.js, Tailwind CSS, and GraphQL. Stay informed with real-time updates, explore various news categories",
    tag1: "Next.js",
    tag2: "GraphQl",
    tag3: "Typescript",
    button: "Source Code",
    date: "2023/3/3",
    a: "https://github.com/zahidhussain998/news-application",
  },
  {
    id: 2,
    img: "3.jpg",
    title: "Netflix Clone",
    dis: "Experience the magic of the world's leading streaming platform with our Netflix clone project. Built using cutting-edge technologies such as React, Tailwind CSS, Redux, and IMDb APIs",
    tag1: "React.js",
    tag2: "Tailwindcss",
    tag3: "Typescript",
    button: "Source Code",
    date: "2023/4/5",
    a: "https://github.com/zahidhussain998/netflix-clone",
  },
  {
    id: 3,
    img: "4.jpg",
    title: "Tesla Clone",
    dis: "I am thrilled to have worked on this Tesla clone project, and I am confident in my ability to deliver exceptional results. Let's collaborate to bring your ideas to life and create an impressive clone of the Tesla website.",
    tag1: "React.js",
    tag2: "Javascript",
    tag3: "Tailwindcss",
    button: "Source Code",
    date: "2023/6/22",
    a: "https://github.com/zahidhussain998/tesla-clone",
  },
  {
    id: 4,
    img: "5.jpg",
    title: "Radiant Pulse",
    dis: "Radiant Pulse is a dynamic blog website that showcases a diverse range of content and insights on various topics. Powered by Next.js and backed by Sanity CMS, it offers a seamless and immersive user experience.",
    tag1: "Next.js",
    tag2: "CMS",
    tag3: "Sanity.io",
    button: "Source Code",
    date: "2023/9/11",
    a: "https://github.com/zahidhussain998/radiant-pulse",
  },
  {
    id: 4,
    img: "landing.png",
    title: "Animated-landing Page",
    dis: "is a visually engaging web application built with React.js, utilizing Clerk for authentication, Tailwind CSS for responsive and modern styling, and Framer Motion for dynamic animations.",
    tag1: "clerk auth,",
    tag2: "frama-motion",
    tag3: "tailwindcss",
    button: "Source Code",
    date: "2024/5/15",
    a: "https://github.com/zahidhussain998/Animated-Landing-Page",
  },
  {
    id: 4,
    img: "chess.png",
    title: "Chess Simple",
    dis: "Developed a fully functional chess game with real-time multiplayer capabilities, The application features a responsive design and seamless user experience leveraging modern web technologies. Implemented game state management, move validation, and real-time updates",
    tag1: "websocket,",
    tag2: "typescript,",
    tag3: "chess.js",
    button: "Source Code",
    date: "2024/6/24",
    a: "https://github.com/zahidhussain998/simple-chess",
  },
  // Add more projects as needed
];

function Projects({ projects }) {
  return (
    <section className="px-6 sm:px-12 py-6">
      <h1 className="text-3xl mb-6 uppercase font-extrabold">Projects</h1>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 flex flex-col overflow-hidden shadow-white"
          >
            <img
              className="object-cover w-full h-40 rounded-t-lg"
              src={project.img}
              alt={`Project ${project.id}`}
            />
            <div className="p-5 flex flex-col flex-grow">
              <a href={project.a} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400 flex-grow overflow-hidden ">
              </p>
              <ShowMore lines={3}>{project.dis} </ShowMore>
              <ul className="flex flex-wrap gap-2 mb-4">
                <li>
                  <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal">
                    {project.tag1}
                  </span>
                </li>
                <li>
                  <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal">
                    {project.tag2}
                  </span>
                </li>
                <li>
                  <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal">
                    {project.tag3}
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <a
                  href={project.a}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                >
                  {project.button}
                </a>
                <div className="text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {project.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return <Projects projects={projectsData} />;
}
