import React from 'react'
import Image from "next/image";
import { PiCirclesFourFill } from 'react-icons/pi';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { TbLayoutDistributeHorizontal } from 'react-icons/tb';
import Head from '../head/page';
import Foot from '../foot/page';

export default function Shop() {
  return (
    <main>
        <section>
                    {/* section01 */}
                
                    <Head text={'Shop'} heading={'Shop'}></Head>

<div className='flex items-center justify-center lg:space-x-40  xl:space-x-[500px]  my-12'>
  {/* Left side */}
  <div className=' items-center xl:space-x-10 lg:space-x-4 hidden lg:flex'>
    <HiAdjustmentsHorizontal size={24} /> {/* 24px size ka icon */}
    <p className='text-xl'>Filter</p>
    <PiCirclesFourFill size={24} /> {/* 24px size ka icon */}
    <TbLayoutDistributeHorizontal size={24} /> {/* 24px size ka icon */}
    <div className='w-[1px] h-7 bg-[#9f9f9f]'></div>
    <p>Showing 1–16 of 32 results</p>
  </div>
  
  {/* Right side */}
  <div className=' items-center  xl:space-x-10  lg:space-x-4  hidden lg:flex'>
    <p className='text-xl'>
      Show
    </p>
    <p className=' text-[#9f9f9f] text-xl'>
      16
    </p>
    <p className='text-xl'>
      Short by
    </p>
    <p className=' text-[#9f9f9f] text-xl'>
      Default
    </p>
  </div>     
</div>

{/* section02 */}
<div className="flex flex-wrap justify-center mt-16 space-x-0 lg:space-x-[60px] xl:space-x-0 px-4 sm:px-6 md:px-8 lg:px-12">
    {/* Product 1 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/section2sofa.png"} alt={""} height={250} width={250} className="mt-5 lg:mt-0 xl:mt-5 mx-auto" />
      <p className="text-center">Trenton modular sofa_3</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>

    {/* Product 2 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/sectiontable.png"} alt={""} height={300} width={300} className="mt-[62px] lg:mt-12 xl:mt-16 mx-auto" />
      <p className="text-center">Granite dining table with <br />dining chair</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>

    {/* Product 3 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/section2table2.png"} alt={""} height={300} width={300} className="mx-auto lg:mt-2 xl:mt-0" />
      <p className="text-center">Outdoor bar table and <br />stool</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>

    {/* Product 4 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/section2table3.png"} alt={""} height={300} width={300} className="mt-[32px] mx-auto" />
      <p className="text-center">Plain console with teak <br />mirror</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>
  </div>
      {/* line02 */}
      <div className="mt-36 lg:px-10 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12 justify-center mt-16">
    
    {/* product05 */}
    <div className="space-y-3 text-center">
      <Image
        src={"/product05.png"}
        alt={""}
        height={300}
        width={300}
        className="mt-14 mx-auto"
      />
      <p>Grain coffee table</p>
      <h5 className="font-medium text-2xl">Rs. 15,000.00</h5>
    </div> 

    {/* product06 */}
    <div className="space-y-3 text-center">
      <Image
        src={"/product06.png"}
        alt={""}
        height={300}
        width={300}
        className="mt-2 mx-auto"
      />
      <p>Kent coffee table</p>
      <h5 className="font-medium text-2xl">Rs. 20,000.00</h5>
    </div> 

    {/* product07 */}
    <div className="space-y-3 text-center">
      <Image
        src={"/product07.png"}
        alt={""}
        height={300}
        width={300}
        className="mt-2 mx-auto"
      />
      <p>
        Round coffee table_color <br />2
      </p>
      <h5 className="font-medium text-2xl">Rs. 200,000.00</h5>
    </div> 

    {/* product08 */}
    <div className="space-y-3 text-center">
      <Image
        src={"/product08.png"}
        alt={""}
        height={300}
        width={300}
        className="mt-6 lg:mt-4 mx-auto"
      />
      <p>Reclaimed teak coffee <br />table</p>
      <h5 className="font-medium text-2xl">Rs. 25,200.00</h5>
    </div>
  </div>
</div>
      {/* line03 */}
      <div className="mt-36 lg:px-10 px-4">
  <div className="flex flex-wrap justify-center  lg:gap-14 md:gap-40 mt-16  xl:gap-28 gap-14 ">
    {/* product9 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 px-4 mb-8">
      <Image src={"/product09.png"} alt={""} height={250} width={250} className="md:mt-14 lg:mt-9 xl:mt-8 mx-auto" />
      <p className="text-center">Plain console_</p>
      <h5 className="font-medium text-2xl text-center">Rs. 258,200.00</h5>
    </div> 
    {/* product10 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 px-4 mb-8 lg:relative xl:bottom-2 lg:bottom-10">
      <Image src={"/product10.png"} alt={""} height={250} width={250} className="h-[150px] w-[150px] mx-auto xl:mt-0" />
      <p className="text-center">Reclai teak Sideboard</p>
      <h5 className="font-medium text-2xl text-center">Rs. 20,000.00</h5>
    </div> 
    {/* product11 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 px-4 mb-8">
      <Image src={"/product11.png"} alt={""} height={300} width={300} className="mt-8 mx-auto xl:mt-0" />
      <p className="text-center">SJP_0825</p>
      <h5 className="font-medium text-2xl text-center">Rs. 200,000.00</h5>
    </div>
    {/* product12 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 px-4 mb-8">
      <Image src={"/product12.png"} alt={""} height={300} width={300} className="mt-12 mx-auto xl:mt-7" />
      <p className="text-center">Bella chair and table</p>
      <h5 className="font-medium text-2xl text-center">Rs. 100,000.00</h5>
    </div>
  </div>
</div>


{/* line04 */}
<div className="mt-36 px-4 lg:px-8">
  {/* Mobile, Tablet, and Laptop Layout */}
  <div className="flex flex-wrap justify-center gap-8 md:gap-40 lg:gap-16 xl:hidden mt-16">
    {/* product13 */}
    <div className="space-y-3 text-center w-full md:w-1/3 lg:w-1/5">
      <Image 
        src={"/product13.png"} 
        alt={""}
        height={200}
        width={200}
        className="mx-auto mt-4"
      />
      <p>Granite square side table</p>
      <h5 className="font-medium text-2xl">
        Rs. 258,800.00
      </h5>
    </div> 
    {/* product14 */}
    <div className="space-y-3 text-center w-full md:w-1/3 lg:w-1/5">
      <Image 
        src={"/product14.png"} 
        alt={""}
        height={200}
        width={200}
        className="mx-auto mt-8"
      />
      <p>Asgaard sofa</p>
      <h5 className="font-medium text-2xl">
        Rs. 250,000.00
      </h5>
    </div> 
    {/* product15 */}
    <div className="space-y-3 text-center w-full md:w-1/3 lg:w-1/5">
      <Image 
        src={"/product15.png"} 
        alt={""}
        height={300}
        width={300}
        className="mx-auto mt-11 lg:mt-24"
      />
      <p>Maya sofa three seater</p>
      <h5 className="font-medium text-2xl">
        Rs. 115,000.00
      </h5>
    </div> 
    {/* product16 */}
    <div className="space-y-3 text-center w-full md:w-1/3 lg:w-1/5">
      <Image 
        src={"/product16.png"} 
        alt={""}
        height={300}
        width={300}
        className="mx-auto md:mt-3 lg:mt-16 lg:mb-6"
      />
      <p>Outdoor sofa set</p>
      <h5 className="font-medium text-2xl">
        Rs. 244,000.00
      </h5>
    </div>
  </div>

  {/* Computer Layout */}
  <div className="hidden xl:flex flex-wrap justify-center xl:justify-between gap-8 xl:gap-0 mt-16">
    {/* product13 */}
    <div className="space-y-3 text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
      <Image 
        src={"/product13.png"} 
        alt={""}
        height={200}
        width={200}
        className="mx-auto mt-4"
      />
      <p>Granite square side table</p>
      <h5 className="font-medium text-2xl">
        Rs. 258,800.00
      </h5>
    </div> 
    {/* product14 */}
    <div className="space-y-3 text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
      <Image 
        src={"/product14.png"} 
        alt={""}
        height={200}
        width={200}
        className="mx-auto mt-8"
      />
      <p>Asgaard sofa</p>
      <h5 className="font-medium text-2xl">
        Rs. 250,000.00
      </h5>
    </div> 
    {/* product15 */}
    <div className="space-y-3 text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
      <Image 
        src={"/product15.png"} 
        alt={""}
        height={300}
        width={300}
        className="mx-auto mt-11"
      />
      <p>Maya sofa three seater</p>
      <h5 className="font-medium text-2xl">
        Rs. 115,000.00
      </h5>
    </div> 
    {/* product16 */}
    <div className="space-y-3 text-center w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
      <Image 
        src={"/product16.png"} 
        alt={""}
        height={300}
        width={300}
        className="mx-auto"
      />
      <p>Outdoor sofa set</p>
      <h5 className="font-medium text-2xl">
        Rs. 244,000.00
      </h5>
    </div>
  </div>
</div>


      <div className='flex justify-center items-center my-28 cursor-pointer'>
        <p className=' bg-[#FBEBB5] py-3 rounded-md px-6'>
            1
        </p>
        <p className='py-3 rounded-md px-6'>
            2
        </p>
        <p className=' py-3 rounded-md px-6'>
            3
        </p>
        <p className=' py-3 rounded-md px-6'>
            Next
        </p>
      </div>
      {/* last section */}
      <Foot></Foot>
        </section>
    </main>
  )
}
