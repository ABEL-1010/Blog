import { useState } from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Search"},
    { name: "Sign Up", to: "/register" },
    { name: "Login", to: "/login" },
  ];

  return (
    <header className="w-full bg-white text-black border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <div className="text-xl font-extrabold tracking-wide">
            <Link to="/">Fortune</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="relative text-black/80 hover:text-black transition
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[1px] after:w-0 after:bg-black
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-black/80 hover:text-black transition"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default PublicHeader;
