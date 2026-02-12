import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Secure Lab", path: "/lab" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[--background-color]/90 backdrop-blur-md border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Secure Lab Logo" className="w-10 h-10 object-contain hover:opacity-90 transition-opacity" />
            <div className="flex flex-col">
              <h1 className="font-bold text-xl tracking-wide text-white font-[Inter]">
                Secure<span className="text-[--primary-color]">Lab</span>
              </h1>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative py-2 font-medium transition-colors duration-200 text-sm
                  ${isActive
                    ? "text-[--primary-color]"
                    : "text-[--text-muted] hover:text-white"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[--primary-color] rounded-full"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[--text-muted] hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[--surface-color] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block px-4 py-3 rounded-md transition-colors font-medium
                    ${isActive
                      ? "bg-[--primary-color]/10 text-[--primary-color]"
                      : "text-[--text-muted] hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
