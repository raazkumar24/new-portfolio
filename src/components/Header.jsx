// import { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Button from './Button';
// import DarkModeToggle from './DarkModeToggle';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <a href="/" className="flex items-center gap-2">
//           <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Portfolio
//           </span>
//         </a>

//           <DarkModeToggle />

//         <Navbar />

//         <div className="hidden md:block">
//           <Button variant="primary" size="md">
//             Contact Me
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>

        {/* <div className="flex items-center gap-6"> */}
        <DarkModeToggle />

        <Navbar />

        <div className="hidden md:block">
          <Button
            variant="primary"
            size="md"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
