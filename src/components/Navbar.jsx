import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import { navLinks } from "../constants";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [active, setActive] = useState("Home");

  // Update active state based on the current pathname
  useEffect(() => {
    const pathname = location.pathname.split("/")[1]; // Get the first part of the path
    setActive(pathname.charAt(0).toUpperCase() + pathname.slice(1)); // Capitalize the first letter
  }, [location]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className='text-[#569199] font-bold text-2xl cursor-pointer flex'>MedMind Innovision</h1>
      <ul className="list-none flex flex-row justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-secondary ${
              active === nav.title ? "border-b-2 border-b-secondary" : ""
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link> {/* Use Link component */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
