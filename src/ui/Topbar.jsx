import { Search, Bell, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Standardized padding and gap
        className="flex items-center gap-2 rounded-full hover:bg-background p-1.5 pr-3"
      >
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Alex+Turner"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        {/* Consistent text-sm for smaller profile text */}
        <span className="hidden md:block text-sm font-medium text-text">
          Alex Turner
        </span>
        <ChevronDown size={16} className="text-text/60 hidden md:block" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-text hover:bg-background transition-colors duration-150"
          >
            My Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-text hover:bg-background transition-colors duration-150"
          >
            Settings
          </Link>
          <div className="border-t border-subtle/50 my-1"></div>
          <Link
            to="/logout"
            className="block px-4 py-2 text-sm text-accent hover:bg-accent/10 transition-colors duration-150"
          >
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
}

export default function TopBar({ onMenuToggle, title = "Dashboard" }) {
  return (
    <header className="py-3 px-4 md:px-6 bg-white shadow-sm flex items-center justify-between border-b border-background">
      <div className="flex items-center gap-4">
        {/* Standardized menu icon size */}
        <button onClick={onMenuToggle} className="text-text lg:hidden">
          <Menu size={22} />
        </button>

        <h1 className="text-xl font-semibold text-text">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40"
          />
          <input
            type="search"
            placeholder="Search…"
            className="pl-10 pr-4 py-2 w-56 bg-background border border-subtle/50 rounded-full text-base text-text focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        {/* Notifications Icon */}
        <button className="relative p-2 rounded-full hover:bg-background text-text/70 hover:text-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-accent ring-2 ring-white" />
          <Bell size={20} />
        </button>

        {/* Profile Dropdown */}
        <ProfileDropdown />
      </div>
    </header>
  );
}
