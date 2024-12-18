import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <main>
      <section>
        <div className='flex justify-center lg:flex-row md:px-14 flex-col px-6 space-y-10 lg:space-y-0 lg:space-x-16 xl:space-x-40 mt-10 lg:px-10 xl:px-0'>
          <p className="text-[#9f9f9f] mt-20">
          400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA
          </p>
          {/* links */}
          <div className='space-y-10 flex flex-col'>
            <p  className="text-[#9f9f9f] font-medium">
              Links
            </p>
            <Link href={'/'} className='font-medium'>Home</Link>
            <Link href={'/'} className='font-medium'>Shop</Link>
            <Link href={'/'} className='font-medium'>About</Link>
            <Link href={'/'} className='font-medium'>Contact</Link>
          </div>
          {/* infomation */}
          <div className='space-y-10 cursor-pointer'>
            <p  className="text-[#9f9f9f] font-medium">
              Help
            </p>
            <p className='font-medium'>
            Payment Options
            </p>
            <p className='font-medium'>
            Returns
            </p>
            <p className='font-medium'>
            Privacy Policies
            </p>
          </div>
          {/* adress */}
          <div className='space-y-10'>
          <p  className="text-[#9f9f9f] font-medium">
              Help
            </p>
            <div className='flex'>
            <input 
              type="text" 
              placeholder="Enter Your Email Address" 
              className="border-b-2 border-black focus:outline-none focus:border-black w-full mr-4"
            />
            <button className='font-medium border-2 border-b-black'>
            SUBSCRIBE
            </button>
            </div>
          </div>
        </div>
        <p className='my-10 px-6 md:px-10 lg:px-0  md:ml-40 xl:ml-[360px]'>2022 Meubel House. All rights reverved</p>
      </section>
    </main>
  )
}
