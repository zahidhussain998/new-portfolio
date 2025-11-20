import React from 'react'
import { motion } from 'framer-motion';

function Footer() {
  return (

    <div className='p-4'>
    
    <div className='mt-32 border-t p-6 m-6'>
  <motion.p 
  className="font-satoshi text-5xl text-center sm:text-center lg:text-9xl"
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  }}
>
  Getting to know<br/> one another
</motion.p>
      <div
       className='flex justify-center items-center mt-5'>

            <p className=' max-w-xs  border text-center flex justify-center items-center rounded-full py-2 px-6 bg-black text-white font-satoshi font-medium'>zahidzahidhusssain@gmail.com</p>

      </div>


    </div>
      <div className='font-satoshi text-sm lg:text-lg sm:text-sm flex justify-between items-center'>
        <p>All rights reserved.</p>
        © 2025 Zahid Hussain. 
      </div>
    </div>
  )
}

export default Footer