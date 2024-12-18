import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
interface cardprop {
    text:string;
    heading:string;
    }
export default function Head({text, heading}:cardprop) {
  return (
    <div>
        <div className="h-[300px] relative flex items-center justify-center  bg-cover bg-center bg-[url('/shop.jfif')]">
  {/* Pseudo-element for blurred background */}
  <div className="absolute inset-0 bg-cover bg-center bg-[url('/shop.jfif')] filter blur-sm z-0"></div>

  <div className="space-y-2 z-10 text-center px-4 sm:px-8 md:px-16">
    <Image 
      src={'/logo.png'} 
      alt={''}
      height={55}
      width={55} 
      className='mx-auto'
    />
    <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl">{heading}</h1>
    <div className="flex justify-center items-center space-x-2 mt-2">
      <Link href={'/'} className="font-medium text-lg sm:text-xl md:text-2xl">Home</Link>
      <div className='md:mt-2 mt-1 md:text-xl'>
      <IoIosArrowForward />
      </div>
      <p className="font-light text-sm sm:text-base md:text-xl cursor-pointer">{text}</p>
    </div>
  </div>
</div>
    </div>
  
  )
}
