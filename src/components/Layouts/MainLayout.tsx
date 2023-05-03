import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { ContentLayout } from "./ContentLayout";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => (
  <Wrapper>
    <Sidebar />
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;
