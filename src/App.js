import React, { useCallback, useEffect, useState, useRef } from 'react'


function App() {

  //3 feture length number character
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(12)
  const [numberallow, setNumberallow] = useState(false)
  const [char, setchar] = useState(false)

const  passwordRef  = useRef(null)
  const passwordgenrat = useCallback(() => {
    
    let pass = "";

    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if (numberallow) string += "123456789";
    if (char) string += "!@#$%^%&*~`{}[]|}";

    for (let i = 1; i <= length; i++) {

      let chare = Math.floor(Math.random() * string.length + 1)


      pass += string.charAt(chare)
    }



    setPassword(pass)

  }, [length, numberallow, char, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
   passwordRef.current?.select();
   passwordRef.current?.setSelectionRange(0, 999);
   window.navigator.clipboard.writeText( )
 }, [password])

  useEffect(() => {
    passwordgenrat()

  }, [length, numberallow, char, passwordgenrat])


    
  

  return (
    <div class="  bg-black flex justify-center align-top ">
      <div class="px-6 flex justify-center py-56">

        <div>
          <input type='text' className='outline-non w-full py-1 px-3'
            value={password}
            placeholder='password'
            readOnly


          />
          <button onClick={copyPasswordToClipboard} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">copy</button>
          <input
            type='range' length
            value={length}
            min={8}
            max={99}
            onChange={(e) => setLength(e.target.value)}



          />
          <label className='text-blue bg-orange-400'>Length : {length}</label>

          <input
            type='checkbox'
            value={numberallow}
            defaultChecked={numberallow}
            onChange={() => {
              setNumberallow((p) => !p)
            }}

          />

          <label className='bg-orange-400'>number : {numberallow}</label>
          <input
            type='checkbox'
            value={char}
            defaultChecked={char}
            onChange={() => {
              setchar((p) => !p)
            }}
          />
          <label className='bg-orange-400'>character : {char}</label>
        </div>
      </div>
    </div>



  )
}

export default App

















































//projects No 1

// import React, { useState } from 'react';
// import './App.css';

// export default function App() {

//   const [change, setChange] = useState('olive')



//   return (
//     <div className='w-full h-screen duration-200' style={{ backgroundColor: change }}>
//       <div className='fixed flex flex-wrap justify-center bottom-48px inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3-xl'>
//           <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor:"red"}} onClick={() => { setChange('red') }}>red</button>
//           <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor:"green"}} onClick={() => { setChange('green') }}>green</button>
//           <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor:"blue"}} onClick={() => { setChange('blue') }}>blue</button>
//           <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor:"black"}} onClick={() => { setChange('black') }}>black</button>
//         </div>
//       </div>
//     </div>
//   );
// }