import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Chat from "./features/chat/Chat";
import Settings from "./features/settings/Settings";
import Profile from "./features/settings/Profile";
import Security from "./features/settings/Security";
import Privacy from "./features/settings/Privacy";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "security", element: <Security /> },
          {
            path: "privacy", element: <Privacy />
          }

        ],
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
