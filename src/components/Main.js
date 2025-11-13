import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import About from "./About";


function Main() {
  return (
  
<div className="space-y-24 max-w-8xl self-stretch m-auto w-full">
    <div className=" text-center max-w-7xl mx-auto ">
      <div className="flex justify-between items-center">

      <div className="">
        <img src="mys.jpg" className="h-80 w-80 rounded-full"/>
        
      </div>
      <div className="text-left ">
    <h1 className="font-satoshi  text-7xl md:text-8xl lg:text-8xl  leading-none ">
                {/* WHY: text-9xl creates bold, impossible-to-miss headline */}
                {/* WHY: bg-clip-text text-transparent creates gradient text effect */}
                {/* WHY: leading-none removes extra spacing for impact */}
                Front-End
              </h1>
              <h1 className="font-satoshi text-7xl md:text-8xl lg:text-8xl  leading-none  ">
                Developer
              </h1>{/* <p className="text-left "> Based in Pakistan</p> */}


     
  <p className="font-satoshi text-2xl md:text-3xl lg:text-3xl text-gray-700 max-w-3xl leading-tight">
              {/* WHY: Slightly smaller text creates visual hierarchy */}
              {/* WHY: gray-700 is softer than pure black for secondary text */}
              I focus on products that <span className="font-bold text-black border-b-2 border-black">load fast</span>, 
              <span className="font-bold text-black border-b-2 border-black"> look sharp</span>, and 
              <span className="font-bold text-black border-b-2 border-black"> feel smooth</span>.
              {/* WHY: border-b-2 underlines key benefits */}
              {/* WHY: font-bold makes important words stand out */}
            </p>        

        
                <div className="flex items-center gap-3 pt-4">
              {/* WHY: gap-3 keeps icons close together */}
              {/* WHY: pt-4 adds breathing room from subtitle */}
              
              <a 
                href="https://www.linkedin.com/in/zahid-husssain-685b91240/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-2  rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
              >
                {/* WHY: border-2 creates outline style */}
                {/* WHY: hover:bg-black creates fill effect */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:scale-110">
                  {/* WHY: scale-110 on hover provides interaction feedback */}
                  <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
                  <rect x="4.8" y="8.2" width="2" height="8.8" rx="0.5" fill="#fff"/>
                  <path d="M8.6 8.2h2v1.2c.3-.5 1-1.1 2.2-1.1 2.4 0 2.8 1.6 2.8 3.7v4.9h-2v-4.5c0-1.1 0-2.6-1.6-2.6-1.6 0-1.9 1.3-1.9 2.5v4.6h-2V8.2z" fill="#fff"/>
                  <circle cx="6" cy="5.6" r="1.1" fill="#fff"/>
                </svg>
              </a>

              <a 
                href="https://github.com/zahidhussain998" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="p-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
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
                className="p-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:scale-110">
                  <path fill="currentColor" d="M22.46 6c-.77.35-1.6.59-2.46.7a4.2 4.2 0 0 0 1.84-2.3 8.4 8.4 0 0 1-2.66 1.02 4.18 4.18 0 0 0-7.12 3.81A11.85 11.85 0 0 1 3.16 4.6a4.17 4.17 0 0 0 1.29 5.58 4.1 4.1 0 0 1-1.9-.53v.05a4.18 4.18 0 0 0 3.35 4.1 4.2 4.2 0 0 1-1.89.07 4.19 4.19 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 19.54a11.8 11.8 0 0 0 6.29 1.84c7.55 0 11.69-6.26 11.69-11.69l-.01-.53A8.36 8.36 0 0 0 22.46 6z"/>
                </svg>
              </a>
              </div>

    <div className="flex flex-wrap gap-4 pt-6">
              {/* WHY: flex-wrap allows buttons to stack on small screens */}
              {/* WHY: pt-6 adds extra space above CTAs */}
              
              <a 
                href="/projects" 
                className="relative px-8 py-4 bg-black text-white rounded-lg font-satoshi  text-lg overflow-hidden group"
              >
                {/* WHY: Black button is primary CTA, stands out most */}
                {/* WHY: overflow-hidden clips slide animation */}
                
                {/* Slide-in effect from left */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                {/* WHY: White overlay on hover creates subtle highlight */}
                
                <span className="relative flex items-center gap-2">
                  Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {/* WHY: Arrow slides right on hover for direction cue */}
                </span>
              </a>

              <a 
                href="/last.pdf" 
                className="relative px-8 py-4 bg-white text-black rounded-lg font-satoshi text-lg border-2 border-black overflow-hidden group hover:bg-black hover:text-white transition-all duration-300"
              >
                {/* WHY: Outline button provides visual contrast */}
                {/* WHY: Fill animation on hover is eye-catching */}
                
                <span className="relative flex items-center gap-2">
                  Resume
                  <svg className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {/* WHY: Download icon moves down slightly on hover */}
                </span>
              </a>
              </div>
      </div>
      </div>



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