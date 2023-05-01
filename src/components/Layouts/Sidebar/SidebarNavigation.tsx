import { Link } from "react-router-dom";

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
      {navigation.map((item) => (
        <Link to={item.to} key={item.name}>
          <SidebarItem>{item.name}</SidebarItem>
        </Link>
      ))}
    </>
  );
};
