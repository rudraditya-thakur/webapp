import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");

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
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
