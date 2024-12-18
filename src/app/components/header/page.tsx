"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosContacts } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const handleNav = () => {
    setMenuOpen(!menuOpen); // Toggles the menu state
  };

  const handleCloseMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Check if the click is outside the menu or the menu icon
    if (!target.closest(".menu") && !target.closest(".menu-icon")) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("click", handleCloseMenu);
    } else {
      window.removeEventListener("click", handleCloseMenu);
    }

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("click", handleCloseMenu);
    };
  }, [menuOpen]);

  // Determine background color based on route
  const bgColor = pathname === "/" ? "bg-[#FBEBB5] " : "bg-white";

  return (
    <main>
      <section className={`${bgColor} transition-colors duration-300`}>
        <div className="h-28 flex items-center xl:space-x-0 lg:space-x-20 justify-center">
          <div className="hidden lg:flex space-x-16 lg:mr-36 xl:mr-0 xl:ml-20">
            <Link href={"/"} className="font-medium">
              Home
            </Link>
            <Link href={"/shop"} className="font-medium">
              Shop
            </Link>
            <Link href={"/blogs"} className="font-medium">
              About
            </Link>
            <Link href={"/contact"} className="font-medium">
              Contact
            </Link>
          </div>
          <div className="lg:flex space-x-10 relative xl:left-[500px] hidden">
            <IoIosContacts size={30} />
            <CiSearch size={30} />
            <IoIosHeartEmpty size={30} />
            <Link href={"/cart"}>
              <IoCartOutline size={30} />
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div
            onClick={handleNav}
            className="cursor-pointer ml-[260px] md:ml-[720px] lg:hidden menu-icon"
          >
            <FiMenu size={30} />
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-20 left-0 bg-white w-full md:w-1/4 md:left-[574px] flex flex-col space-y-4 p-6 z-50 lg:hidden menu">
              <Link href="/" className="text-xl py-2 px-4">
                Home
              </Link>
              <Link href="/shop" className="text-xl py-2 px-4">
                Shop
              </Link>
              <Link href="/blog" className="text-xl py-2 px-4">
                About
              </Link>
              <Link href="/contact" className="text-xl py-2 px-4">
                Contact
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}



// import Link from 'next/link';
// import React, { useState } from 'react';
// import { IoIosContacts } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoCartOutline } from 'react-icons/io5';
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <main>
//       <section>
//         <div className='h-28 bg-[#FBEBB5] flex items-center justify-between px-4 lg:px-20'>
//           {/* Desktop Menu */}
//           <div className='hidden lg:flex space-x-16'>
//             <Link href={'/'} className='font-medium'>Home</Link>
//             <Link href={'/shop'} className='font-medium'>Shop</Link>
//             <Link href={'/'} className='font-medium'>About</Link>
//             <Link href={'/contact'} className='font-medium'>Contact</Link>
//           </div>

//           {/* Right Section */}
//           <div className="flex space-x-10 items-center">
//             <IoIosContacts size={30} className="hidden lg:block" />
//             <CiSearch size={30} className="hidden lg:block" />
//             <IoIosHeartEmpty size={30} className="hidden lg:block" />
//             <Link href={'/cart'}>
//               <IoCartOutline size={30} className="hidden lg:block" />
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <div className="lg:hidden flex items-center">
//               {menuOpen ? (
//                 <div onClick={() => setMenuOpen(false)} className="cursor-pointer">
//                   <FiX size={30} />
//                 </div>
//               ) : (
//                 <div onClick={() => setMenuOpen(true)} className="cursor-pointer">
//                   <FiMenu size={30} />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="lg:hidden bg-[#FBEBB5] p-4 flex flex-col space-y-4">
//             <Link href={'/'} className='font-medium' onClick={() => setMenuOpen(false)}>Home</Link>
//             <Link href={'/shop'} className='font-medium' onClick={() => setMenuOpen(false)}>Shop</Link>
//             <Link href={'/'} className='font-medium' onClick={() => setMenuOpen(false)}>About</Link>
//             <Link href={'/contact'} className='font-medium' onClick={() => setMenuOpen(false)}>Contact</Link>
//             <div className="flex space-x-6">
//               <IoIosContacts size={30} />
//               <CiSearch size={30} />
//               <IoIosHeartEmpty size={30} />
//               <Link href={'/cart'}>
//                 <IoCartOutline size={30} />
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }
