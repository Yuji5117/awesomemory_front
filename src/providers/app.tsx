import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/lib/styled";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
