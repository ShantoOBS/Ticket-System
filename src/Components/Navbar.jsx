import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isNav,setIsNav] = useState(false);

  const handdleNav=()=>{
    setIsNav(!isNav);
  }

  return (
    <div className='bg-base-100 shadow-sm'>

        <div className='max-w-[1200px] mx-auto flex justify-between items-center p-5'>
            <div className='font-bold text-2xl'>

                 <p>CS — Ticket System</p>

            </div>
           
            <div className={`flex lg:hidden
              ${isNav?"block flex-col items-center gap-1 top-18 absolute z-10 w-full p-2 bg-white":"hidden"}
                `}>
              
                <p>Home</p>
                <p>FAQ</p>
                <p>Changelog</p>
                <p>Blog</p>
                <p>Download</p>
                <p>Contact</p>
                <button className="text-white btn btn-active bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                    + New Ticket</button>
            </div>

            <div className={`hidden lg:block lg:flex lg:gap-4`}>
                <p>Home</p>
                <p>FAQ</p>
                <p>Changelog</p>
                <p>Blog</p>
                <p>Download</p>
                <p>Contact</p>
                <button className="text-white btn btn-active bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                    + New Ticket</button>
            </div>
            
            
              
            <button onClick={handdleNav} className={`cursor-pointer lg:hidden }`}>
               <GiHamburgerMenu />
            </button>

        
        </div>

    </div>
  )
}
