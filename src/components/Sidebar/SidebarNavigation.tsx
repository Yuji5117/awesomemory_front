import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { SidebarItem } from "./SidebarItem";

export const SidebarNavigatoin = () => {
  const navigation = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Albums",
      to: "./albums",
    },
    {
      name: "Profile",
      to: "./profile",
    },
  ];

  return (
    <>
      <NavTitle>Menu</NavTitle>
      {navigation.map((item) => (
        <Container key={item.name}>
          <NavLink to={item.to}>
            {({ isActive }) => (
              <SidebarItem size="lg" isActive={isActive}>
                {item.name}
              </SidebarItem>
            )}
          </NavLink>
        </Container>
      ))}
      <Container>
        <NavLink to={"/login"}>
          <SidebarItem size="lg">Logout</SidebarItem>
        </NavLink>
      </Container>
    </>
  );
};

const NavTitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const Container = styled.div`
  padding-top: 25px;
`;
