import React from 'react'

export default function Task({StatusDataBase,ClickOnTask}) {
  return (
    <div className='text-black'>

          {
           StatusDataBase.length==0?"Select a ticket to add to Task Status":""
          }

          {

            StatusDataBase.map( (ele)=>(


           <div className='bg-white rounded-md p-3 font-medium mt-2'>
            <p className='mb-2'>{ele.title}</p>
            <button onClick={()=>ClickOnTask(ele.id)} class="btn btn-active btn-success w-full bg-[#02A53B] text-white">Complete</button>
           </div>
                  
                  
            ))

          }

          
      
    </div>
  )
}
