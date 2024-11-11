// Sidebar.jsx
import React from 'react';
import Link from 'next/link';
import HomeIcon from './Icons/HomeIcon';
import ProfileIcon from './Icons/About';
import CustomIcon from './Icons/Contact';
import FourthIcon from './Icons/Portfolio';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen min-w-[25vw] bg-white flex justify-center items-center transition-all duration-300 ease-in shadow-md">
      <div className="h-[70vh] w-[15vw] text-center flex flex-col justify-between">
        <div className="logo">
          <h3 className="text-3xl lg:text-2xl sm:text-xl font-['Style Script'] text-[orangered] border-b border-orange-600">
            Jawad
          </h3>
        </div>
        <ul className="font-['Poppins'] font-extrabold text-gray-600">
          <li className="flex items-center gap-4 my-8 hover:text-orange-600 hover:cursor-pointer transition-all duration-300">
            <Link href="../../">
              <div className="w-6 h-6 inline-block">
                <HomeIcon />
              </div>
              <span className="lg:block sm:hidden">Home</span>
            </Link>
          </li>
          <li className="flex items-center gap-4 my-8 hover:text-orange-600 hover:cursor-pointer transition-all duration-300">
            <Link href="../../About">
              <div className="w-6 h-6 inline-block">
                <ProfileIcon />
              </div>
              <span className="lg:block sm:hidden">About</span>
            </Link>
          </li>
          <li className="flex items-center gap-4 my-8 hover:text-orange-600 hover:cursor-pointer transition-all duration-300">
            <Link href="../../portfolio">
              <div className="w-6 h-6 inline-block">
                <FourthIcon />
              </div>
              <span className="lg:block sm:hidden">Portfolio</span>
            </Link>
          </li>
          <li className="flex items-center gap-4 my-8 hover:text-orange-600 hover:cursor-pointer transition-all duration-300">
            <Link href="../../Contact">
              <div className="w-6 h-6 inline-block">
                <CustomIcon />
              </div>
              <span className="lg:block sm:hidden">Contact</span>
            </Link>
          </li>
        </ul>
        <div className="space"></div>
      </div>
    </div>
  );
}
