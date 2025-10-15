// AppLayout.jsx
import React, { useState } from "react"; // 1. Import useState
import { Outlet } from "react-router";
import SideNav from "./SideNav";
import TopBar from "./Topbar";

export default function AppLayout() {
  // 2. State for sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 3. Toggle function to pass to TopBar
  const handleMenuToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex  bg-background text-text">
      {/* 4. Pass the state and setter to SideNav */}
      <SideNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* 5. Pass the toggle function to TopBar */}
      <div className="flex-1 flex flex-col min-w-0 relative lg:pl-64">
        <TopBar onMenuToggle={handleMenuToggle} />
        <Outlet />
      </div>
    </div>
  );
}
