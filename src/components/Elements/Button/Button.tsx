import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

const getSizesStyle = ({ size = "md" }) => {
  switch (size) {
    case "sm":
      return css`
        padding: 5px 10px;
      `;

    case "lg":
      return css`
        padding: 15px 30px;
      `;

    default:
      return css`
        padding: 10px 20px;
      `;
  }
};

type BaseButtonProps = {
  size?: "sm" | "md" | "lg";
};

const BaseButton = styled.button<BaseButtonProps>`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  ${(props) => getSizesStyle(props)}

  cursor: pointer;
`;

const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ButtonSecondary = styled(BaseButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  styleType: "default" | "primary" | "secondary";
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Button = ({ styleType, children, size, ...props }: PropsType) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return (
    <Component size={size} {...props}>
      {children}
    </Component>
  );
};
