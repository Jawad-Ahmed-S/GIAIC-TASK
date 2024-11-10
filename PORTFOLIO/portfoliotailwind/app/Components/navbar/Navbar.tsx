// import Link from "next/link";
// import React from "react";
// import HomeIcon from "./Icons/HomeIcon.js";
// import ProfileIcon from "./Icons/About.js";
// import CustomIcon from "./Icons/Contact.js";
// import FourthIcon from "./Icons/Portfolio.js";

// export default function Navbar() {
//     return (

//         <div className="fixed top-0 left-0 h-screen min-w-[25vw] bg-white flex justify-center items-center shadow-md transition-all duration-300 dark:bg-black dark:text-white">
//             <div className="flex flex-col justify-between h-[70vh] w-[15vw] text-center">
//                 <div className="font-serif text-3xl text-orangered border-b border-orangered dark:text-white">
//                     <h3 className="font-default">Jawad</h3>
//                 </div>

//                 <ul className="flex flex-col gap-8 mt-4 font-sans font-bold list-none text-gray-600 dark:text-gray-400">
//                     <li className="flex items-center gap-4 hover:text-orangered transition-all duration-300 cursor-pointer">
//                         <Link href="../../"><HomeIcon /><span className="font-default">Home</span></Link>
//                     </li>
//                     <li className="flex items-center gap-4 hover:text-orangered transition-all duration-300 cursor-pointer">
//                         <Link href="../../About"><ProfileIcon /><span className="font-default">About</span></Link>
//                     </li>
//                     <li className="flex items-center gap-4 hover:text-orangered transition-all duration-300 cursor-pointer">
//                         <Link href="../../portfolio"><FourthIcon /><span className="font-default">Portfolio</span></Link>
//                     </li>
//                     <li className="flex items-center gap-4 hover:text-orangered transition-all duration-300 cursor-pointer">
//                         <Link href="../../Contact"><CustomIcon /><span className="font-default">Contact</span></Link>
//                     </li>
//                 </ul>
//                <div className="flex justify-center items-center">
//                     {/* Slider example - customize as needed */}
//                     {/* <div className="w-[7vw] h-10 rounded-full bg-yellow-300 flex justify-start items-center dark:bg-indigo-600 transition-all duration-500">
//                         <Image id="slider-mode" width={30} height={30} src="icons/day.png" alt="Day Icon" />
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }
