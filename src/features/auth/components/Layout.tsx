import { ReactNode } from "react";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};
