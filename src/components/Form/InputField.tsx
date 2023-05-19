import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

import { FieldWrapper } from "./FieldWrapper";

type InputFieldProps = {
  type: "text" | "email" | "password";
  regitration: UseFormRegisterReturn;
  label: string;
};

export const InputField = ({ type, regitration, label }: InputFieldProps) => {
  return (
    <FieldWrapper label={label}>
      <StyledInput type={type} {...regitration} />
    </FieldWrapper>
  );
};

const StyledInput = styled.input`
  width: 200px;
`;
