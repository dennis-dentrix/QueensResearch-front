import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Chat from "./Chats/Chat";
import Orders from "./orders/Orders";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
