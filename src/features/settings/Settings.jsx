import { BellDot, GlobeLock, PersonStanding, ShieldAlert } from 'lucide-react';
import { NavLink, Outlet } from 'react-router';

export default function Settings() {

  const navItems = [
    { label: 'Restaurant Profile', path: '/settings/profile', icon: <PersonStanding size={20} /> },
    { label: 'Security', path: '/settings/security', icon: <ShieldAlert size={20} /> },
    // { label: 'Billing & Payments', path: '/settings/billing' },
    { label: 'Privacy & Policy', path: '/settings/privacy', icon: <GlobeLock size={20} /> },
  ];

  return (
    <div className="grid grid-cols-[16rem_1fr] h-full flex-1 bg-gray-50">
      {/* Sidebar */}
      <aside className="bg-white p-4 border-r border-gray-100 flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </aside>

      {/* Main Content */}
      <main className="p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
