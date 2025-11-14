import React from 'react'

function About() {
  return (
    <div>

        <p className='font-satoshi text-5xl text-center sm:text-center lg:text-9xl lg:text-left'>About</p>

        <div className='p-5 border-t border-r  border-l border-b mt-10'>


        <p  className=' font-satoshi  text-sm sm:text-sm lg:text-base'>
Hi, I’m Zahid Hussain a front-end developer who loves turning ideas into clean, fast, and interactive digital experiences.
I’m deeply passionate about the world of interfaces and how people interact with technology. Over the years, I’ve built a strong foundation in modern front-end tools like React, Next.js, Tailwind CSS, Redux, TypeScript, GSAP, and related libraries, and I continue pushing myself to refine my craft every day.

I enjoy building things that feel smooth, look sharp, and load quickly. My focus is always on creating products that are simple to use but powerful underneath, with attention to detail in both design and performance.
Right now, I’m also expanding into backend development + learning server-side architecture, APIs, and database design to become a more complete developer. In my free time, you’ll usually find me learning new technologies, exploring backend concepts, traveling, writing code, or sharpening my DSA skills.

I’m always excited to work on meaningful projects, collaborate with great teams, and bring ideas to life with clean code and thoughtful design.
        </p>
        </div>


        <div className='flex  justify-between items-center mt-20 flex-col sm:flex-col lg:flex-row  '>
          
            <p className='font-satoshi text-xl text-left sm:text-left'> 2025 – Present</p>

            <div>
            <p className='font-satoshi font-semibold text-2xl'>Convose, React-Native Developer<br/>
                Remote  </p>
                <p className='font-satoshi tracking-tight text-lg  '>focusing on improving their legacy system by fixing bugs,<br/> implementing new features, and enhancing overall app stability and performance</p>
                
            </div>

        </div>

    </div>
  )
}

export default About