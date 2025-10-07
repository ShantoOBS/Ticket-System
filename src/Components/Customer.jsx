
import Card from './Card'
import Task from './Task'
import Solve from './Solve'

export default function Customer({ DataBase,ClickOnCards,StatusDataBase,ComDataBase,ClickOnTask }) {

   
   
 
    return (
        <div className='max-w-[1200px] mx-auto px-5 text-black'>

           

            <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4'>

                <div className='w-full  md:w-[75%] lg:w-[75%]'>

                <p  className='mb-2 font-medium text-[1.5rem]'>
                  Customer Tickets
                </p>

                      <div className='grid lg:grid-cols-2 gap-5 mb-15'>

                {DataBase.map((data, index) => (
                    <Card key={index} {...data} ClickOnCards={ClickOnCards} />
                ))}


                </div>

                </div>

               

                <div className='w-full md:w-[25%] lg:w-[25%] mb-5'>

                    <p  className='mb-2 font-medium text-[1.5rem]'>
                    Task Status
                    </p>
                     <Task StatusDataBase={StatusDataBase} ClickOnTask={ClickOnTask}></Task>


                   <p  className='my-2 font-medium text-[1.5rem]'>
                    Resolved Task
                    </p>

                    <Solve ComDataBase={ComDataBase}></Solve>

                </div>
                
            </div>

           

            




        </div>
    )
}
