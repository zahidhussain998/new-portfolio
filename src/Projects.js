import React from "react";
import { ShowMore } from '@re-dev/react-truncate'

const projectsData = [
  {
    id: 0,
    img: "pomodoro.png",
    title: "Pomodoro",
    dis: "A feature-rich Pomodoro timer application with task management and productivity tracking. Built with Next.js and TypeScript, utilizing Supabase for backend services and real-time data sync, with Redux managing application state for seamless timer functionality and persistent user sessions.",
    tag1: "TypeScript",
    tag2: "Stripe",
    tag3: "Supabase",
    button: "Live Link",
    date: "2025/2/22",
    a: "https://pomodoro-zahidhussain998-zahidhussain998s-projects.vercel.app/",
  },
  {
    id: 1,
    img: "task.png",
    title: "task management",
dis: "A modern task management app with drag-and-drop functionality built using dnd-kit. Features smooth animations, intuitive board organization, and efficient state management for seamless task tracking and productivity.",
    tag1: "dnd-kit",
    tag2: "next.js",
    tag3: "state-management",
    button: "Live Link",
    date: "2025/3/24",
    a: "https://taskms-zahidhussain998-zahidhussain998s-projects.vercel.app/",
  },
    {
    id: 3,
    img: "booking.png",
    title: "booking-system",
dis: "Complete booking solution with live slot availability, secure Stripe payments, and automatic Google Calendar scheduling. Users receive instant email confirmations via Resend, all wrapped in a beautiful Aceternity UI for effortless reservations",
    tag1: "supabase",
    tag2: "redux-thunk",
    tag3: "stripe",
    button: "Source Code",
    date: "2025/3/24",
    a: "https://github.com/zahidhussain998/Booking-System",
  },
  {
    id: 4,
    img: "2.jpg",
    title: "News Application",
    dis: "Discover the latest news with our cutting-edge news app built using TypeScript, Next.js, Tailwind CSS, and GraphQL. Stay informed with real-time updates, explore various news categories",
    tag1: "Next.js",
    tag2: "GraphQl",
    tag3: "Typescript",
    button: "Link",
    date: "2023/3/3",
    a: "https://cn-news-nine.vercel.app/",
  },
  {
    id: 5,
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
    id: 6,
    img:"4.jpg",
    title: "Tesla Clone",
    dis: "I am thrilled to have worked on this Tesla clone project, and I am confident in my ability to deliver exceptional results. Let's collaborate to bring your ideas to life and create an impressive clone of the Tesla website.",
    tag1: "React.js",
    tag2: "Javascript",
    tag3: "Tailwindcss",
    button: "Link",
    date: "2023/6/22",
    a: "https://tesla-clone-seven-black.vercel.app/",
  },
  {
    id: 7,
    img: "5.jpg",
    title: "Netialap.com",
    dis: "netialap.com is a dynamic blog website that showcases a diverse range of content and insights on various topics. Powered by Next.js and backed by Sanity CMS, it offers a seamless and immersive user experience.",
    tag1: "Next.js",
    tag2: "CMS",
    tag3: "Sanity.io",
    button: "Source Code",
    date: "2024/9/11",
    a: "https://github.com/zahidhussain998/radiant-pulse",
  },
  {
    id: 8,
    img: "landing.png",
    title: "Animated-landing Page",
    dis: "is a visually engaging web application built with React.js, utilizing Clerk for authentication, Tailwind CSS for responsive and modern styling, and Framer Motion for dynamic animations.",
    tag1: "clerk auth",
    tag2: "frama-motion",
    tag3: "tailwindcss",
    button: "Live Link",
    date: "2024/5/15",
    a: "https://landingpage-nine-gamma.vercel.app/",
  },
  {
    id: 9,
    img: "chess.png",
    title: "Chess Simple",
    dis: "Developed a fully functional chess game with real-time multiplayer capabilities, The application features a responsive design and seamless user experience leveraging modern web technologies. Implemented game state management, move validation, and real-time updates",
    tag1: "websocket",
    tag2: "typescript",
    tag3: "chess.js",
    button: "Source Code",
    date: "2024/6/24",
    a: "https://github.com/zahidhussain998/simple-chess",
  },
];

function Projects({ projects }) {
  return (
    <section className="min-h-screen bg-white py-12 font-satoshi">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header Section */}
    
        {/* Projects Grid with Border-Divide */}
        <div className="border-divide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="border-divide group relative overflow-hidden border-r border-b border-l border-t last:border-r-0 md:nth-child-2n:border-r-0 lg:nth-child-2n:border-r lg:nth-child-3n:border-r-0"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-6 flex flex-col h-full">
                
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 border border-gray-200 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.img}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Title */}
                <a 
                  href={project.a} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mb-3"
                >
                  <h5 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h5>
                </a>

                {/* Project Description */}
                <div className="mb-4 flex-grow text-gray-700">
                  <ShowMore lines={3}>{project.dis}</ShowMore>
                </div>

                {/* Technology Tags */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  <li>
                    <span className="inline-block border border-gray-300 rounded-md px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      {project.tag1}
                    </span>
                  </li>
                  <li>
                    <span className="inline-block border border-gray-300 rounded-md px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      {project.tag2}
                    </span>
                  </li>
                  <li>
                    <span className="inline-block border border-gray-300 rounded-md px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                      {project.tag3}
                    </span>
                  </li>
                </ul>

                {/* Bottom Section - Button and Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <a
                    href={project.a}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border-2 border-black text-black py-2 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    {project.button}
                  </a>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {project.date}
                  </div>
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 group-hover:via-black transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        
      </div>
    </section>
  );
}

export default function App() {
  return <Projects projects={projectsData} />;
}