import { Search, Bell, Menu, ChevronDown, Settings, ShoppingBasketIcon } from "lucide-react";
import ProfileDropdown from "../components/ProfileDropdown";




export default function TopBar({ onMenuToggle, title = "Dashboard" }) {
  return (
    // Header is sticky, sitting just above the main content (z-10)
    <header className="sticky top-0 z-50  w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-3 px-4 md:px-8 flex items-center justify-between">

      <div className="flex items-center gap-4">


        <button
          onClick={onMenuToggle}
          className="fixed top-4 left-4 z-40 p-2 rounded-full text-indigo-600 hover:bg-gray-100 transition-colors duration-200 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu size={24} />
        </button>

        {/* Title. Use ml-12 on mobile to account for the fixed menu button's width/position */}
        <h1 className="text-xl font-bold text-gray-800 ml-12 lg:ml-0">{title}</h1>
      </div>

      {/* Right Side: Actions and Profile */}
      <div className="flex items-center gap-3 md:gap-4">

        {/* Search Bar (Hidden on small screens) */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="search"
            placeholder="Search for orders or items..."
            className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>

        {/* Notifications Icon */}
        <button
          className="relative p-2 rounded-full text-primary/70 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Notifications"
        >
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          <Bell size={20} />
        </button>

        {/* Shopping Icon */}
        <button
          className="relative p-2 rounded-full text-primary/70 hover:text-primary/50 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Settings"
        >
          <span className="absolute -top-1 -right-1
          bg-accent text-white 
          text-xs font-bold 
          px-2 py-0.5 
          rounded-full 
          ring-2 ring-white 
          transform translate-x-1/2 -translate-y-1/2 
          whitespace-nowrap">1</span>

          <ShoppingBasketIcon size={22} />
        </button>

        {/* Profile Dropdown */}
        <div className="hidden sm:block">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
