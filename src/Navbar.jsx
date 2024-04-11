// import React, { useState } from "react";
// import logo from "./logo.png";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       className="
//         flex flex-wrap
//         items-center
//         justify-between
//         w-full
//         py-4
//         md:py-0
//         px-4
//         text-lg text-gray-700
//         bg-white
//         fixed top-0 left-0 z-50
//       "
//     >
//       <div>
//         <a href="#">
//           <img src={logo} className="h-12" alt="Flowbite Logo" />
//         </a>
//       </div>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         id="menu-button"
//         className="h-6 w-6 cursor-pointer md:hidden block"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         onClick={() => setSearchOpen(!searchOpen)}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M4 6h16M4 12h16M4 18h16"
//         />
//       </svg>
//       <div
//         className={`w-full md:flex md:items-center md:w-auto ${
//           searchOpen ? "" : "hidden"
//         }`}
//         id="menu"
//       >
//         <ul
//           className="
//             pt-4
//             text-base text-gray-700
//             md:flex
//             md:justify-between 
//             md:pt-0"
//         >
//           <li>
//             <button
//               onClick={scrollToTop}
//               className="md:p-4 py-2 block hover:text-purple-400"
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="md:p-4 py-2 block hover:text-purple-400"
//             >
//               About
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection("projects")}
//               className="md:p-4 py-2 block hover:text-purple-400"
//             >
//               Projects
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection("services")}
//               className="md:p-4 py-2 block hover:text-purple-400"
//             >
//               Services
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="md:p-4 py-2 block hover:text-purple-400"
//             >
//               Contact
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-white
        fixed top-0 left-0 z-50
      "
    >
      <div>
        <Link to="/">
          <img src={logo} className="h-12" alt=" Logo" />
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <ul
          className="
            pt-4
            text-base
            md:flex
            md:justify-between 
            md:pt-0"
        >
          <li>
            <Link
              to="/"
              className="md:p-4 py-2 block hover:text-purple-400 text-red-500"
              style={{ color: "#ED2647" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="md:p-4 py-2 block hover:text-purple-400 text-red-500"
              style={{ color: "#ED2647" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="md:p-4 py-2 block hover:text-purple-400 text-red-500"
              style={{ color: "#ED2647" }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="md:p-4 py-2 block hover:text-purple-400 text-red-500"
              style={{ color: "#ED2647" }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="md:p-4 py-2 block hover:text-purple-400 text-red-500"
              style={{ color: "#ED2647" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/adminLogin"
              className="md:p-4 py-2 block hover:text-purple-400 text-red-500"
              style={{ color: "#ED2647" }}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
