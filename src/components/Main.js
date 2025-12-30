import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import About from "./About";
import { motion } from "framer-motion";


function Main() {
  return (
     
  
<div className="space-y-24 max-w-8xl self-stretch m-auto w-full">
<div className="text-center max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row">
      <motion.div
      
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  }}

      className="flex justify-between items-center flex-col sm:flex-col md:flex-col lg:flex-row gap-20">

     <div
  className="font-satoshi text-5xl text-center sm:text-center lg:text-9xl"

>
  <img 
  src="mys.jpg"
  className="h-44 w-44 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-96 lg:w-96 rounded-full object-cover mx-auto"
/>
  </div>



      <div className="text-left space-y-2  ">
    <h1 className="font-satoshi  text-5xl   sm:text-4xl md:text-8xl lg:text-8xl  leading-none space-y-2 text-center sm:text-center lg:text-left">
                {/* WHY: text-9xl creates bold, impossible-to-miss headline */}
                {/* WHY: bg-clip-text text-transparent creates gradient text effect */}
                {/* WHY: leading-none removes extra spacing for impact */}
                Front-End
              </h1>
              <h1 className="font-satoshi sm:text-center  md:text-8xl lg:text-8xl  text-5xl   sm:text-3xl leading-none text-center lg:text-left ">
                Developer
              </h1>{/* <p className="text-left "> Based in Pakistan</p> */}


     <div>

<p className="my-8 font-satoshi text-xl text-center md:text-3xl lg:text-3xl  max-w-3xl leading-tight sm:text-lg sm:text-center lg:text-left">
              {/* WHY: Slightly smaller text creates visual hierarchy */}
              {/* WHY: gray-700 is softer than pure black for secondary text */}
              I focus on products that <span className="font-bold  border-b-2 border-black">load fast</span>, 
              <span className="font-bold  border-b-2 border-black"> look sharp</span>,<br/> and 
              <span className="font-bold  border-b-2 border-black"> feel smooth</span>.
              {/* WHY: border-b-2 underlines key benefits */}
              {/* WHY: font-bold makes important words stand out */}
            </p>        
     </div>

        
                <div className="flex gap-3  justify-center sm:justify-start ">
              {/* WHY: gap-3 keeps icons close together */}
              {/* WHY: pt-4 adds breathing room from subtitle */}
              
               <a 
                href="https://www.linkedin.com/in/zahid-husssain-685b91240/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="relative p-3 rounded-xl  hover:bg-black transition-all duration-300 group overflow-hidden"
              >
                {/* WHY: p-3 increases click area for better UX */}
                {/* WHY: rounded-xl creates modern, softer corners */}
                {/* WHY: overflow-hidden clips the slide animation */}
                
                {/* Slide effect background */}
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                {/* WHY: Slide-in effect from left creates dynamic hover */}
                {/* WHY: transform -translate-x-full hides it off-screen initially */}
                
                <svg width="28" height="28" viewBox="0 0 24 24" className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" stroke="currentColor" fill="none" strokeWidth="1.5">
                  {/* WHY: Larger icon (28x28) is more visible and modern */}
                  {/* WHY: z-10 keeps icon above background animation */}
                  {/* WHY: rotate-6 adds playful tilt on hover */}
                  {/* WHY: stroke instead of fill creates cleaner look */}
                  
                  <rect x="3" y="3" width="18" height="18" rx="2" className="group-hover:stroke-white transition-colors"/>
                  <path d="M8 11v6M8 8v.01M12 16v-4M12 12c0-1 .5-2 2-2s2 1 2 2v4" className="group-hover:stroke-white transition-colors"/>
                  {/* WHY: Simple line-based design is cleaner and more modern */}
                  {/* WHY: stroke-white on hover creates nice contrast */}
                </svg>
              </a>


              <a 
                href="https://github.com/zahidhussain998" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="p-3  rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:scale-110">
                  <path fill="currentColor" d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.3-3.5-1.3-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 .9.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-1.2 3-.9 3-.9.6 1.7.2 2.9.1 3.2.7.8 1.1 1.8 1.1 3 0 4.1-2.4 5-4.7 5.3.3.3.5.8.5 1.6v2.3c0 .3.2.6.7.5 4.2-1.4 7.2-5.3 7.2-9.9C23.1 5.3 18.3.5 12 .5z"/>
                </svg>
              </a>

              <a 
                href="https://twitter.com/zahidzahidhuss2" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="p-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:scale-110">
                  <path fill="currentColor" d="M22.46 6c-.77.35-1.6.59-2.46.7a4.2 4.2 0 0 0 1.84-2.3 8.4 8.4 0 0 1-2.66 1.02 4.18 4.18 0 0 0-7.12 3.81A11.85 11.85 0 0 1 3.16 4.6a4.17 4.17 0 0 0 1.29 5.58 4.1 4.1 0 0 1-1.9-.53v.05a4.18 4.18 0 0 0 3.35 4.1 4.2 4.2 0 0 1-1.89.07 4.19 4.19 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 19.54a11.8 11.8 0 0 0 6.29 1.84c7.55 0 11.69-6.26 11.69-11.69l-.01-.53A8.36 8.36 0 0 0 22.46 6z"/>
                </svg>
              </a>
              </div>

  <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6 justify-center lg:justify-start">
  {/* Projects Button */}
  <a
  href="/projects"
  className="group relative inline-block rounded-xl p-[2px] overflow-hidden"
>
  {/* Rotating border */}
  <span
    className="absolute inset-0 animate-rotate-border 
    bg-[conic-gradient(from_0deg,#95abb2,transparent_120deg,#95abb2)]"
  ></span>

  {/* Inner button */}
  <span
    className="relative flex items-center justify-center gap-2 
    rounded-xl bg-black px-6 py-3 sm:px-8 sm:py-4
    text-white font-satoshi text-base sm:text-lg
    transition-colors duration-300 group-hover:bg-slate-900"
  >
    Projects
    <svg
      className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>


  {/* Resume Button */}
  <a
    href="/myresume.pdf"
    className="relative px-2 py-3 sm:px-3 sm:py-3 lg:px-8 lg-py-4 bg-white text-black rounded-lg font-satoshi text-base sm:text-lg border-2 border-black overflow-hidden group hover:bg-black hover:text-white transition-all duration-300"
  >
    <span className="relative flex items-center justify-center gap-2 w-full">
      Resume
      <svg className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </span>
  </a>
</div>

      </div>
      </motion.div>



{/* <section
  id="how-i-add-value"
  className="relative py-20 bg-white text-black  border-gray-300 overflow-hidden"
>
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      How I Add Value
    </h2>
    <p className="text-gray-600 text-lg md:text-xl mb-12">
      I follow a process that transforms ideas into clean, interactive, and responsive web experiences.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-gray-300">
      {[
        {
          title: "Understand",
          text: "I analyze user needs and define the problem to craft meaningful solutions.",
        },
        {
          title: "Design",
          text: "I design intuitive, minimal, and visually pleasing interfaces.",
        },
        {
          title: "Build",
          text: "I use React, Next.js, and Tailwind to develop clean, scalable frontends.",
        },
        {
          title: "Optimize",
          text: "I refine every detail for speed, responsiveness, and smooth user experience.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`group p-6 border border-gray-300 hover:bg-gray-50 transition-all duration-500 ease-in-out
          animate-slide-up`}
        >
          <h3 className="font-semibold text-xl mb-2 group-hover:text-black transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section> */}



    </div>
<About/>
</div>
  );
}

export default Main;