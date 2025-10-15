import {
  LayoutDashboard,
  FolderKanban,
  User,
  Wallet,
  Settings,
  LogOut,
  MessageCircleMore,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import queensLogo from "../assets/logo.jpg";

function NavItem({ to, icon, children, isActive, isDanger = false }) {
  const baseClasses =
    "flex items-center gap-3 px-4 py-3 rounded-lg relative transition-colors duration-200 ";

  const stateClasses = isActive
    ? "bg-primary/10 text-primary"
    : isDanger
    ? "text-text/80 hover:bg-danger/10 hover:text-danger"
    : "text-text/80 hover:bg-background";

  return (
    <Link to={to} className={`${baseClasses} ${stateClasses}`}>
      {isActive && (
        // Standardized marker size
        <div className="absolute left-0 w-1 h-5 bg-primary rounded-r-full" />
      )}
      {icon}
      <span className="font-medium text-base">{children}</span>
    </Link>
  );
}

function NavGroupHeader({ children }) {
  return (
    <h3 className="px-4 pt-6 pb-2 text-sm font-semibold text-text/60 uppercase tracking-wider">
      {children}
    </h3>
  );
}

export default function SideNav({ isOpen, setIsOpen }) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-background z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } 
    lg:translate-x-0
  `}
      >
        <aside className="h-full w-64 flex flex-col bg-white rounded-r-2xl shadow-lg">
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b border-subtle">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={queensLogo}
                alt="QueensReaserch Logo"
                className="w-8 rounded-full"
              />
              {/* Uses text-lg (18px) for logo text */}
              <span className="text-xl font-bold text-text">
                QueensReaserch
              </span>
            </div>
            <button
              className="p-1.5 rounded-lg hover:bg-background lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} className="text-text" />
            </button>
          </header>

          {/* Navigation */}
          {/* Standardized px-3 and py-4 for padding within the nav area */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            <NavGroupHeader>Overview</NavGroupHeader>
            <NavItem
              to="/"
              icon={<LayoutDashboard size={20} />}
              isActive={activePath === "/"}
            >
              Dashboard
            </NavItem>

            <NavGroupHeader>Workspace</NavGroupHeader>
            <NavItem
              to="/orders"
              icon={<FolderKanban size={20} />}
              isActive={activePath === "/orders"}
            >
              Orders
            </NavItem>
            <NavItem
              to="/chat"
              icon={<MessageCircleMore size={20} />}
              isActive={activePath === "/chat"}
            >
              Chat
            </NavItem>

            <NavGroupHeader>Account</NavGroupHeader>
            <NavItem
              to="/profile"
              icon={<User size={20} />}
              isActive={activePath === "/profile"}
            >
              Profile
            </NavItem>
            <NavItem
              to="/invoices"
              icon={<Wallet size={20} />}
              isActive={activePath === "/invoices"}
            >
              Invoices
            </NavItem>
            <NavItem
              to="/settings"
              icon={<Settings size={20} />}
              isActive={activePath === "/settings"}
            >
              Settings
            </NavItem>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-background">
            <NavItem to="/logout" icon={<LogOut size={20} />} isDanger>
              Log Out
            </NavItem>
          </div>
        </aside>
      </div>
    </>
  );
}
