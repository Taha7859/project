import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { IoStar } from 'react-icons/io5'
import Link from 'next/link'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Product() {
  return (
    <main>
        <section>
            {/* section01 */}
            <div className="flex flex-wrap my-10 sm:my-20 items-center px-2 sm:px-10 space-x-2 sm:space-x-8 xl:px-40">
  <p className="text-sm sm:text-base text-[#9f9f9f]">
    Home
  </p>
  <div className="text-xs sm:text-base lg:text-2xl">
  <IoIosArrowForward  />
  </div>
  <p className="text-sm sm:text-base text-[#9f9f9f]">
    Shop
  </p>
  <div className="text-xs sm:text-base lg:text-2xl">
  <IoIosArrowForward  />
  </div>
  <div className="hidden sm:block w-[2px] h-8 bg-[#9f9f9f]" />
  <p className="text-base sm:text-lg font-semibold">
    Asgaard Sofa
  </p>
</div>
{/* section02 */}
<div className='flex flex-col lg:flex-row xl:mx-20 lg:space-x-10 lg:space-y-0 space-y-10'>
  {/* box1 */}
  <div className='flex lg:flex-col md:space-x-10 md:px-6 space-x-5 lg:space-x-0 lg:space-y-10'>
    <div className='bg-[#d9d9d9] rounded-lg'>
      <Image src={'/product-image01.png'} alt={''} width={80} height={80} className=' h-full w-full rounded-lg' />
    </div>
    <div className='bg-[#d9d9d9] rounded-lg'>
      <Image src={'/product-image02.png'} alt={''} width={80} height={80} className=' h-full w-full rounded-lg' />
    </div>
    <div className='bg-[#d9d9d9] rounded-lg'>
      <Image src={'/product-image03.png'} alt={''} width={80} height={80} className='object-cover h-full w-full rounded-lg' />
    </div>
    <div className='bg-[#d9d9d9] rounded-lg'>
      <Image src={'/product-image04.png'} alt={''} width={80} height={80} className=' h-full w-full rounded-lg' />
    </div>
  </div>
  {/* box2 */}
  <div className='rounded-lg bg-[#d9d9d9] xl:h-[550px] lg:h-[480px] lg:w-1/2 xl:w-1/3 flex justify-center items-center'>
    <Image src={'/product-image05.png'} alt={''} width={400} height={400} className='object-cover lg:object-fill  h-full w-full rounded-lg' />
  </div>
  {/* box3 */}
  <div className='space-y-5 px-4 sm:px-8 xl:pl-10 lg:w-[450px]'>
    <h1 className='text-2xl sm:text-3xl xl:text-5xl'>Asgaard sofa</h1>
    <h3 className='text-lg sm:text-xl xl:text-2xl text-[#9f9f9f]'>Rs. 250,000.00</h3>
    <div className='flex items-center space-x-3 sm:space-x-5'>
        <div className='text-yellow-400 text-xl sm:text-2xl'>
        <IoStar />
         </div>
         <div className='text-yellow-400 text-xl sm:text-2xl'>
        <IoStar />
         </div>
         <div className='text-yellow-400 text-xl sm:text-2xl'>
        <IoStar />
         </div>
         <div className='text-yellow-400 text-xl sm:text-2xl'>
        <IoStar />
         </div>
      <div className='text-[#d9d9d9] text-xl sm:text-2xl' >
      <IoStar />
      </div>
      <div className="hidden sm:block w-[2px] h-8 bg-[#9f9f9f]" />
      <p className='text-sm sm:text-base text-[#9f9f9f]'>5 Customer Review</p>
    </div>
    <p className='text-sm sm:text-base xl:w-[450px]'>
      Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
    </p>
    <p className='text-sm sm:text-base text-[#9f9f9f]'>Size</p>
    <div className='flex space-x-3 sm:space-x-5'>
      <p className='bg-[#FBEBB5] px-3 py-1 sm:px-4 sm:py-2 rounded-md'>L</p>
      <p className='px-3 py-1 sm:px-4 sm:py-2 rounded-md'>XL</p>
      <p className='px-3 py-1 sm:px-4 sm:py-2 rounded-md'>XS</p>
    </div>
    <p className='text-sm sm:text-base text-[#9f9f9f]'>Color</p>
    <div className='flex space-x-3 sm:space-x-5'>
      <div className='h-6 w-6 sm:h-8 sm:w-8 bg-[#816DFA] rounded-full'></div>
      <div className='h-6 w-6 sm:h-8 sm:w-8 bg-[#000000] rounded-full'></div>
      <div className='h-6 w-6 sm:h-8 sm:w-8 bg-[#CDBA7B] rounded-full'></div>
    </div>
    <div className='flex space-x-3'>
      <div className='h-12 sm:h-16 w-28 cursor-pointer sm:w-32 border-[1px] border-[#9F9F9F] rounded-lg flex justify-between items-center px-3'>
        <p>-</p>
        <p className='font-medium'>1</p>
        <p>+</p>
      </div>
      <Link href="/cart">
        <button className="border-[1px] border-black text-sm sm:text-base xl:text-lg py-3 sm:py-4 rounded-xl px-6 sm:px-8 xl:px-10">
          Add To Cart
        </button>
      </Link>
    </div>
    <div className='h-[1px] w-full sm:w-[650px] bg-[#D9D9D9]'></div>
    <div className='flex text-sm sm:text-base text-[#9F9F9F] space-x-3'>
      <p>SKU:</p>
      <p>SS001</p>
    </div>
    <div className='flex text-sm sm:text-base text-[#9F9F9F] space-x-3'>
      <p>Category:</p>
      <p>Sofas</p>
    </div>
    <div className='flex text-sm sm:text-base text-[#9F9F9F] space-x-3'>
      <p>Tags:</p>
      <p>Sofa, Chair, Home, Shop</p>
    </div>
    <div className='flex items-center text-sm sm:text-base text-[#9F9F9F] space-x-3'>
      <p>Share:</p>
      <div className='flex space-x-3'>
        <div  className='text-black text-lg sm:text-xl' >
        <FaFacebook/>
        </div>
        <div className='text-black text-lg sm:text-xl' >
        <FaLinkedin/>
        </div>
       <div className='text-black text-lg sm:text-xl' >
       <AiFillTwitterCircle/>
       </div>
        
      </div>
    </div>
  </div>
</div>
{/* section03 */}
         <div className='h-[1px] w-full my-28 bg-[#D9D9D9] '></div>
         <div className='flex justify-center lg:space-x-40 md:space-x-20 px-5 flex-col md:flex-row space-y-4 md:space-y-0'>
            <h1 className='text-2xl'>
            Description
            </h1>
            <h1 className='text-2xl text-[#9F9F9F]'>
            Additional Information
            </h1>
            <h1 className='text-2xl text-[#9F9F9F]'>
            Reviews [5]
            </h1>
         </div>
         <p className=' text-[#9F9F9F] lg:px-16 px-4 text-center md:text-left xl:px-[350px] mt-10'>
         Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
         </p>
         <p className=' text-[#9F9F9F] lg:px-[66px] px-4 text-center md:text-left xl:px-[290px] mt-6'>
         Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
         </p>
         {/* section04 */}
         <div className='flex flex-col justify-center items-center lg:space-x-10 xl:space-x-60 px-4 lg:flex-row lg:mt-20 mt-10'>
            <Image src={'/product-image06.png'} alt={''}
            height={500}
            width={500} className='lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]'></Image>
            <Image src={'/product-image07.png'} alt={''}
            height={500}
            width={500} className='lg:h-[350px] lg:w-[400px] xl:h-[450px] xl:w-[500px]'></Image>
         </div>
         {/* section05 */}
         <h4 className='font-medium my-10 lg:my-20 text-2xl md:text-4xl text-center'>
         Related Products
         </h4>
         {/* Product Section */}
  <div className="flex flex-wrap justify-center mt-16 space-x-0 lg:space-x-10 xl:space-x-0 px-4 sm:px-6 md:px-8 lg:px-12">
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
   {/* View More Section */}
   <p className="font-medium text-xl mt-28 text-center">View More</p>
  <div className="h-[2px] bg-black rounded-full w-28 mx-auto mt-3 my-20"></div>
        </section>
    </main>
  )
}
