import React from 'react'
import Card from '../head/page'
import Link from 'next/link'
import Last from '../foot/page'
import Head from '../head/page'
import Foot from '../foot/page'

export default function Login() {
  return (
    <main>
        <section>
            {/* section01 */}
            <Head text={'My account'} heading={'My Account'}></Head>
            {/* section02 */}
            <div className='flex flex-col lg:flex-row px-4 lg:px-0 md:px-10 space-y-20 lg:space-y-0 my-28 lg:space-x-28 xl:space-x-60 justify-center '>
            {/* box01 */}
            <div className='space-y-8'>
                <h1 className='font-semibold text-4xl'>
                Log In
                </h1>
                <p className='font-medium'>
                Username or email address
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl w-full py-3 resize-none px-4"
  rows={2}
/>
                <p className='font-medium'>
                Password
                </p>
                <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl resize-none w-full py-3 px-4"
  rows={2}
/>
                <div className='flex items-center space-x-4 md:space-x-8'>
                <input
  type="checkbox"
  className="h-6 w-6 rounded "
/>

                    <p className='font-medium'>
                    Remember me
                </p>
                </div>
                <div className='flex items-center space-x-8'>
                <Link href="">
        <button className="border-[1px] border-black lg:text-xl text-sm sm:text-base py-3 sm:py-4 rounded-xl px-6 sm:px-8 lg:px-16">
          Log In
        </button>
      </Link>
                <p className='font-light cursor-pointer'>
                    Lost Your Password?
                </p>
                </div>
            </div>
            {/* box02 */}
            <div className='space-y-4 md:space-y-8'>
            <h1 className='font-semibold text-4xl'>
            Register
            </h1>
            <p className='font-medium'>
             Email address
            </p>
            <textarea
  className="outline-none border-[1px] border-[#9F9F9F] rounded-xl w-full resize-none py-3 px-4"
  rows={2}
/>


            <p className='font-light md:w-[400px]'>
            A link to set a new password will be sent to your email address.
            </p>
            <div>
            <p className='font-light md:w-[385px]'>
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
            </p>
            <p className='font-semibold cursor-pointer'>privacy policy.</p>
            </div>
            <Link href="">
        <button className="border-[1px] border-black mt-6 md:mt-14 xl:mt-12 lg:text-xl text-sm sm:text-base py-3 sm:py-4 rounded-xl px-6 sm:px-8 lg:px-16">
        Register
        </button>
      </Link>
            </div>
            </div>
            <Foot></Foot>
        </section>
    </main>
  )
}
