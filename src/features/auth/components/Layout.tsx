import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>ログイン</h1>
      <div>{children}</div>
    </div>
  );
};
