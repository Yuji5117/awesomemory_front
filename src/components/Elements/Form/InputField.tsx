import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

type InputFieldProps = {
  type: "text" | "email" | "password";
  regitration: UseFormRegisterReturn;
};

export const InputField = ({ type, regitration }: InputFieldProps) => {
  return <StyledInput type={type} {...regitration} />;
};

const StyledInput = styled.input`
  width: 200px;
`;
