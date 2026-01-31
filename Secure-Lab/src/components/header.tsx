import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "border-b-2 border-[var(--primary-color)]"; // active link style

  return (
    <header className="bg-black text-[var(--text-color)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="font-bold text-xl">Secure Lab</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? activeClass : "hover:text-[var(--primary-color)]"}
          >
            Home
          </NavLink>
          <NavLink
            to="/lab"
            className={({ isActive }) => isActive ? activeClass : "hover:text-[var(--primary-color)]"}
          >
            Secure Lab
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? activeClass : "hover:text-[var(--primary-color)]"}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? activeClass : "hover:text-[var(--primary-color)]"}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black text-white flex flex-col px-4 py-2 space-y-2">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : "max-w-fit"}>
            Home
          </NavLink>
          <NavLink to="/lab" className={({ isActive }) => isActive ? activeClass : ""}>
            Secure Lab
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : ""}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : ""}>
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
