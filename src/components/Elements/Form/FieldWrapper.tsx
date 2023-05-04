import { ReactNode } from "react";

type FieldWrapperProps = {
  children: ReactNode;
  label: string;
};

export const FieldWrapper = ({ children, label }: FieldWrapperProps) => {
  return (
    <div>
      <label>
        {label}
        <div>{children}</div>
      </label>
    </div>
  );
};
