import React from 'react'
import { FaRegCalendar } from "react-icons/fa6";


const Card=({id,title,description,customer,createdAt,priority,ClickOnCards,status}) => {
  


  return (
      <div onClick={()=>ClickOnCards(id)} className='bg-white p-5 rounded-md text-[#627382]'>
                 <div className='flex justify-between text-black font-medium items-center'>
                     <p className=''>{title}</p>
                     <button className={`flex items-center gap-1 rounded-full
                         ${priority==="MEDIUM PRIORITY"?"bg-[#F8F3B9] text-[#9C7700]":"bg-[#B9F8CF]  text-[#0B5E06]"} px-5 py-1 `}> 
                        <div className={`${priority==="MEDIUM PRIORITY"?"bg-[#FEBB0C]":"bg-[#02A53B]"} w-4 h-4 rounded-full`}></div>
                        {status}</button>
                 </div>
    
                 <p className='my-2'>
                   {description}
                 </p>
                 <div className='flex justify-between'>
                   <div className='flex justify-between gap-2'>
                     <p>#{id}</p>
                    
                    <p className={` ${priority==="MEDIUM PRIORITY"?"text-[#FEBB0C]":""}
                     ${priority==="HIGH PRIORITY"?"text-red-500":"" } ${priority==="LOW PRIORITY"? "text-green-500":""}
                    `}>{priority}</p>

                   </div>
                   <div className='flex justify-between gap-2 items-center'>
                    <p>{customer}</p>
                    <FaRegCalendar />
    
                    <p>{createdAt}</p>
                   </div>
                 </div>
    
    </div>
  )
}
export default Card