import React from 'react'
import Card from '../head/page'
import Image from 'next/image'
import Link from 'next/link'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Last from '../foot/page'
import Head from '../head/page'
import Foot from '../foot/page'
export default function Cart() {
  return (
    <main>
        <section>
            {/* section01 */}
            <Head text={'Cart'} heading={'Cart'}></Head>
            <div className='flex lg:flex-row flex-col my-20 space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-40 lg:mx-10 justify-center'>
    {/* box01 */}
    <div className='space-y-8 px-4 md:px-8 lg:px-0 '>
        <div className='flex bg-[#FFF9E5] space-x-4 justify-center lg:px-16 py-4 md:space-x-20'>
            <p className='font-medium'>Product</p>
            <p className='font-medium'>Price</p>
            <p className='font-medium'>Quantity</p>
            <p className='font-medium'>Subtotal</p>
        </div>
        <div className='flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0'>
            <div className='bg-[#D9D9D9] rounded-lg flex-shrink-0'>
                <Image 
                    src={'/cart-image01.png'} 
                    alt={''}
                    height={90}
                    width={90}
                />
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 w-full'>
                <p className='text-[#9F9F9F] text-center md:text-left'>Asgaard sofa</p>
                <p className='text-[#9F9F9F] text-center md:text-left'>Rs. 250,000.00</p>
                <p className='border-[#9F9F9F] border-[1px] mx-auto py-1 w-9 rounded-md text-center'>1</p>
                <p className='text-center md:text-left'>Rs. 250,000.00</p>
                <p className='text-[#FBEBB5] text-3xl text-center mx-auto md:text-left'> 
                    <RiDeleteBin7Fill /> 
                </p>
            </div>
        </div>
    </div>
    {/* box02 */}
    <div className='lg:w-1/3 lg:ml-4 md:h-[390px] md:w-[390px] xl:h-[390px] xl:w-[390px] md:mx-auto py-4 mx-4 space-y-8 flex flex-col items-center justify-center bg-[#FFF9E5]'>
        <h1 className='font-semibold text-3xl'>Cart Totals</h1>
        <div className='flex space-x-6'>
            <p className='font-medium'>Subtotal</p>
            <p className='text-[#9F9F9F]'>Rs. 250,000.00</p>
        </div>
        <div className='flex items-center space-x-6'>
            <p className='font-medium'>Total</p>
            <p className='text-[#B88E2F] font-medium text-xl'>Rs. 250,000.00</p>
        </div>
        <Link href="/Checkout">
            <button className="border-[1px] border-black mt-6 md:mt-14 xl:mt-12 lg:text-xl text-sm sm:text-base py-3 sm:py-4 rounded-xl px-6 sm:px-8 lg:px-12">
                Check Out
            </button>
        </Link>
    </div>
</div>

            <Foot></Foot>
        </section>
    </main>
  )
}
