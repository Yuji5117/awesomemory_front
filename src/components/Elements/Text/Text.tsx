import { ReactNode } from "react";
import styled, { css } from "styled-components";

const getSizesStyle = ({ size = "md" }) => {
  switch (size) {
    case "xs":
      return css`
        font-size: 1.2rem;
      `;

    case "sm":
      return css`
        font-size: 1.4rem;
      `;

    case "lg":
      return css`
        font-size: 1.8rem;
      `;

    default:
      return css`
        font-size: 1.6rem;
      `;
  }
};

type TextProps = {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
};

export const Text = ({ children, size }: TextProps) => {
  return <StyledText size={size}>{children}</StyledText>;
};

const StyledText = styled.p<Pick<TextProps, "size">>`
  ${(props) => getSizesStyle(props)};
  color: #333333;
`;
