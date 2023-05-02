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
        padding: 18px;
      `;
  }
};

type TextItemProps = {
  size: "sm" | "md" | "lg";
  isSelected: boolean;
};

const TextItem = styled.p<TextItemProps>`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : theme.colors.gray};
  ${(props) => getSizesfont(props)}
`;

type SidebarItemProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  isSelected?: boolean;
};

export const SidebarItem = ({
  children,
  size = "md",
  isSelected = false,
}: SidebarItemProps) => (
  <TextItem size={size} isSelected={isSelected}>
    {children}
  </TextItem>
);
