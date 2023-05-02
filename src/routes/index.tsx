import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/Layouts/MainLayout";
import { Album, Home, Profile } from "@/pages";
import { ErrorPage } from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/albums", element: <Album /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
