
import React from 'react'
import Head from '../head/page'
import Foot from '../foot/page'
import { useState } from "react";
import CountryDropdown from '../countrydropdown/page';
import Link from 'next/link';

export default function Checkout() {
  return (
    <main>
      <section>
        {/* section01 */}
       <Head text={'Checkout'} heading={'Checkout'}></Head>
       {/* section02 */}
       <div className='flex my-20 justify-center flex-col lg:flex-row lg:space-x-20 px-4 md:px-20 lg:px-0 xl:space-x-80'>
        {/* box01 */}
        <div className='space-y-6'>
              <h1 className='font-semibold text-4xl'>
              Billing details
              </h1>
              <div className='flex space-x-7'>
                <div className='space-y-4'>
                <p className='font-medium'>
                First Name
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl w-full py-3 resize-none px-6"
  rows={2}
/>
                </div>
                <div className='space-y-4'>
                <p className='font-medium'>
                Last Name
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl w-full py-3 resize-none px-6"
  rows={2}
/>
                </div>
              </div>
              <p className='font-medium'>
              Company Name (Optional)
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
<CountryDropdown text={'Country / Region'} placeholder={'Select Your Country'} list={[ "United States",  "Pakistan",  "India",  "Canada",  "United Kingdom", "Australia",]} ></CountryDropdown>
<p className='font-medium'>
             Street address
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
<p className='font-medium'>
Town / City
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
<CountryDropdown text={'Province'} placeholder={'Western Province'} list={["Punjab", "Sindh",  "Khyber Pakhtunkhwa",  "Balochistan",  "Azad Jammu & Kashmir",  "Gilgit-Baltistan",  "Islamabad Capital Territory"]}></CountryDropdown>
<p className='font-medium'>
ZIP code
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
<p className='font-medium'>
Phone
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
<p className='font-medium'>
Email address
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
<textarea placeholder='Additional information'
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl  resize-none w-full py-3 px-4"
  rows={2}
/>
        </div>
        {/* box02 */}
        <div className='lg:mt-20 mt-10'>
          {/* part01 */}
          <div className='flex items-center space-x-20 md:justify-center xl:space-x-40 md:space-x-60 lg:space-x-20'>
            <div className='space-y-5'>
            <h5 className='font-medium text-2xl'> 
            Product
            </h5>
            <div className='flex space-x-2'>
              <p className='text-[#9F9F9F]'>
              Asgaard sofa
              </p>
              <p className='font-medium'>
                X
              </p>
              <p className='font-medium'>
              1
              </p>
            </div>
            <p>
            Subtotal
            </p>
            <p>
            Total
            </p>
            </div>
            <div className='space-y-5 text-right'>
            <h5 className='font-medium text-2xl'> 
            Subtotal
            </h5>
            <p className='font-medium'>
            Rs. 250,000.00
              </p>
              <p className='font-medium'>
              Rs. 250,000.00
              </p>
              <h3 className='text-[#B88E2F] font-bold text-2xl'>
              Rs. 250,000.00
              </h3>
            </div>
          </div>
          {/* part02 */}
          <div className='mt-20 space-y-5'>
            <div className='flex space-x-3 items-center'>
              <p className='h-4 w-4 bg-black rounded-full'>
              </p>
              <p>
              Direct Bank Transfer
              </p>
            </div>
            <p className='text-[#9F9F9F] font-light  md:w-[420px]'>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <div className='flex items-center space-x-3'>
              <p className='border-[1px] border-[#9F9F9F] rounded-full h-4 w-4 '>
              </p>
              <p className='text-[#9F9F9F] font-medium'>
              Direct Bank Transfer
              </p>
            </div>
            <div className='flex items-center space-x-3'>
              <p className='border-[1px] border-[#9F9F9F] rounded-full h-4 w-4 '>
              </p>
              <p className='text-[#9F9F9F] font-medium'>
              Cash On Delivery
              </p>
            </div>
            <p className='md:w-[430px] font-light '>
  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
  <span className='font-semibold ml-1'>
    privacy policy.
  </span>
</p>
<Link href="/blogs" className=''>
        <button className="border-[1px] border-black lg:text-xl text-sm sm:text-base py-3 sm:py-4 rounded-xl mt-5  px-6 sm:px-8 lg:px-20">
          Place order
        </button>
      </Link>
          </div>
        </div>
       </div>
       <Foot></Foot>
      </section>
    </main>
  )
}
