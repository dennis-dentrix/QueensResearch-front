import { useState } from "react";
import { Outlet } from "react-router";
import SideNav from "./SideNav";
import TopBar from "./Topbar";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative flex min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden ">

      {/* 1. SideNav Component */}
      <SideNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* 2. Mobile Backdrop/Overlay (Only visible when open on small screens) */}
      {isSidebarOpen && (
        <div
          onClick={handleCloseSidebar}
          className="fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 lg:hidden"
          role="presentation"
        />
      )}

      {/* 3. Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen lg:pl-64">
        <TopBar onMenuToggle={handleMenuToggle} />
        <div className="flex-1 flex flex-col overflow-hidden p-4 md:px-8">
          <Outlet />
        </div>
      </main>

    </div>
  );
}
