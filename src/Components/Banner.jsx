import React from 'react'
import Img1 from '../assets/vector1.png'
import Img2 from '../assets/vector.png'

export default function Banner({StatusDataBase,ComDataBase}) {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row lg:flex-row gap-4 justify-between items-center p-5 text-white my-10'>
        
         <div className='rounded-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-15 w-full md:w-[50%] lg:w-[50%]  relative text-center'>
              <img src={Img1} alt="" className='absolute left-0 top-0  w-60 bottom-0'/>
              <img src={Img2} alt="" className='absolute right-0 top-0 w-60 bottom-0' />
               <p className='font-semibold text-2xl  '>In-Progress</p>
               <p className='font-bold text-3xl'>{StatusDataBase.length}</p>
         </div>

          <div className='rounded-md bg-linear-to-r from-[#54CF68] to-[#00827A] py-15 w-full md:w-[50%]  lg:w-[50%]   relative text-center'>
              <img src={Img1} alt="" className='absolute left-0 top-0  w-60 bottom-0 '/>
              <img src={Img2} alt="" className='absolute right-0 top-0  w-60 bottom-0' />
               <p className='font-semibold text-2xl '>Resolved</p>
               <p className='font-bold text-3xl'>{ComDataBase.length}</p>
         </div>
        

       
    </div>
  )
}
