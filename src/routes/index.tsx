import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/Layouts/MainLayout";
import { Album, Home, Profile } from "@/pages";
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/albums", element: <Album /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
