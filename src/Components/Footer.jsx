import React from 'react'
import twitter from '../assets/twitter.png'
import linkden from '../assets/linkden.png'
import facebook from '../assets/facebook.png'
import message from '../assets/message.png'

export default function Footer() {
    return (
        <div className='bg-black text-white'>

            <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-8 p-10 border-b-1 border-[#414143]'>

                <div>
                    <p className='text-[1.2rem] font-medium'>CS — Ticket System</p>
                    <div className='text-[#A1A1AA] text-[13px]'>

                      Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.

                    </div>
                 
                </div>
                <div>
                    <p className=''>Company</p>
                    <div className='text-[#A1A1AA] text-[13px]'>

                        <p className='my-2'>About Us</p>
                        <p className=''>Our Mission</p>
                        <p className='my-2'>Contact Saled</p>

                    </div>


                </div>
                <div>
                    <p className=''>Services</p>
                    <div className='text-[#A1A1AA] text-[13px]'>

                        <p className='my-2'>Products & Services</p>
                        <p>Customer Stories</p>
                        <p className='my-2'>Download Apps</p>

                    </div>


                </div>
                <div>
                    <p className=''>Information</p>
                    <div className='text-[#A1A1AA] text-[13px]'>

                        <p className='my-2'>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p className='my-2'>Join Us</p>

                    </div>


                </div>
                <div>
                    <p className=''>Social Links</p>
                    <div className='text-[#A1A1AA] text-[13px]'>
                         
                         <div className='flex my-2 gap-2'>
                             <img src={twitter} alt="" className=''/>
                            <p>@CS — Ticket System</p>
                         </div>
                         <div className='flex my-2 gap-2'>
                             <img src={linkden} alt="" className=''/>
                            <p>@CS — Ticket System</p>
                         </div>
                         <div className='flex my-2 gap-2'>
                             <img src={facebook} alt="" className=''/>
                            <p>@CS — Ticket System</p>
                         </div>
                         <div className='flex my-2 gap-2'>
                             <img src={message} alt="" className=''/>
                            <p>support@cst.com</p>
                         </div>
                         
                       

                    </div>


                </div>
                


            </div>


            <div className='text-center p-4'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>

          

        </div>
    )
}
