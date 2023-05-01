import { ReactNode } from "react";

type ContentLayoutProps = {
  children: ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => (
  <div>{children}</div>
);
