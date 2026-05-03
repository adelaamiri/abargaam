// import { FaPhoneAlt } from "react-icons/fa";
// import { navLinks, siteInfo } from "../data/siteData";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 pt-4">
//       <div className="max-w-[1500px] mx-auto bg-[#098b98]/95 backdrop-blur-md rounded-md shadow-md px-6 md:px-12 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#home">
//           <img
//             src={siteInfo.logo}
//             alt="logo"
//             className="w-[120px] md:w-[145px] object-contain"
//           />
//         </a>

//         {/* Nav Links */}
//         <ul className="hidden lg:flex items-center gap-7 text-white text-[18px]">
//           {navLinks.map((link, index) => (
//             <li key={link.id} className="flex items-center gap-7">
//               <a
//                 href={`#${link.id}`}
//                 className={`hover:text-yellow-300 transition ${
//                   index === 0 ? "text-yellow-300" : ""
//                 }`}
//               >
//                 {link.title}
//               </a>

//               {index !== navLinks.length - 1 && (
//                 <span className="font-bold">•</span>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Phone */}
//         <div className="hidden md:flex items-center gap-3 text-white">
//           <div className="relative w-[78px] h-[78px] rounded-full bg-[#16a59d] flex items-center justify-center">
//             <span className="absolute inset-0 rounded-full border-2 border-green-300 animate-ringWave"></span>
//             <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ringWave delay-500"></span>

//             <div className="relative z-10 w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center">
//               <FaPhoneAlt className="text-[#07908c] text-[22px]" />
//             </div>
//           </div>

//           <div>
//             <p className="text-[20px] font-medium">WhatsApp</p>
//             <p className="text-[20px] font-medium">{siteInfo.whatsapp}</p>
//           </div>
//         </div>

//         <button className="lg:hidden text-white text-3xl">☰</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { navLinks, siteInfo } from "../data/siteData";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 pt-4">
      <div className="max-w-[1500px] mx-auto bg-[#098b98]/95 backdrop-blur-md rounded-md shadow-md px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={siteInfo.logo}
            alt="ABARGAAM Logo"
            className="w-[120px] md:w-[145px] object-contain"
          />
        </NavLink>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-7 text-white text-[18px]">
          {navLinks.map((link, index) => (
            <li key={link.id} className="flex items-center gap-7">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-yellow-300 ${
                    isActive ? "text-yellow-300" : "text-white"
                  }`
                }
              >
                {link.title}
              </NavLink>

              {index !== navLinks.length - 1 && (
                <span className="font-bold">•</span>
              )}
            </li>
          ))}
        </ul>

        {/* Phone */}
        <div className="hidden md:flex items-center gap-3 text-white">
          <div className="relative w-[78px] h-[78px] rounded-full bg-[#16a59d] flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-green-300 animate-ringWave"></span>
            <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ringWave delay-500"></span>

            <div className="relative z-10 w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center">
              <FaPhoneAlt className="text-[#07908c] text-[22px]" />
            </div>
          </div>

          <div>
            <p className="text-[20px] font-medium">WhatsApp</p>
            <p className="text-[20px] font-medium">{siteInfo.whatsapp}</p>
          </div>
        </div>

        <button className="lg:hidden text-white text-3xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
