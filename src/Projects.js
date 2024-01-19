import React from "react";

// Helper function to get the formatted date
const getDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const projectsData = [
  {
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
    id: 1,
    img: "3.jpg",
    title: "Netflix Clone",
    dis: "Experience the magic of the world's leading streaming platform with our Netflix clone project. Built using cutting-edge technologies such as React, Tailwind CSS, Redux, and IMDb APIs,",
    tag1: "React.js",
    tag2: "Tailwindcss",
    tag3: "Typescript",
    button: "Source Code",
    date: "2023/4/5",
  },
  {
    id: 1,
    img: "4.jpg",
    title: "Tesla clone",
    dis: "I am thrilled to have worked on this Tesla clone project, and I am confident in my ability to deliver exceptional results. Let's collaborate to bring your ideas to life and create an impressive clone of the Tesla website.",
    tag1: "React.js",
    tag2: "Javascript",
    tag3: "Tailwindcss",
    button: "Source Code",
    date: "2023/6/22",
  },
  {
    id: 1,
    img: "5.jpg",
    title: "Radiant Pulse",
    dis: "Radiant Pulse is a dynamic blog website that showcases a diverse range of content and insights on various topics. Powered by Next.js and backed by Sanity CMS, it offers a seamless and immersive user experience.",
    tag1: "Next.js",
    tag2: "CMS",
    tag3: "Sanity.io",
    button: "Source Code",
    date: "23/9/11",
  },
 

  // Add more projects as needed
];

function Projects({ projects }) {
  return (
    <section className="px-6 sm:px-12 py-6 ">
      <h1 className="text-3xl mb-6 uppercase font-extrabold">Projects</h1>
      <div className="flex flex-row flex-wrap gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full"
          >
            <img
              className="object-cover w-full h-40 rounded-t-lg"
              src={project.img}
              alt={`Project ${project.id}`}
            />
            <div className="p-5 h-full">
              <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.dis}
              </p>
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-5 gap-3">
                  <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0 mt-3">
                    {project.tag1}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0 mt-3">
                    {project.tag2}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0 mt-3">
                    {project.tag3}
                  </span>
                </li>
              </ul>
              <div className="flex flex-row items-center">
                <div className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-4 bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300">
                  <a href={project.a} target="_blank" rel="noopener noreferrer">
                    {project.button}
                  </a>
                </div>

                <div className="text-xs text-gray-500">
                  <div className="flex flex-row items-center">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    <div>{project.date}</div>
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
