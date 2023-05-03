import { Link } from "react-router-dom";
import styled from "styled-components";

import { SidebarNavigatoin } from "./SidebarNavigation";

export const Sidebar = () => {
  return (
    <Wrapper>
      <NavigationContainer>
        <Link to="/">
          <TitleLogo>Awesomemory</TitleLogo>
        </Link>
        <SidebarNavigatoin />
      </NavigationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e8e7ec;
  height: 100vh;
  width: 250px;
`;

const NavigationContainer = styled.div`
  padding-top: 60px;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleLogo = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;
`;
