import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const UserHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-white text-black border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="text-xl font-extrabold tracking-wide">
            Fortune
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-black" : "text-black/800 hover:text-purple"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/search"
              className="text-white/400 hover:text-black transition"
            >
              Search
            </NavLink>

            <NavLink
              to="/write"
              className="text-black transition"
            >
              Write
            </NavLink>

            {/* Profile Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <button className="flex items-center gap-1 text-black transition">
                <User size={18} />
              </button>

                            
              {profileOpen && (
                <div className="absolute z-50 right-0 mt-3 w-44 bg-white border border-neutral-200 rounded-md shadow-lg">
                  <div className="px-4 py-2 text-xs text-black border-b border-neutral-200">
                    {user?.name}
                  </div>

                  <NavLink
                    to="/analytics"
                    className="block px-4 py-2 text-sm text-black  hover:bg-neutral-200"
                  >
                    Analytics
                  </NavLink>

                  <NavLink
                    to="/settings"
                    className="block px-4 py-2 text-sm text-black hover:bg-neutral-900"
                  >
                    Settings
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
              
            </div>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800">
          <nav className="flex flex-col px-4 py-4 space-y-3 text-sm">
            <NavLink to="/" className="text-white/80 hover:text-white">
              Home
            </NavLink>

            <NavLink to="/search" className="text-white/80 hover:text-white">
              Search
            </NavLink>

            <NavLink to="/write" className="text-white/80 hover:text-white">
              Write
            </NavLink>

            <div className="border-t border-neutral-800 pt-3">
              <span className="block text-xs text-white/50 mb-2">
                Profile
              </span>

              <NavLink
                to="/analytics"
                className="block py-1 text-white/80 hover:text-white"
              >
                Analytics
              </NavLink>

              <NavLink
                to="/settings"
                className="block py-1 text-white/80 hover:text-white"
              >
                Settings
              </NavLink>

              <button
                onClick={handleLogout}
                className="block py-1 text-left text-red-400"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
