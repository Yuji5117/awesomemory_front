import { ReactNode } from "react";
import styled, { css } from "styled-components";

const getSizesfont = ({ size = "md" }) => {
  switch (size) {
    case "sm":
      return css`
        font-size: 12px;
      `;

    case "lg":
      return css`
        font-size: 24px;
      `;

    default:
      return css`
        font-size: 16px;
      `;
  }
};

type TextItemProps = {
  size: "sm" | "md" | "lg";
  isActive: boolean;
};

const TextItem = styled.p<TextItemProps>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.gray};
  ${(props) => getSizesfont(props)}
`;

type SidebarItemProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
};

export const SidebarItem = ({
  children,
  size = "md",
  isActive = false,
}: SidebarItemProps) => (
  <TextItem size={size} isActive={isActive}>
    {children}
  </TextItem>
);
