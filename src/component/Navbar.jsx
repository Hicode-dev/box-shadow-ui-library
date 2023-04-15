import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineMenuFold,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

 const Navbar = ({children}) => {
    const [nav, setNav] = useState('')
    const  handleClick = ()=>{
        setNav(!nav)
      }
  return (
    <div>
         <main className=' bg-lime-500'>
        <div className='text-white flex py-4  justify-between items-center container max-w-[1240px] capitalize h-25 mx-auto px-5'>
          <h1 className='w-full text-3xl font-bold text-[lightgreen] uppercase h-25 pt-4'> Hi-shade</h1>
          <ul className="hidden sm:flex ">
            <li className='p-3 ' >home</li>
            <li className='p-3 '>company</li>
            <li className='p-3 '> resources</li>
            <li className='p-3 '> about</li>

            <li className='p-3 '> contact</li>
          </ul>
       

          <div onClick={handleClick} className="block sm:hidden">
            {!nav?  <AiOutlineMenuFold className='fixed right-0 mr-5 ease-in-out duration-700'  size={30} /> :   <AiOutlineClose className='fixed right-0 mr-5 ease-in-out duration-700' size={30} />}
          </div>

<div className='flex gap-4'>
    <FaGithub />
    <IoLogoTwitter />
</div>

          <div className={nav? 'fixed top-0 bg-black px-4 left-0 w-[60%]  border-r h-full  border-r-gray-600 ease-out duration-700' :'fixed left-[-100%]   duration-1000' }>
          <h1 className=' text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase '> Hi-shade</h1>
    
            <ul>
              <li className='p-3 border-gray-600 border-b' >home</li>
              .<li className='p-3 border-gray-600 border-b'>company</li>
              <li className='p-3 border-gray-600 border-b'> resources</li>
              <li className='p-3 border-gray-600 border-b'> about</li>

              <li className='p-3 '> contact</li>
            </ul>
          </div>

        </div>

      </main>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Navbar
