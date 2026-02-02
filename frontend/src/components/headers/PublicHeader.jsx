import { useState } from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Search", type: "search"},
    { name: "Sign Up", to: "/register", type:"button" },
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
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => {
              // Search input
              if (item.type === "search") {
                return (
                  <input
                    key={item.name}
                    type="text"
                    placeholder="Search fortune"
                    className="px-3 py-1 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  />
                );
              }

              // Sign Up button
              if (item.type === "button") {
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
                  >
                    {item.name}
                  </Link>
                );
              }

              // Regular link
              return (
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
              );
            })}
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
