import { Outlet } from "react-router-dom";

import { ContentLayout } from "./ContentLayout";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => (
  <div>
    <Sidebar />
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  </div>
);
