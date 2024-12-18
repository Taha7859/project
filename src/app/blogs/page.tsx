import React from 'react'
import Head from '../head/page'
import Foot from '../foot/page'
import Image from 'next/image'
import { RiAdminFill } from 'react-icons/ri'
import { FaCalendar, FaTag } from 'react-icons/fa6'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'
import { LuSearch } from 'react-icons/lu'
export default function Blog() {
  return (
    <main>
        <section>
            {/* sectin01 */}
            <Head text={'Blog'} heading={'Blog'}></Head>
            {/* section02 */}
            <div className='flex justify-center px-5  md:px-10 space-y-20 lg:space-y-0 flex-col lg:px-14 lg:flex-row  lg:space-x-14 xl:space-x-20 my-28'>
              {/* left box */}
              <div className='space-y-20'>
                {/* part01 */}
              <div className='space-y-6 '>
              <Image src={'/blog02.jfif'} alt={''}
              height={800}
              width={800} className='rounded-lg xl:w-[959px]'>
              </Image>
              <div className='flex space-x-5  items-center'>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <RiAdminFill />
              <p className='text-sm md:text-base'>Admin</p>
             </div>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <FaCalendar />
              <p className='text-sm md:text-base'>14 Oct 2022</p>
              </div>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <FaTag />
              <p className='text-sm md:text-base'>Wood</p>
              </div>
              </div>
              <h1 className='font-semibold text-3xl'>Cart Totals</h1>
              <p className='text-[#9f9f9f] xl:w-[959px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel obcaecati nihil illo, incidunt inventore est vero dignissimos assumenda provident modi maxime, aut veniam magnam. Odio sed enim reiciendis voluptates?
                Ullam dolore vel fugiat laudantium saepe autem explicabo omnis nihil earum et doloremque, consectetur sequi tempore animi officia quos sit dolorem nam, nulla excepturi. Harum doloremque nostrum blanditiis illo deleniti.
                Temporibus eaque suscipit repellendus! Ipsa deserunt nostrum beatae nisi iusto harum, sint quisquam sapiente quia similique aliquid autem dolores natus possimus quo. S debitis hic.
              </p>
              <div className='space-y-2'>
              <p className='text-lg'>
                Read more
              </p>
              <p className='h-[1px] rounded-lg bg-black w-20'></p>
              </div>
              </div>
                {/* part02 */}
                <div className='space-y-6 '>
              <Image src={'/blog04.jpeg'} alt={''}
              height={800}
              width={800} className='rounded-lg xl:w-[959px]'>
              </Image>
              <div className='flex space-x-5  items-center'>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <RiAdminFill />
              <p className='text-sm md:text-base'>Admin</p>
             </div>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <FaCalendar />
              <p className='text-sm md:text-base'>14 Oct 2022</p>
              </div>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <FaTag />
              <p className='text-sm md:text-base'>Wood</p>
              </div>
              </div>
              <h1 className='font-semibold text-3xl'>Cart Totals</h1>
              <p className='text-[#9f9f9f] xl:w-[959px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel obcaecati nihil illo, incidunt inventore est vero dignissimos assumenda provident modi maxime, aut veniam magnam. Odio sed enim reiciendis voluptates?
                Ullam dolore vel fugiat laudantium saepe autem explicabo omnis nihil earum et doloremque, consectetur sequi tempore animi officia quos sit dolorem nam, nulla excepturi. Harum doloremque nostrum blanditiis illo deleniti.
                Temporibus eaque suscipit repellendus! Ipsa deserunt nostrum beatae nisi iusto harum, sint quisquam sapiente quia similique aliquid autem dolores natus possimus quo. S debitis hic.
              </p>
              <div className='space-y-2'>
              <p className='text-lg'>
                Read more
              </p>
              <p className='h-[1px] rounded-lg bg-black w-20'></p>
              </div>
              </div>
              {/* part03 */}
              <div className='space-y-6 '>
              <Image src={'/blog05.jpeg'} alt={''}
              height={800}
              width={800} className='rounded-lg xl:w-[959px]'>
              </Image>
              <div className='flex space-x-5  items-center'>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <RiAdminFill />
              <p className='text-sm md:text-base'>Admin</p>
             </div>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <FaCalendar />
              <p className='text-sm md:text-base'>14 Oct 2022</p>
              </div>
              <div className='text-[#9f9f9f] items-center text-xl flex space-x-2'>
              <FaTag />
              <p className='text-sm md:text-base'>Wood</p>
              </div>
              </div>
              <h1 className='font-semibold text-3xl'>Cart Totals</h1>
              <p className='text-[#9f9f9f] xl:w-[959px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel obcaecati nihil illo, incidunt inventore est vero dignissimos assumenda provident modi maxime, aut veniam magnam. Odio sed enim reiciendis voluptates?
                Ullam dolore vel fugiat laudantium saepe autem explicabo omnis nihil earum et doloremque, consectetur sequi tempore animi officia quos sit dolorem nam, nulla excepturi. Harum doloremque nostrum blanditiis illo deleniti.
                Temporibus eaque suscipit repellendus! Ipsa deserunt nostrum beatae nisi iusto harum, sint quisquam sapiente quia similique aliquid autem dolores natus possimus quo. S debitis hic.
              </p>
              <div className='space-y-2'>
              <p className='text-lg'>
                Read more
              </p>
              <p className='h-[1px] rounded-lg bg-black w-20'></p>
              </div>
              </div>
              </div>
              {/* right box */}
              <div className='space-y-10'>
              <div className="flex items-center border border-[#9F9F9F] rounded-lg pl-4 pr-16 py-5">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent"
      />
      <div className='text-2xl relative left-12'>
      <LuSearch />
      </div>
    </div>
         <h5 className='font-medium text-2xl'>
          Category
         </h5>
         <div className='space-y-8 text-lg text-[#9f9f9f]'>
          <div className='flex justify-between'>
            <p>
              Cart
            </p>
            <p>
              2
            </p>
          </div>
          <div className='flex justify-between'>
            <p>
              Design
            </p>
            <p>
              8
            </p>
          </div>
          <div className='flex justify-between'>
            <p>
              Handmade
            </p>
            <p>
              7
            </p>
          </div>
          <div className='flex justify-between'>
            <p>
              Interior
            </p>
            <p>
              1
            </p>
          </div>
          <div className='flex justify-between'>
            <p>
              Wood
            </p>
            <p>
              6
            </p>
          </div>
         </div>
         {/* box02 */}
         <div className='space-y-8'>
         <h5 className='font-medium mt-28 text-2xl'>
          Recent Posts
         </h5>
         <div className='flex space-x-4'>
          <Image src={'/blog06.jpeg'} alt={''}
          height={90}
          width={90}></Image>
          <div className=' mt-4 space-y-1'>
            <p className=' w-[150px]'>
              Going all-in with millenial design
            </p>
            <p className='text-xs  text-[#9f9f9f]'>
              03 Aug 2022
            </p>
          </div>
         </div>
         <div className='flex space-x-4'>
          <Image src={'/blog07.jpeg'} alt={''}
          height={90}
          width={90}></Image>
          <div className=' mt-4 space-y-1'>
            <p className=' w-[150px]'>
              Exploring new ways of decorating
            </p>
            <p className='text-xs  text-[#9f9f9f]'>
              03 Aug 2022
            </p>
          </div>
         </div>
         <div className='flex space-x-4'>
          <Image src={'/blog08.jpeg'} alt={''}
          height={90}
          width={90}></Image>
          <div className=' mt-4 space-y-1'>
            <p className=' w-[155px]'>
           Handmade pieces that took time to make
            </p>
            <p className='text-xs  text-[#9f9f9f]'>
              03 Aug 2022
            </p>
          </div>
         </div>
         <div className='flex space-x-4'>
          <Image src={'/blog09.jpeg'} alt={''}
          height={90}
          width={90}></Image>
          <div className=' mt-4 space-y-1'>
            <p className=' w-[140px]'>
            Moder home in Milan  
            </p>
            <p className='text-xs  text-[#9f9f9f]'>
              03 Aug 2022
            </p>
          </div>
         </div>
         <div className='flex space-x-4'>
          <Image src={'/blog10.jpeg'} alt={''}
          height={90}
          width={90}></Image>
          <div className=' mt-4 space-y-1'>
            <p className=' w-[150px]'>
              Colorfull office redesign 
            </p>
            <p className='text-xs  text-[#9f9f9f]'>
              03 Aug 2022
            </p>
          </div>
          </div>
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
            <Foot></Foot>
        </section>
    </main>
  )
}
