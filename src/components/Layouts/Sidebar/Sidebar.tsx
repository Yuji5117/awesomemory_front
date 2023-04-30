import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => (
  <div>
    <ul>
      <li>
        <SidebarItem isSelected>Home</SidebarItem>
      </li>
      <li>
        <SidebarItem>Albums</SidebarItem>
      </li>
      <li>
        <SidebarItem>Profile</SidebarItem>
      </li>
    </ul>
  </div>
);
