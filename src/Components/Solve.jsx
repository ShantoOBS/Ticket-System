import React from 'react'

export default function Solve({ComDataBase}) {
  return (
    <div className='text-black'>

        
          {
           ComDataBase.length==0?"No resolved tasks yet.":""
          }

          {

            ComDataBase.map( (ele)=>(


           <div className='bg-[#E0E7FF] rounded-md p-3 font-medium mt-2'>
            <p className='mb-2'>{ele.title}</p>
           </div>
                  
                  
            ))

          }
      
    </div>
  )
}
